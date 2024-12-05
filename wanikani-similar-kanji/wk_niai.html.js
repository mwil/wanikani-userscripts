/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Niai.prototype.gen_item_chargrid =
        ({kanji, readings, meanings, wk_level, is_locked=``, notInWK=``, badge=`item-badge`, href=`javascript:;`, kanji_id=``}) =>
       `<li id="${kanji_id}" class="${is_locked} ${notInWK} character-item" data-kanji="${kanji}">
            <span lang="ja" class="${badge}" data-kanji="${kanji}"></span>
            <a class="niai_similar_link" href="${href}">
                <span class="character" lang="ja" title="WK Level: ${wk_level}">${kanji}</span>
                <ul>
                    <li class="niai_reading">${readings[0]}</li>
                    <li class="niai_meaning">${meanings[0]}</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################

    // Function to swap a custom icon with another icon
    // #########################################################################
    WK_Niai.prototype.toggleIcon = function(containerEl, iconPair) {
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
    WK_Niai.prototype.createNiaiSection = function(style)
    {
        // Get the current version of the Custom Icons library that is assigned to the window
        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

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
                                      ${Icons.customIconTxt("eye")}
                                  </a>`);
        // The note-niai part (at front!!) is crucial to stop enter keypresses
        // to go to the next page during reviews and lessons
        const $db_btn = $(`<span class="btn-group"></span>`)
                        .append(`<a class="btn" id="niai_badges_btn">
                                    ${Icons.customIconTxt("circle-xmark")}
                                </a>`)
                        .append(`<span id="add_kanji_dropdown">
                                     <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                                         ${Icons.customIconTxt("plus")}
                                     </a>
                                     <ul class="note-niai dropdown-menu text-center">
                                        <li>
                                            <ul class="single-character-grid">
                                                ${this.gen_item_chargrid({
                                                    "kanji": "？",
                                                    "readings": ["&nbsp;"],
                                                    "meanings": ["Enter Kanji"],
                                                    "kanji_id": "kanji-dropdown"
                                                })}
                                            </ul>
                                        </li>
                                        <li class="divider"></li>
                                        <li><span class="input-prepend" style="margin-bottom: 0;">
                                                <textarea id="niai_add_similar_input" maxlength="1" rows="1" class="span2" type="text" placeholder="Enter Kanji Here"></textarea>
                                            </span>
                                        </li>
                                        <li><a id="add_kanji_btn">${Icons.customIconTxt("plus")} Add To Similar Kanji</a></li>
                                     </ul>
                                 </span>`)
                        .append(`<a class="btn disabled" id="niai_reset_similar_btn">
                                    ${Icons.customIconTxt("undo")}
                                </a>`);

        const $head_btn = $(`<span class="btn-group"></span>`)
                          .append(`<a class="btn" id="niai_head_settings_btn" data-toggle="modal" data-target="#niai_modal_settings">
                                        ${Icons.customIconTxt("settings")}
                                   </a>`)
                          .append(`<a class="btn" id="niai_head_info_btn" data-toggle="modal" data-target="#niai_modal_info">
                                        ${Icons.customIconTxt("question")}
                                   </a>`);

        const $head_grp = $(`<span></span>`)
                          .attr(`id`, `niai_head_btn_group`)
                          .addClass(`btn-group pull-right`);
        $head_grp
            .append($db_btn)
            .append($view_btn)
            .append($head_btn);

        const $head = $(`<h2>Niai Visually Similar Kanji</h2>`)
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

        this.toggleIcon($("#niai_grid_visibility"), ["eye", "eye-slash"]);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleBadges = function(event)
    {
        $(`.delete-badge`).toggle();

        this.toggleIcon($("#niai_badges_btn"), ["circle-o", "circle-xmark"]);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.resetSimilarKanji = function(event)
    {
        if ($(`#niai_reset_similar_btn`).hasClass(`disabled`))
            return false;

        const kanji = wkItemInfo.currentState.characters;

        $(`#niai_reset_similar_btn`).toggleClass(`active`);

        this.toggleIcon($("#niai_reset_similar_btn"), ["undo", "circle-exclamation"]);

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
    WK_Niai.prototype.addMappingToOverrideDB = function(kanji, sim_kanji)
    {
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
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.removeSimilarKanji = function(event)
    {
        const kanji = wkItemInfo.currentState.characters;
        const sim_kanji = event.currentTarget.dataset.kanji;

        if (!kanji || !sim_kanji)
            return false;

        // FIXED: also add the reverse mapping to DB
        this.addMappingToOverrideDB(kanji, sim_kanji);
        this.addMappingToOverrideDB(sim_kanji, kanji);

        GM_setValue(`override_db`, JSON.stringify(this.override_db));

        this.populateNiaiSection(kanji);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.onSimilarInput = function(event)
    {
        const new_kanji = $(`#niai_add_similar_input`).val().trim();

        if (!new_kanji || new_kanji.length > 1)
        {
            $(`#kanji-dropdown .character`).text(`？`);
            $(`#kanji-dropdown .niai_reading`).html(`&nbsp;`);
            $(`#kanji-dropdown .niai_meaning`).text(`Enter Kanji`);
            $(`#kanji-dropdown`)[0].dataset.kanji = ``;
        }
        else if (!this.ndb.isKanjiInDB(new_kanji))
        {
            $(`#kanji-dropdown .character`).text(new_kanji);
            $(`#kanji-dropdown .niai_reading`).html(`&nbsp;`);
            $(`#kanji-dropdown .niai_meaning`).text(`Not In WK!`);
            $(`#kanji-dropdown`)[0].dataset.kanji = ``;
        }
        else
        {
            const kanji_item = this.ndb.getInfo(new_kanji);

            $(`#kanji-dropdown .character`).text(new_kanji);
            $(`#kanji-dropdown .niai_reading`).text(kanji_item.readings[0]);
            $(`#kanji-dropdown .niai_meaning`).text(kanji_item.meanings[0]);
            $(`#kanji-dropdown`)[0].dataset.kanji = new_kanji;
        }

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.addSimilarKanji = function(event)
    {
        const kanji = wkItemInfo.currentState.characters;
        const new_kanji = $(`#kanji-dropdown`)[0].dataset.kanji;

        if (!kanji || !new_kanji || kanji === new_kanji)
            return false;

        if (!(kanji in this.override_db))
            this.override_db[kanji] = [];

        let found = this.override_db[kanji].some(
            function(item)
            {
                if (new_kanji === item.kan)
                    item.score = 1.0;

                return (new_kanji === item.kan);
            }
        );

        if (!found && (this.ndb.isKanjiInWK(new_kanji) || this.ndb.isKanjiInDB(new_kanji)))
            this.override_db[kanji].push({"kan": new_kanji, "score": 1.0});

        GM_setValue(`override_db`, JSON.stringify(this.override_db));
        this.populateNiaiSection(kanji);

        $(`#niai_add_similar_input`).val(``).focus();
        $(`#kanji-dropdown .character`).text(`？`);
        $(`#kanji-dropdown .niai_reading`).html(`&nbsp;`);
        $(`#kanji-dropdown .niai_meaning`).text(`Enter Kanji`);

        // $(`[data-toggle="dropdown"]`).parent().removeClass(`open`);

        return false;
    };
    // #########################################################################
}
)();
// #############################################################################
