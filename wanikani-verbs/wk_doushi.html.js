/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Doushi.prototype.gen_item_chargrid = ({character, kana, meaning, badge=``, vtype=``, href=`javascript:;`, voc_id=`vocabulary-0`}) =>
       `<li id="${voc_id}" class="character-item">
            <span lang="ja" class="${badge}" data-kanji="${character}"></span>
            <span class="badge-vtype ${vtype}"></span>
            <a class="doushi_link" href="${href}">
                <span class="character" lang="ja">${character}</span>
                <ul>
                    <li>${kana}</li>
                    <li>${meaning}</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################


    // #########################################################################
    WK_Doushi.prototype.createDoushiSection = function(style)
    {
        const $section = $(`<section></section>`)
                         .attr(`id`, `doushi_section`)
                         .attr(`style`, style)
                         .addClass(`${GM_info.script.namespace} col1`);

        const $view_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="doushi_head_visibility">
                                      <i class="icon-eye-open"></i>
                                   </a>`);

        const $main_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="doushi_head_settings" data-toggle="modal" data-target="#doushi_modal_settings">
                                      <i class="icon-gear"></i>
                                   </a>`)
                          .append(`<a class="btn" id="doushi_head_info" data-toggle="modal" data-target="#doushi_modal_info">
                                      <i class="icon-question"></i>
                                   </a>`);

        const $head_grp = $(`<span></span>`)
                          .attr(`id`, `doushi_head_btn_group`)
                          .addClass(`btn-group pull-right`)
                          .append($view_btn)
                          .append($main_btn);

        const $head = $(`<h2>Related Verbs</h2>`)
                      .append($head_grp)
                      .appendTo($section);

        const $main_fold = $(`<div></div>`)
                           .attr(`id`, `doushi_main_fold`)
                           .appendTo($section);

        const $grid = $(`<ul></ul>`)
                      .attr(`id`, `doushi_grid`)
                      .addClass(`multi-character-grid`)
                      .appendTo($main_fold);

        if (!$(`#doushi_modal_settings`).length)
            this.injectModals();

        return $section;
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.toggleMainFold = function(event)
    {
        $(`#doushi_main_fold`).toggle();

        $(`#doushi_head_visibility i`).toggleClass(`icon-eye-open`);
        $(`#doushi_head_visibility i`).toggleClass(`icon-eye-close`);

        return false;
    };
    // #########################################################################

}
)();
// #############################################################################
