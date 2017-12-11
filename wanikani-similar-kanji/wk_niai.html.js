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

        const $view_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="niai_grid_visibility">
                                      <i class="icon-eye-open"></i>
                                  </a>`);

        const $db_btn = $(`<span class="btn-group"></span>`)
                        .append(`<a class="btn" id="niai_badges_btn">
                                    <i class="icon-remove-circle"></i>
                                </a>`)
                        .append(`<a class="btn disabled" id="niai_reset_similar_btn">
                                    <i class="icon-undo"></i>
                                </a>`);

        const $head_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="niai_head_settings_btn" data-toggle="modal" data-target="#niai_modal_settings">
                                        <i class="icon-gear"></i>
                                   </a>`)
                          .append(`<a class="btn" id="niai_head_info_btn" data-toggle="modal" data-target="#niai_modal_info">
                                        <i class="icon-question"></i>
                                   </a>`);

        const $head_grp = $(`<span></span>`)
                          .attr(`id`, `niai_head_btn_group`)
                          .addClass(`btn-group pull-right`);
        $head_grp
            .append($db_btn)
            .append($view_btn)
            .append($head_btn);

        const $head = $(`<h2>Visually Similar Kanji</h2>`)
                      .append($head_grp);

        $section.append($head);
        $main_fold.append($grid);
        $section.append($main_fold);

        this.log(`Created the Niai section, appending to the page!`);

        if (!$(`#niai_modal_settings`).length)
            this.injectModals();

        return $section;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleMainFold = function(event)
    {
        $(`#niai_main_fold`).toggle();

        $(`#niai_grid_visibility i`).toggleClass(`icon-eye-open`);
        $(`#niai_grid_visibility i`).toggleClass(`icon-eye-close`);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleBadges = function(event)
    {
        $(`.delete-badge`).toggle();

        $(`#niai_badges_btn i`).toggleClass(`icon-circle-blank`);
        $(`#niai_badges_btn i`).toggleClass(`icon-remove-circle`);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.resetSimilarKanji = function(event)
    {
        if ($(`#niai_reset_similar_btn`).hasClass(`disabled`))
            return false;

        const kanji = this.wki.getSubject().kan;

        $(`#niai_reset_similar_btn`).toggleClass(`active`);
        $(`#niai_reset_similar_btn i`).toggleClass(`icon-undo`);
        $(`#niai_reset_similar_btn i`).toggleClass(`icon-exclamation-sign`);

        if (!$(`#niai_reset_similar_btn`).hasClass(`active`))
        {
            delete this.override_db[kanji];
            GM_setValue(`override_db`, JSON.stringify(this.override_db));

            this.populateNiaiSection(kanji);
        }

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.removeSimilarKanji = function(event)
    {
        const kanji = this.wki.getSubject().kan;
        const sim_kanji = event.currentTarget.dataset.kanji;

        if (!kanji || !sim_kanji)
            return false;

        if (kanji in this.override_db)
        {
            let found = this.override_db[kanji].some(
                function(item)
                {
                    if (item.kan === sim_kanji)
                        item.score = -1.0;

                    return (item.kan === sim_kanji);
                }
            );

            if (!found)
                this.override_db[kanji].push({"kan": sim_kanji, "score": -1.0});
        }
        else
            this.override_db[kanji] = [{"kan": sim_kanji, "score": -1.0}];

        GM_setValue(`override_db`, JSON.stringify(this.override_db));

        this.populateNiaiSection(kanji);

        return false;
    };
    // #########################################################################
}
)();
// #############################################################################
