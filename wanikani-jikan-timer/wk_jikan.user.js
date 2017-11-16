// ==UserScript==
// @name        WaniKani Jikan Timer
// @version     0.1.0
// @author      acm
// @description Time your reviews in various ways
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   WK_Jikan
//
// @include     http://www.wanikani.com/*
// @include     https://www.wanikani.com/*
// @include     http://www.wanikani.com/review
// @include     https://www.wanikani.com/review
// @include     http://www.wanikani.com/review/session*
// @include     https://www.wanikani.com/review/session*
//
// @resource    jikan_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/wanikani-jikan-timer/css/jikan.css
//
// @require     http://localhost:8088/static/draggable.js
// @require     http://localhost:8088/static/wk_interaction.js
// @require     http://localhost:8088/static/wk_jikan.estimation.js

// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==

/* jshint esversion: 6 */

// #############################################################################
function WK_Jikan()
{
    this.wki = new WKInteraction();

    this.measurement_db = null;

    this.chart = null;

    this.session_measurements = [];

    this.date_reviews_start = null;
    this.date_start_time = null;

    this.estimated_time = 0;

    this.settings = {"debug": false};
}
// #############################################################################

// queue information:
// -- activeQueue: 10 items under review, filled again with reviewQueue
// -- reviewQueue: all other reviews go here
//
// -- questionCount: ??
// -- completedCount: ??
// -- wrongCount: ??
// -- questionType: meaning/reading
// -- currentItem

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.readyCallback = function(event, curPage)
    {
        switch(curPage)
        {
            case this.wki.PageEnum.reviews:
                this.handleReviews();
                break;
            case this.wki.PageEnum.reviews_summary:
                this.handleReviewsSummary();
                break;
            default:
                console.log("Unknown page type!");
        }
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.handleReviews = function()
    {
        this.injectReviewHTML();

        this.estimated_time = this.getCompletionEstimate();
        this.date_reviews_start = new Date();
        this.date_start_time    = new Date();

        var fmt_estimated_time  = new Date(this.estimated_time).toISOString().substr(11, 8);
        GM_setValue(`reviews_fmt_first_estimate`, fmt_estimated_time);


        this.initWidgetChart();
        this.updateWidget();

        setInterval(this.updateWidget.bind(this), 1000);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.handleReviewsSummary = function()
    {
        try {
            this.session_measurements = JSON.parse(GM_getValue(`last_session_measurements`)) || null;
        } catch(e) {
            this.session_measurements = null;
        }

        console.log("JikanUser: the last session measurements were", this.session_measurements);

        this.injectReviewSummaryHTML();

        if ($(`#jikan_last_session_chart`).length)
            this.drawSummaryChart();
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.init = function()
    {
        this.wki.init();

        var curPage = this.wki.detectCurPage.call(this.wki);

        if (curPage === this.wki.PageEnum.reviews ||
            curPage === this.wki.PageEnum.reviews_summary)
        {
            try {
                this.measurement_db = JSON.parse(GM_getValue(`measurement_db`)) || {"rad": {}, "kan": {}, "voc": {}};
            } catch(e) {
                GM_log(`Error while parsing the measurement_db! String was`, GM_getValue(`measurement_db`));
                this.measurement_db = {"rad": {}, "kan": {}, "voc": {}};
            }

            console.log("The current measurement db is", this.measurement_db);
            $(document).on(`wk_page_ready`, this.readyCallback.bind(this));
            $(document).on(`wk_new_review_item_ready`, this.newItemCallback.bind(this));
            $(document).on(`wk_review_answered`, this.answeredCallback.bind(this));
        }
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.run = function()
    {
        var curPage = this.wki.detectCurPage.call(this.wki);

        if (curPage === this.wki.PageEnum.reviews ||
            curPage === this.wki.PageEnum.reviews_summary)
        {
            GM_addStyle(GM_getResourceText(`jikan_style`));
            this.injectModals();

            this.wki.startInteraction.call(this.wki);
        }
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
var wk_jikan = new WK_Jikan();

wk_jikan.init();
wk_jikan.run();
// #############################################################################
