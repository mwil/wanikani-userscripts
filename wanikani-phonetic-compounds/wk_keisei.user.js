// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     0.9.6
// @author      acm
// @description Adds information to Wanikani about kanji that use Phonetic-Semantic Composition.
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   WK_Keisei
//
// @include     http://www.wanikani.com/radicals/*
// @include     https://www.wanikani.com/radicals/*
// @include     http://www.wanikani.com/kanji/*
// @include     https://www.wanikani.com/kanji/*
// @include     http://www.wanikani.com/review/session*
// @include     https://www.wanikani.com/review/session*
// @include     http://www.wanikani.com/lesson/session*
// @include     https://www.wanikani.com/lesson/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
//
// @resource    kanji        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/kanji.json
// @resource    phonetic     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/phonetic.json
// @resource    wk_kanji     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/wk_kanji.json
//
// @resource    style        https://raw.githubusercontent.com/mwil/wanikani-userscripts/6571fb3a50e41b6c91196e00fa4126f4e11df317/wanikani-phonetic-compounds/css/keisei.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dfd7e8c304824fa44593addbb4f5d3713495a11a/wanikani-phonetic-compounds/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/2666f50a9be669454ef8af26b2578be3fa7ca498/wanikani-phonetic-compounds/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/ea922c774c72c5d308be0a71a5100b9f9988f082/wanikani-phonetic-compounds/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dfd7e8c304824fa44593addbb4f5d3713495a11a/wanikani-phonetic-compounds/wk_keisei.strings.en.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dfd7e8c304824fa44593addbb4f5d3713495a11a/wanikani-phonetic-compounds/wk_keisei.settings.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dfd7e8c304824fa44593addbb4f5d3713495a11a/wanikani-phonetic-compounds/phonetic_db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dfd7e8c304824fa44593addbb4f5d3713495a11a/wanikani-phonetic-compounds/wk_kanji_db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dfd7e8c304824fa44593addbb4f5d3713495a11a/utility/wk_interaction.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_notification
//
// @run-at      document-end
// ==/UserScript==

/* jshint esversion: 6 */
/* jshint scripturl:true */

// TODO: ideas
//       - menu to get info
//       -- stats (#kanji, radicals, phonetics, ...)
//       -- dates of db updates
//       - notify db updates (store old version as value)

function WK_Keisei()
{
    this.wki = null;
    this.kdb = null;
    this.wkdb = null;

    this.settings = {"debug": false, "minify": false};
}

(function()
{
    "use strict";
    // Character item to be included in a character grid
    //
    // TODO: better name for this thing ...
    // #########################################################################
    WK_Keisei.prototype.li_phon_char = ({kanji, readings, meaning, badge, href, kanji_id}) =>
       `<li id="${kanji_id}" class="character-item">
            <span lang="ja" class="${badge}"></span>
            <a class="keisei-kanji-link" href="${href}">
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

(function()
{
    "use strict";

    // Callback for the WKInteraction, this is called directly at the beginning
    // when the required WK content is available.
    //
    // Note: on the reviews and lessons page we inject some styles lifted from
    // WK to include the nice 'character grids', this might cause some ugly
    // interactions with these pages (seems fine though)!
    //
    // TODO: also react to radicals in reviews and lessons!
    // #########################################################################
    WK_Keisei.prototype.injectKeiseiSection = function()
    {
        var subject = this.wki.getSubject();

        this.log(`Injecting phonetic section (callback works).`);

        if (!this.wki.checkSubject(subject))
            return;

        if (subject.rad)
            subject.phon = this.kdb.mapWKRadicalToPhon(subject.rad);
        else
            subject.phon = this.kdb.getKPhonetic(subject.kan) || subject.kan;

        this.log(`Working with the following input: ${subject}.`);


        switch(this.wki.curPage)
        {
            case this.wki.PageEnum.radicals:
                $(`section#note-meaning`).before(this.createKeiseiSection());
                break;
            case this.wki.PageEnum.kanji:
                $(`section#note-reading`).before(this.createKeiseiSection());
                break;
            case this.wki.PageEnum.reviews:
                if ($(`section#item-info-reading-mnemonic`).length)
                {
                    $(`section#item-info-reading-mnemonic`).after(this.createKeiseiSection());

                    if ($(`section#item-info-reading-mnemonic`).is(`:hidden`))
                        $(`#keisei-section`).hide();
                }
                else
                    $(`section#note-meaning`).before(this.createKeiseiSection());

                break;
            case this.wki.PageEnum.lessons:
                $(`#keisei-section`).remove();

                if ($(`div#main-info`).hasClass(`radical`))
                    $(`div#supplement-rad-name-mne`).after(this.createKeiseiSection(`margin-top: 12px;`));
                else
                    $(`div#supplement-kan-reading div:contains("Reading Mnemonic") blockquote:last`)
                    .after(this.createKeiseiSection(`margin-top: 12px;`));

                break;
            default:
                GM_log(`Unknown page type ${this.wki.curPage}, cannot inject info!`);
                return;
        }

        this.populateKeiseiSection(subject);

        if (this.wki.curPage === this.wki.PageEnum.reviews ||
            this.wki.curPage === this.wki.PageEnum.lessons)
            $(`.keisei-kanji-link`).attr(`target`, `_blank`);

        $(`#keisei-head-visibility`).on(`click`, this.toggleMainFold);

        if (this.settings.minify)
        {
            $(`#keisei-main-fold`).hide();
            $(`#keisei-head-visibility i`).attr(`class`, `icon-eye-close`);
        }
    };

    // #########################################################################
    // Insert stubs for all information fields to be filled later by
    // populateKeiseiSection().
    //
    // Some section may stay empty, for example when a kanji is not related to
    // phonetic compounds.
    // #########################################################################
    WK_Keisei.prototype.createKeiseiSection = function(style)
    {
        var $section = $(`<section></section>`)
                       .attr(`id`, `keisei-section`)
                       .addClass(`col1`);

        var $mini_fold = $(`<div></div>`)
                         .attr(`id`, `keisei-main-fold`);

        var $grid = $(`<ul></ul>`)
                    .attr(`id`, `keisei-phonetic-grid`)
                    .addClass(`single-character-grid`);

        var $head_btn = $(`<div class="btn-group pull-right"></div>`)
                        .append(`<a class="btn" id="keisei-head-visibility">
                                    <i class="icon-eye-open"></i>
                                 </a>`)
                        .append(`<a class="btn" id="keisei-head-settings" data-toggle="modal" data-target="#keisei-modal-settings">
                                    <i class="icon-gear"></i>
                                 </a>`)
                        .append(`<a class="btn" id="keisei-head-info" data-toggle="modal" data-target="#keisei-modal-info">
                                    <i class="icon-question"></i>
                                 </a>`);

        var $head = $(`<h2>Phonetic-Semantic Composition</h2>`)
                    .attr(`style`, style)
                    .append($head_btn);

        $section.append($head);
        $section.append($(`<span></span>`).attr(`id`, `keisei-explanation`));
        $section.append($mini_fold);

        $mini_fold.append($grid);

        this.log(`Created the Keisei section, append!`);

        if (!$(`#keisei-modal-settings`).length)
            this.injectModals();

        return $section;
    };
    // #########################################################################

    // Fill the various field in the section, depending on the information in
    // the kanji and phonetic databases.
    // #########################################################################
    WK_Keisei.prototype.populateKeiseiSection = function(subject)
    {
        if (subject.rad)
        {
            if (subject.phon)
            {
                $(`#keisei-explanation`).append(this.explanation_radical(subject, this.kdb.getPReadings(subject.phon)));
                this.populateCharGrid(`#keisei-phonetic-grid`, subject);
            }
            else
            {
                $(`#keisei-explanation`).append(this.explanation_non_radical(subject));
                return;
            }
        }
        else
        {
            if ((!this.wki.checkSubject(subject)) || (subject.kan && !this.kdb.checkKanji(subject.kan)))
            {
                $(`#keisei-explanation`).append(this.explanation_missing(subject));
                return;
            }
            else if (!subject.phon && !this.kdb.checkKanji(subject.kan))
            {
                $(`#keisei-explanation`).append(
                    this.error_msg(subject,
                        `The requested information is not in the Keisei database!`));
                return;
            }

            // The kanji could be a phonetic element itself, show full info ...
            else if (this.kdb.checkPhonetic(subject.kan))
            {
                $(`#keisei-explanation`).append(this.explanation_pmark(subject, this.kdb.getPReadings(subject.phon)));
                this.populateCharGrid(`#keisei-phonetic-grid`, subject);
            }
            else
            {
                switch (this.kdb.getKType(subject.kan))
                {
                    case this.kdb.KTypeEnum.unprocessed:
                        $(`#keisei-explanation`).append(this.explanation_unprocessed(subject));
                        return;
                    case this.kdb.KTypeEnum.unknown:
                        $(`#keisei-explanation`).append(this.explanation_unknown(subject));
                        break;
                    case this.kdb.KTypeEnum.hieroglyph:
                    case this.kdb.KTypeEnum.indicative:
                    case this.kdb.KTypeEnum.comp_indicative:
                    case this.kdb.KTypeEnum.derivative:
                    case this.kdb.KTypeEnum.rebus:
                    case this.kdb.KTypeEnum.kokuji:
                        $(`#keisei-explanation`).append(this.explanation_other(subject));
                        break;
                    case this.kdb.KTypeEnum.comp_phonetic:
                        if (!subject.phon)
                        {
                            $(`#keisei-explanation`).append(
                                this.error_msg(subject,
                                    `The phonetic element of this kanji was not in the database (or even no db)!`));
                            return;
                        }

                        $(`#keisei-explanation`).append(
                            this.explanation_phonetic(
                                subject,
                                this.kdb.getPReadings(subject.phon)));

                        this.populateCharGrid(`#keisei-phonetic-grid`, subject);

                        break;
                    default:
                        $(`#keisei-explanation`).append(
                            this.error_msg(subject, `The requested kanji is not in the database!`));
                }
            }
        }

        // Maybe we have additional information to display, add an additional fold
        if (this.kdb.getPXRefs(subject.phon).length ||
            this.kdb.getPNonCompounds(subject.phon).length)
        {
            $(`#keisei-main-fold`).append(this.createMoreInfoFold());
            this.populateMoreInfoFold(subject);
        }
    };
    // #########################################################################

    // Find common items in two arrays.
    //
    // From https://stackoverflow.com/a/16227294/2699475
    // #########################################################################
    WK_Keisei.prototype.intersect = function(a, b)
    {
        return a.filter(function (e) {
            return b.indexOf(e) > -1;
        });
    };
    // #########################################################################

    // Create character items for all compounds, sort them, and add them all.
    // #########################################################################
    WK_Keisei.prototype.populateCharGrid = function(selector, subject)
    {
        var char_list = [];
        var char_list_lo = [];
        var char_list_hi = [];

        if (!this.kdb.checkPhonetic(subject.phon))
        {
            GM_log(`The following phonetic was not found in the database`, subject.phon);
            return;
        }

        for (var i = 0; i < this.kdb.getPCompounds(subject.phon).length; i++)
        {
            var kanji = this.kdb.getPCompounds(subject.phon)[i];
            var badge = [`item-badge`, `recently-unlocked-badge`];

            if (!kanji)
                continue;

            var common_readings = this.intersect(
                                    this.kdb.getKReadings(kanji),
                                    this.kdb.getPReadings(subject.phon));

            var li_template = {
                "kanji": kanji,
                "readings": this.kdb.getKReadings(kanji),
                "badge": ``,
                "meaning": this.wkdb.getKMeaning(kanji)[0],
                "href": `/kanji/${kanji}`,
                "kanji_id": `kanji-${i}`
            };

            if (this.kdb.getKReadings(kanji).length === common_readings.length)
            {
                badge.push(`badge-perfect`);
                char_list_hi.unshift(li_template);

                if (kanji === subject.kan)
                    $(`#keisei-explanation-quality`).html(this.pmark_perfect(subject));
            }
            else if (!common_readings.length)
            {
                badge.push(`badge-low`);
                char_list_lo.push(li_template);

                if (kanji === subject.kan)
                    $(`#keisei-explanation-quality`).html(this.pmark_low(subject));
            }
            else
            {
                if (this.kdb.getPReadings(subject.phon).indexOf(this.kdb.getKReadings(kanji)[0]) !== -1)
                {
                    badge.push(`badge-high`);
                    char_list_hi.push(li_template);

                    if (kanji === subject.kan)
                        $(`#keisei-explanation-quality`).html(this.pmark_high(subject));
                }
                else
                {
                    badge.push(`badge-middle`);
                    char_list_lo.unshift(li_template);

                    if (kanji === subject.kan)
                        $(`#keisei-explanation-quality`).html(this.pmark_middle(subject));
                }
            }

            li_template.badge = badge.join(` `);
        }

        char_list.push({
            "kanji": subject.phon,
            "readings": this.kdb.getKReadings(subject.phon),
            "badge": ``,
            "meaning": `Phonetic`,
            "href":`javascript:;`,
            "kanji_id": `phonetic-1`
        });

        if (this.kdb.checkRadical(subject.phon))
            char_list.push({
                "kanji": subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "badge": ``,
                "meaning": this.kdb.getWKRadicalPP(subject.phon),
                "href":`/radicals/${this.kdb.getWKRadical(subject.phon)}`,
                "kanji_id": `radical-1`
            });

        if (this.kdb.checkKanji(subject.phon))
            char_list.push({
                "kanji": subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "badge": ``,
                "meaning": this.wkdb.getKMeaning(subject.phon)[0],
                "href": `/kanji/${subject.phon}`,
                "kanji_id": `kanji-1`
            });

        char_list = char_list.concat(char_list_hi);
        char_list = char_list.concat(char_list_lo);

        $(selector).html(char_list.map(this.li_phon_char).join(``));
    };
    // #########################################################################

    // Sometimes we want to include even more chargrids with related tone marks
    // or kanji that are not considered a result of phonetic composition.
    // #########################################################################
    WK_Keisei.prototype.createMoreInfoFold = function()
    {
        var $infofold = $(`<div></div>`)
                        .attr(`id`, `keisei-more-fold`);

        var $button = $(`<div id="keisei-more-button">
                            <i class="icon-chevron-down"></i>
                            Show More Information
                         </div>`);

        var $info = $(`<div></div>`)
                    .attr(`id`, `keisei-more-info`);

        $infofold.append($button);
        $infofold.append($info);

        $button.on(`click`, this.toggleMoreInfoFold);

        return $infofold;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.populateMoreInfoFold = function(subject)
    {
        var i;

        for (i = 0; i < this.kdb.getPXRefs(subject.phon).length; i++)
        {
            var curPhon = this.kdb.getPXRefs(subject.phon)[i];

            $(`#keisei-more-info`).append($(`<span></span>`)
                                  .attr(`id`, `keisei-more-expl-${i}`));

            $(`#keisei-more-expl-${i}`).append(this.explanation_xref(curPhon, this.kdb.getPReadings(curPhon)));

            var $gridx = $(`<ul></ul>`)
                        .attr(`id`, `keisei-xref-grid-${i}`)
                        .addClass(`single-character-grid`);

            $(`#keisei-more-info`).append($gridx);
            this.populateCharGrid(`#keisei-xref-grid-${i}`, {"kan": subject.kan, "phon": curPhon});
        }

        if (this.kdb.getPNonCompounds(subject.phon).length)
        {
            $(`#keisei-more-info`).append($(`<span></span>`)
                                  .attr(`id`, `keisei-more-non-comp`));

            $(`#keisei-more-non-comp`).append(this.explanation_non_compound(subject));

            var $gridn = $(`<ul></ul>`)
                        .attr(`id`, `keisei-non-comp-grid`)
                        .addClass(`single-character-grid`);

            $(`#keisei-more-info`).append($gridn);

            var char_list = [];
            char_list.push({
                "kanji": subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meaning": `Non-Phonetic`,
                "badge": ``,
                "href": `javascript:void(0);`,
                "kanji_id": `nonphonetic-1`
            });

            for (i = 0; i < this.kdb.getPNonCompounds(subject.phon).length; i++)
            {
                var curKanji = this.kdb.getPNonCompounds(subject.phon)[i];
                char_list.push({
                    "kanji": curKanji,
                    "readings": this.kdb.getKReadings(curKanji),
                    "meaning": this.wkdb.getKMeaning(curKanji)[0],
                    "badge": ``,
                    "href": `/kanji/${curKanji}`,
                    "kanji_id": `kanji-${i}`
                });
            }

            $(`#keisei-non-comp-grid`).html(char_list.map(this.li_phon_char).join(``));
        }
    };
    // #########################################################################

    WK_Keisei.prototype.toggleMainFold = function()
    {
        $(`#keisei-main-fold`).toggle();

        $(`#keisei-head-visibility i`).toggleClass(`icon-eye-open`);
        $(`#keisei-head-visibility i`).toggleClass(`icon-eye-close`);
    };

    // Callback function for click events on more info button.
    // #########################################################################
    WK_Keisei.prototype.toggleMoreInfoFold = function()
    {
        var $button = $(`#keisei-more-button`);
        var $fold = $(`#keisei-more-info`);

        if ($fold.is(`:visible`))
            $button.html(`<i class="icon-chevron-down"></i>Show More Information`);
        else
            $button.html(`<i class="icon-chevron-up"></i>Show Less Information`);

        $(`#keisei-more-info`).toggle();
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`style`));

        this.settings.debug = GM_getValue(`debug`) || false;

        this.log = this.settings.debug ?
            function(msg) {GM_log(`WK_Keisei: ${msg}`);} :
            function() {};

        this.settings.minify = GM_getValue(`minify`) || false;

        // GM_notification({title:"WK Keisei", text:"There is even some text included ..."});

        this.kdb = new KeiseiDB();
        this.kdb.init();

        this.wkdb = new WKKanjiDB();
        this.wkdb.init();

        this.wki = new WKInteraction();
        this.wki.init(this.injectKeiseiSection.bind(this));

    };
    // #########################################################################

    // Just do it!
    // #########################################################################
    WK_Keisei.prototype.run = function()
    {
        this.wki.detectCurPage.bind(this.wki)();


        // add the fake chargrid styles to pages that normally don't have them
        if (this.wki.curPage === this.wki.PageEnum.reviews ||
            this.wki.curPage === this.wki.PageEnum.lessons)
        {
            GM_addStyle(GM_getResourceText(`chargrid`));
            GM_addStyle(GM_getResourceText(`bootstrapcss`));

            $(`<script></script>`)
            .attr(`type`, `text/javascript`)
            .text(GM_getResourceText(`bootstrapjs`))
            .appendTo(`head`);
        }
    };
    // #########################################################################
}
)();

var WK_Keisei = new WK_Keisei();

WK_Keisei.init();
WK_Keisei.run();
