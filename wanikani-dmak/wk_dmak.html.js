/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_DMAK.prototype.createDMAKSection = function(subject)
    {
        const $section =
            $(`<section>`)
                .attr(`id`, `wk_dmak_section`)
                .addClass(`${GM_info.script.namespace} col1`);

        const $heading =
            $(`<h2>Stroke Order</h2>`)
                .appendTo($section);

        // Control buttons on the right of the section header
        const $view_btn =
            $(`<span>`)
                .addClass(`btn-group`)
                .append(`<a class="btn" id="wk_dmak_head_magnify" data-toggle="modal" data-target="#wk_dmak_modal_draw">
                            <i class="icon-fullscreen"></i>
                        </a>`)
                .append(`<a class="btn" id="wk_dmak_head_visibility">
                            <i class="icon-eye-open"></i>
                        </a>`);

        const $main_btn =
            $(`<span>`)
                .addClass(`btn-group`)
                .append(`<a class="btn" id="wk_dmak_head_settings" data-toggle="modal" data-target="#wk_dmak_modal_settings">
                            <i class="icon-gear"></i>
                        </a>`)
                .append(`<a class="btn" id="wk_dmak_head_info" data-toggle="modal" data-target="#wk_dmak_modal_info">
                            <i class="icon-question"></i>
                        </a>`);

        const $btn_row = $(`<span>`)
            .attr(`id`, `wk_dmak_head_btn_group`)
            .addClass(`btn-group pull-right`)
            .append($view_btn)
            .append($main_btn)
            .appendTo($heading);

        const $container =
            $(`<div>`)
                .attr(`id`, `wk_dmak_main_fold`)
                // .addClass(`text-center`)
                .appendTo($section);

        const $draw_dmak =
            $(`<div>`)
                .attr(`id`, `wk_dmak_draw`)
                .appendTo($container);

        let rendering_now = true;
        let rendering_finished = false;

        const find_end_callback = function()
        {
            if (dmak.pointer === (dmak.strokes.length-1))
            {
                rendering_now = false;
                rendering_finished = true;
            }
        };

        const dmak = new Dmak(
            subject.kan||subject.voc,
            {
                element: `wk_dmak_draw`,
                autoplay: true,
                height: 120,
                width: 120,
                uri: `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/`,
                drew: find_end_callback
            }
        );

        const dmak_toggle = function()
        {
            if (rendering_finished)
            {
                dmak.erase();
                rendering_now = false;
                rendering_finished = false;

                return;
            }
            else
                if (rendering_now)
                    dmak.pause();
                else
                    dmak.render();

            rendering_now = !rendering_now;
        };

        $(document).on(`click`, `#wk_dmak_draw`, dmak_toggle);

        if (!$(`#wk_dmak_modal_settings`).length)
            this.injectModals(subject);

        return $section;
    };
    // #########################################################################

    // #########################################################################
    WK_DMAK.prototype.toggleMainFold = function(event)
    {
        $(`#wk_dmak_main_fold`).toggle();

        $(`#wk_dmak_head_visibility i`).toggleClass(`icon-eye-open`);
        $(`#wk_dmak_head_visibility i`).toggleClass(`icon-eye-close`);

        return false;
    };
    // #########################################################################
}
)();
// #############################################################################

