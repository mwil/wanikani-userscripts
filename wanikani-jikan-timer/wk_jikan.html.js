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
        // TODO: do this only if another script didn't add it already!
        GM_addStyle(GM_getResourceText(`bootstrapcss`).replace(/wk_namespace/g, GM_info.script.namespace));

        $(`<script></script>`)
        .attr(`type`, `text/javascript`)
        .text(GM_getResourceText(`bootstrapjs`))
        .appendTo(`head`);

        // TODO: how to handle this after the last review question?
        var fmt_elapsed_time   = GM_getValue(`reviews_fmt_elapsed_time`);
        var fmt_estimated_time = this.session_db.sessions.slice(-1)[0].estimate || `not stored yet`;

        if (!fmt_elapsed_time)
            return;

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
        $(`#jikan`).append(
           `<div id="jikan_summary_txt">
                <p>Your last review session was finished in ${fmt_elapsed_time}.
                The initial time estimate for that session was ${fmt_estimated_time}.</p>
            </div>`
        );

        if (this.session_db.answers.length)
            $(`#jikan`).append(`<div id="jikan_session_chart" class="svg-container"></div>`);
    };
    // #########################################################################
}
)();
// #############################################################################
