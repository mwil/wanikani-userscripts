/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Keisei.prototype.gen_item_chargrid = ({kanji, readings, meaning, notInWK=``, badge=``, href=`javascript:;`, kanji_id=``}) =>
       `<li id="${kanji_id}" class="${notInWK} character-item">
            <span lang="ja" class="${badge}" data-kanji="${kanji}"></span>
            <a class="keisei_kanji_link" href="${href}">
                <span class="character" lang="ja">${kanji}</span>
                <ul>
                    <li>${readings[0]}</li>
                    <li>${meaning}</li>
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
    // Insert stubs for all information fields to be filled later by
    // populateKeiseiSection().
    //
    // Some section may stay empty, for example when a kanji is not related to
    // phonetic compounds.
    // #########################################################################
    WK_Keisei.prototype.createKeiseiSection = function(style)
    {
        const $section = $(`<section></section>`)
                         .attr(`id`, `keisei_section`)
                         .attr(`style`, style)
                         .addClass(`${GM_info.script.namespace} col1`);

        const $main_fold = $(`<div></div>`)
                           .attr(`id`, `keisei_main_fold`);

        const $grid = $(`<ul></ul>`)
                      .attr(`id`, `keisei_phonetic_grid`)
                      .attr(`style`, `padding-bottom: 10px; margin-bottom:6px; border-bottom: 1px solid #d5d5d5;`)
                      .addClass(`single-character-grid`);

        const $view_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn disabled" id="keisei_head_moreinfo">
                                       <i class="icon-collapse-top"></i>
                                   </a>`)
                          .append(`<a class="btn" id="keisei_head_visibility">
                                      <i class="icon-eye-open"></i>
                                   </a>`);

        const $main_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="keisei_head_settings" data-toggle="modal" data-target="#keisei_modal_settings">
                                        <i class="icon-gear"></i>
                                   </a>`)
                          .append(`<a class="btn" id="keisei_head_info" data-toggle="modal" data-target="#keisei_modal_info">
                                        <i class="icon-question"></i>
                                   </a>`);

        const $head_grp = $(`<span></span>`)
                          .attr(`id`, `keisei_head_btn_group`)
                          .addClass(`btn-group pull-right`)
                          .append($view_btn)
                          .append($main_btn);

        const $head = $(`<h2>Phonetic-Semantic Composition</h2>`)
                      .append($head_grp);

        $section.append($head);
        $section.append($(`<div></div>`).attr(`id`, `keisei_explanation`));
        $section.append($main_fold);

        $main_fold.append($grid);

        this.log(`Created the Keisei section, appending to the page!`);

        if (!$(`#keisei_modal_settings`).length)
            this.injectModals();

        return $section;
    };
    // #########################################################################

    // Sometimes we want to include even more chargrids with related tone marks
    // or kanji that are not considered a result of phonetic composition.
    // #########################################################################
    WK_Keisei.prototype.createMoreInfoFold = function()
    {
        const $infofold = $(`<span></span>`)
                          .attr(`id`, `keisei_more_fold`);

        $(`#keisei_head_moreinfo`).removeClass(`disabled`);

        // #####################################################################
        $(`#keisei_head_moreinfo`).on(`click`, this.toggleMoreInfoFold.bind(this));
        // #####################################################################

        return $infofold;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleMainFold = function(event)
    {
        $(`#keisei_main_fold`).toggle();

        $(`#keisei_head_visibility i`).toggleClass(`icon-eye-open`);
        $(`#keisei_head_visibility i`).toggleClass(`icon-eye-close`);

        // if (!$(`#keisei_main_fold`).is(`:visible`) &&
            // !$(`#keisei_head_moreinfo i`).hasClass(`icon-collapse`))
            // this.toggleMoreInfoFold();

        return false;
    };
    // #########################################################################

    // Callback function for click events on more info button.
    // #########################################################################
    WK_Keisei.prototype.toggleMoreInfoFold = function(event)
    {
        $(`#keisei_more_fold`).toggle();

        $(`#keisei_head_moreinfo i`).toggleClass(`icon-collapse`);
        $(`#keisei_head_moreinfo i`).toggleClass(`icon-collapse-top`);

        // if ((!$(`#keisei_main_fold`).is(`:visible`) &&
            // !$(`#keisei_head_moreinfo i`).hasClass(`icon-collapse`)))
            // this.toggleMainFold();
        //
        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleBadgeMarker = function(event)
    {
        const kanji = event.currentTarget.dataset.kanji;

        if (!kanji)
            return false;

        if (kanji in this.override_db)
            this.override_db[kanji].marked = !this.override_db[kanji].marked;
        else
            this.override_db[kanji] = {"marked": true};

        $(event.currentTarget).toggleClass(`badge-marked`);
        GM_setValue(`override_db`, JSON.stringify(this.override_db));

        return false;
    };
    // #########################################################################
}
)();
// #############################################################################
