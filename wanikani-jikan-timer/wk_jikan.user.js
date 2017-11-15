// ==UserScript==
// @name        WaniKani Jikan Timer
// @version     0.1.0
// @author      acm
// @description Time your reviews in various ways
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   WK_Jikan
//
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
    this.session_measurements = null;

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
    WK_Jikan.prototype.updateWidget = function()
    {
        var date_reviews_end  = new Date();
        var date_elapsed_time = new Date(date_reviews_end - this.date_reviews_start);
        var fmt_elapsed_time = date_elapsed_time.toISOString().substr(11, 8);

        this.estimated_time = Math.max(0, this.estimated_time - 1000);
        var fmt_estimated_time = new Date(this.estimated_time).toISOString().substr(11, 8);

        $(`#jikan_elapsed`).text(` ${fmt_elapsed_time}`);
        $(`#jikan_estimate`).text(` ${fmt_estimated_time}`);

        GM_setValue(`reviews_fmt_elapsed_time`, fmt_elapsed_time);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.handleReviews = function()
    {
        this.estimated_time = this.getCompletionEstimate();
        var fmt_estimated_time = new Date(this.estimated_time).toISOString().substr(11, 8);
        GM_setValue(`reviews_fmt_first_estimate`, fmt_estimated_time);

        var $widget = $(`<span></span>`)
                      .attr(`id`, `jikan_widget`)
                      .append(`<div><i class="icon-time"></i><span id="jikan_elapsed"></span></div>`)
                      .append(`<div><i class="icon-fast-forward"></i><span id="jikan_estimate"></span></div>`);

        $(`div#question`).append($widget);
        $(`#jikan_widget`)[0].drag();

        var widget_left = GM_getValue(`widget_left`) || `20px`;
        var widget_top  = GM_getValue(`widget_top`)  || `35px`;

        // Reset the widget in case it got "lost"
        if (parseInt(widget_left) < 0 || parseInt(widget_left) > (document.body.clientWidth  - 100) ||
            parseInt(widget_top)  < 0 || parseInt(widget_top)  > (document.body.clientHeight - 100))
        {
            widget_left = `20px`;
            widget_top  = `35px`;
        }

        $widget.css({top: widget_top, left: widget_left, position: "absolute"});

        this.date_reviews_start = new Date();
        this.date_start_time = new Date();
        setInterval(this.updateWidget.bind(this), 1000);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.handleReviewsSummary = function()
    {
        // TODO: do this only if another script didn't add it already!
        GM_addStyle(GM_getResourceText(`bootstrapcss`));

        $(`<script></script>`)
        .attr(`type`, `text/javascript`)
        .text(GM_getResourceText(`bootstrapjs`))
        .appendTo(`head`);

        // TODO: how to handle this after the last review question?
        var fmt_elapsed_time   = GM_getValue(`reviews_fmt_elapsed_time`);
        var fmt_estimated_time = GM_getValue(`reviews_fmt_first_estimate`) || `not stored yet`;

        if (!fmt_elapsed_time || !fmt_estimated_time)
            return;

        var $jikan_summary = $(`<div></div>`)
                             .addClass(`pure-g-r`);

        var $jikan_result = $(`<div></div>`)
                            .attr(`id`, `jikan`)
                            .addClass(`pure-u-1`);

        $jikan_summary = $jikan_summary.append($jikan_result);

        $(`div#review-stats`).parent().after($jikan_summary);

        var $head_btn = $(`<div class="btn-group pull-right"></div>`)
                        .append(`<a class="btn" id="jikan_head_settings" data-toggle="modal" data-target="#jikan_modal_settings">
                                    <i class="icon-gear"></i>
                                 </a>`)
                        .append(`<a class="btn" id="jikan_head_info" data-toggle="modal" data-target="#jikan_modal_info">
                                    <i class="icon-question"></i>
                                 </a>`);

        var $header = $(`<h2></h2>`)
                      .append(`<span><strong class="icon-time"></strong> Jikan Timer Summary</span>`)
                      .append($head_btn);

        $(`#jikan`).append($header);
        $(`#jikan`).append(
           `<div>
                <p>Your last review session was finished in ${fmt_elapsed_time}.</p>
                <p>The first time estimate for that session was ${fmt_estimated_time}.</p>
            </div>`
        );
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`jikan_style`));

        try {
            this.measurement_db = JSON.parse(GM_getValue(`measurement_db`)) || {"rad": {}, "kan": {}, "voc": {}};
        } catch(e) {
            GM_log(`Error while parsing the measurement_db! String was`, GM_getValue(`measurement_db`));
            this.measurement_db = {"rad": {}, "kan": {}, "voc": {}};
        }

        this.session_measurements = [];

        console.log("The current measurement db is", this.measurement_db);

        this.wki.init();

        $(document).on(`wk_page_ready`, this.readyCallback.bind(this));
        $(document).on(`wk_new_review_item_ready`, this.newItemCallback.bind(this));
        $(document).on(`wk_review_answered`, this.answeredCallback.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.run = function()
    {
        this.wki.detectCurPage.call(this.wki);

        this.injectModals();
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
