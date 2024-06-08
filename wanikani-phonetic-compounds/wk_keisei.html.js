/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Keisei.prototype.gen_item_chargrid = ({kanji, readings, meanings, wk_level, notInWK=``, badge=``, href=`javascript:;`, kanji_id=`kanji-0`, rnd_style=``}) =>
       `<li id="${kanji_id}" class="${notInWK} character-item">
            <span lang="ja" class="${badge}" data-kanji="${kanji}"></span>
            <a class="keisei_kanji_link" href="${href}">
                <span class="character" lang="ja" title="WK Level: ${wk_level}">${kanji}</span>
                <ul>
                    <li title="${readings.join("・")}" class="${rnd_style}">${readings[0]}</li>
                    <li title="${meanings.join(", ")}" class="ellipsis">${meanings[0]}</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################

    // Function to swap a custom icon with another icon
    // #########################################################################
    WK_Keisei.prototype.toggleIcon = function(containerEl, iconPair) {
        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

        let idBase = "custom-icon-v" + Icons.VERSION_NUM + "__";
        let [firstIcon, secondIcon] = iconPair;
        let currentIconName = $(containerEl).find(`use`)?.attr("href").replace('#'+idBase,'');

        if (!currentIconName) {
            console.error(`Could not retrieve the SVG element that is meant to be a child of the following element:\n${$(containerEl).get()[0]}`);
            return;
        }

        if (currentIconName === firstIcon) {
            $(containerEl).find(`svg`).replaceWith(Icons.customIconTxt(secondIcon));
        }
        else if (currentIconName === secondIcon) {
            $(containerEl).find(`svg`).replaceWith(Icons.customIconTxt(firstIcon));
        }
        else {
            console.error(`Name mismatch. Could not find icon with name ${firstIcon} or ${secondIcon} on element with id "${currentIconName}".`);
            return;
        }
    };
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
        const Icons = window.unsafeWindow?.Icons ?? window.Icons;
        
        const $section = $(`<section></section>`)
                         .attr(`id`, `keisei_section`)
                         .attr(`style`, style)
                         .addClass(`${GM_info.script.namespace} col1`);

        // Control buttons on the right of the section header
        const $view_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn disabled" id="keisei_head_moreinfo">
                                      ${Icons.customIconTxt("square-caret-o-up")}
                                   </a>`)
                          .append(`<a class="btn" id="keisei_head_visibility">
                                      ${Icons.customIconTxt("eye")}
                                   </a>`);

        const $main_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="keisei_head_settings" data-toggle="modal" data-target="#keisei_modal_settings">
                                        ${Icons.customIconTxt("settings")}
                                   </a>`)
                          .append(`<a class="btn" id="keisei_head_info" data-toggle="modal" data-target="#keisei_modal_info">
                                        ${Icons.customIconTxt("question")}
                                   </a>`);

        const $head_grp = $(`<span></span>`)
                          .attr(`id`, `keisei_head_btn_group`)
                          .addClass(`btn-group pull-right`)
                          .append($view_btn)
                          .append($main_btn);

        const $head = $(`<h2>Phonetic-Semantic Composition</h2>`)
                      .append($head_grp)
                      .appendTo($section);

        // Text sections and folds
        $section.append($(`<div></div>`)
                        .attr(`id`, `keisei_explanation`));

        const $main_fold = $(`<div></div>`)
                           .attr(`id`, `keisei_main_fold`)
                           .appendTo($section);

        const $grid = $(`<div></div>`)
                      .attr(`id`, `keisei_main_phonetic_grid`)
                      .addClass(`keisei_phonetic_grid`)
                      .appendTo($main_fold);

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

        this.toggleIcon($(`#keisei_head_visibility`), ['eye', 'eye-slash']);

        // if (!$(`#keisei_main_fold`).is(`:visible`) &&
            // !$(`#keisei_head_moreinfo i`).hasClass(`fa-caret-square-o-down`))
            // this.toggleMoreInfoFold();

        return false;
    };
    // #########################################################################

    // Callback function for click events on more info button.
    // #########################################################################
    WK_Keisei.prototype.toggleMoreInfoFold = function(event)
    {
        $(`#keisei_more_fold`).toggle();

        this.toggleIcon($(`#keisei_head_moreinfo`), ['square-caret-o-up', 'square-caret-o-down']);

        // if ((!$(`#keisei_main_fold`).is(`:visible`) &&
            // !$(`#keisei_head_moreinfo i`).hasClass(`fa-caret-square-o-down`)))
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
