// ==UserScript==
// @name        WaniKani Jikan Timer
// @version     0.3.0
// @author      acm
// @description Time your reviews in various ways
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_jikan
//
// @include     *://www.wanikani.com/*
//
// @resource    jikan_style   http://localhost:8088/static/jikan.css
// @resource    bootstrapcss  http://localhost:8088/static/bootstrap.crop.css
// @resource    bootstrapjs   http://localhost:8088/static/bootstrap.js
//
// @require     http://localhost:8088/static/draggable.js
// @require     http://localhost:8088/static/wk_interaction.js
// @require     http://localhost:8088/static/wk_jikan.widget.js
// @require     http://localhost:8088/static/wk_jikan.chart.js
// @require     http://localhost:8088/static/wk_jikan.html.js
// @require     http://localhost:8088/static/wk_jikan.estimation.js
// @require     http://localhost:8088/static/wk_jikan.modal.js
// @require     http://localhost:8088/static/wk_jikan.user.js
//
// @require     https://d3js.org/d3.v4.min.js
// @require     https://raw.githubusercontent.com/VACLab/d3-tip/master/d3-tip.js
//
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
    this.wki = new WKInteraction(GM_info.script.namespace);

    this.measurement_db = null;
    this.session_db = null;

    this.chart = null;

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

        this.estimated_time = this.getCompletionEstimateDB();
        this.date_reviews_start = new Date();
        this.date_start_time    = new Date();

        this.session_db.sessions.push({
            "start_index": this.session_db.answers.length,
            "date": Date.now(),
            "estimate": new Date(this.estimated_time).toISOString().substr(11, 8)
        });

        this.initWidgetChart();
        this.updateWidget();

        setInterval(this.updateWidget.bind(this), 1000);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.handleReviewsSummary = function()
    {
        this.injectReviewSummaryHTML();

        if ($(`#jikan_session_chart`).length)
            this.createSummaryChart(`#jikan_session_chart`);
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

            try {
                this.session_db = JSON.parse(GM_getValue(`session_db`)) || {"sessions": [], "answers": []};
            } catch(e) {
                GM_log(`Error while parsing the session_db! String was`, GM_getValue(`session_db`));
                this.session_db = {"sessions": [], "answers": []};
            }

            console.log("The current session db is", this.session_db);

            $(document).on(`${GM_info.script.namespace}_wk_page_ready`, this.readyCallback.bind(this));
            $(document).on(`${GM_info.script.namespace}_wk_new_review_item_ready`, this.newItemCallback.bind(this));
            $(document).on(`${GM_info.script.namespace}_wk_review_answered`, this.answeredCallback.bind(this));
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
            GM_addStyle(GM_getResourceText(`jikan_style`).replace(/wk_namespace/g, GM_info.script.namespace));
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
