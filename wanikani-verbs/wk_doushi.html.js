/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Doushi.prototype.gen_item_chargrid = ({character, kana, meaning, badge=``, href=`javascript:;`, voc_id=`vocabulary-0`}) =>
       `<li id="${voc_id}" class="character-item">
            <span lang="ja" class="${badge}" data-kanji="${character}"></span>
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
        var $section = $(`<section></section>`)
                       .attr(`id`, `doushi_section`)
                       .attr(`style`, style)
                       .addClass(`${GM_info.script.namespace} col1`);

        var $head_btn = $(`<div class="btn-group pull-right"></div>`)
                        .append(`<a class="btn" id="doushi_head_settings" data-toggle="modal" data-target="#doushi_modal_settings">
                                    <i class="icon-gear"></i>
                                 </a>`)
                        .append(`<a class="btn" id="doushi_head_info" data-toggle="modal" data-target="#doushi_modal_info">
                                    <i class="icon-question"></i>
                                 </a>`);

        var $head = $(`<h2>Content Related to this Verb</h2>`)
                    .append($head_btn);

        var $grid = $(`<ul></ul>`)
                    .attr(`id`, `doushi_grid`)
                    .addClass(`multi-character-grid`);

        $section.append($head);
        $section.append($grid);

        if (!$(`#doushi_modal_settings`).length)
            this.injectModals();

        return $section;
    };
    // #########################################################################
}
)();
// #############################################################################
