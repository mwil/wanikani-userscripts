/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Niai.prototype.gen_item_chargrid = ({kanji, readings, meanings, is_locked=``, badge=`item-badge`, href=`javascript:;`, kanji_id=``}) =>
       `<li id="${kanji_id}" class="${is_locked} character-item">
            <span lang="ja" class="${badge}" data-kanji="${kanji}"></span>
            <a class="niai_similar_link" href="${href}">
                <span class="character" lang="ja">${kanji}</span>
                <ul>
                    <li>${readings[0]}</li>
                    <li>${meanings[0]}</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Niai.prototype.createNiaiSection = function(style)
    {
        const $section = $(`<section></section>`)
                         .attr(`id`, `niai_section`)
                         .attr(`style`, style)
                         .addClass(`${GM_info.script.namespace} col1`);

        const $main_fold = $(`<div></div>`)
                           .attr(`id`, `niai_main_fold`);

        const $grid = $(`<ul></ul>`)
                      .attr(`id`, `niai_similar_grid`)
                      .addClass(`single-character-grid`);

        const $head_btn = $(`<div class="btn-group pull-right"></div>`)
                          .append(`<a class="btn" id="niai_head_settings" data-toggle="modal" data-target="#niai_modal_settings">
                                        <i class="icon-gear"></i>
                                   </a>`)
                          .append(`<a class="btn" id="niai_head_info" data-toggle="modal" data-target="#niai_modal_info">
                                        <i class="icon-question"></i>
                                   </a>`);

        const $head = $(`<h2>Visually Similar Kanji</h2>`)
                      .append($head_btn);

        $section.append($head);
        // Fixed empty slot on first row in grid, no idea why required ...
        $section.append(`<div></div>`);
        $section.append($main_fold);

        $main_fold.append($grid);

        this.log(`Created the Niai section, appending to the page!`);

        if (!$(`#niai_modal_settings`).length)
            this.injectModals();

        return $section;
    };
    // #########################################################################
}
)();
// #############################################################################
