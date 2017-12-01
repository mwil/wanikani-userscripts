/* jshint esversion: 6 */

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.injectReviewHTML = function()
    {
        var $widget = $(`<span></span>`)
                      .attr(`id`, `jikan_widget`)
                      .addClass(GM_info.script.namespace)
                      .append(`<div><i class="icon-time"></i><span id="jikan_elapsed"></span></div>`)
                      .append(`<div><i class="icon-fast-forward"></i><span id="jikan_estimate"></span></div>`);

        $(`div#question`).append($widget);
        $(`#jikan_widget`)[0].drag();

        $(`#jikan_widget`).prepend(`<div id="jikan_chart"></div>`);

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
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.injectReviewSummaryHTML = function()
    {
        $(`<script></script>`)
        .attr(`type`, `text/javascript`)
        .text(GM_getResourceText(`bootstrapjs`))
        .appendTo(`head`);

        // TODO: do this only if another script didn't add it already!
        GM_addStyle(GM_getResourceText(`bootstrapcss`).replace(/wk_namespace/g, GM_info.script.namespace));

        var $jikan_summary = $(`<div></div>`)
                             .addClass(`${GM_info.script.namespace} pure-g-r`);

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

        if (!this.session_db.sessions.length)
            return;

        var last_session = this.session_db.sessions.slice(-1)[0];
        var fmt_elapsed_time = new Date(last_session.elapsed_time).toISOString().substr(11, 8);
        var fmt_estimated_time = new Date(last_session.estimate).toISOString().substr(11, 8);

        var session_mean   = d3.mean(this.session_db.answers.slice(last_session.start_index), (d) => d.time);
        var session_median = d3.median(this.session_db.answers.slice(last_session.start_index), (d) => d.time);

        if (this.session_db.answers.length)
        {
            var $session = $(`<div></div>`);
            // $session.append(`<h3>This Session</h3>`);
            $session.append(`<span id="jikan_session_chart" class="svg-container"></span>`);
            $session.append(
               `<ul>
                    <li>Your last review session with ${last_session.answer_cnt} questions was finished in ${fmt_elapsed_time}</li>
                    <li>The initial time estimate for the full session was ${fmt_estimated_time}</li>
                    <li>Time per question: mean ${session_mean.toFixed(3)}s, median ${session_median.toFixed(3)}s</li>
                </ul>`);

            $(`#jikan`).append($session);
        }

        var all_mean   = d3.mean(this.session_db.answers, (d) => d.time);
        var all_median = d3.median(this.session_db.answers, (d) => d.time);

        $(`#jikan`).append(
           `<div id="jikan_summary_txt">
                <h3>All Sessions</h3>
                <ul>
                    <li>There are ${this.session_db.answers.length} answers from ${this.session_db.sessions.length} sessions.</li>
                    <li>The sessions took ...</li>
                    <li>Time per question: mean ${all_mean.toFixed(3)}s, median ${all_median.toFixed(3)}s</li>
                </ul>
            </div>`
        );

    };
    // #########################################################################
}
)();
// #############################################################################
