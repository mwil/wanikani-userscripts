// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     1.0.3
// @author      acm
// @description Adds information to Wanikani about kanji that use Phonetic-Semantic Composition.
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_keisei
//
// @include     *://www.wanikani.com/radicals/*
// @include     *://www.wanikani.com/kanji/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
//
// @resource    kanji        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/kanji.json
// @resource    phonetic     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/phonetic.json
// @resource    wk_kanji     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/wk_kanji.json
//
// @resource    keisei_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/wanikani-phonetic-compounds/css/keisei.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/wanikani-phonetic-compounds/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/wanikani-phonetic-compounds/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/ea922c774c72c5d308be0a71a5100b9f9988f082/wanikani-phonetic-compounds/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/35225681eb32f798ff8c5c7a0a352e8f6480135c/wanikani-phonetic-compounds/phonetic_db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/35225681eb32f798ff8c5c7a0a352e8f6480135c/wanikani-phonetic-compounds/wk_kanji_db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/wanikani-phonetic-compounds/wk_keisei.strings.en.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/wanikani-phonetic-compounds/wk_keisei.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/wanikani-phonetic-compounds/wk_keisei.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bd703085246115abc88f9dade51748ec24cfc162/utility/wk_interaction.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==

/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_Keisei()
{
    this.kdb = new KeiseiDB();
    this.wkdb = new WKKanjiDB();
    this.wki = new WKInteraction(GM_info.script.namespace);

    this.settings = {"debug": false, "minify": false};
}
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    // Callback for the WKInteraction, this is called directly at the beginning
    // when the required WK content is available.
    //
    // Note: on the reviews and lessons page we inject some styles lifted from
    // WK to include the nice 'character grids', this might cause some ugly
    // interactions with these pages (seems fine though)!
    // #########################################################################
    WK_Keisei.prototype.injectKeiseiSection = function(event, curPage)
    {
        // #####################################################################
        $(`#keisei_section`).remove();

        var subject = this.wki.getSubject();

        this.log(`Injecting phonetic section (callback works).`);

        if (!this.wki.checkSubject(subject))
            return;

        if (subject.rad)
            subject.phon = this.kdb.mapWKRadicalToPhon(subject.rad);
        else
            subject.phon = this.kdb.getKPhonetic(subject.kan) || subject.kan;

        this.log(`Working with the following input:`, subject);
        // #####################################################################

        // #####################################################################
        switch(curPage)
        {
            case this.wki.PageEnum.radicals:
                $(`section#note-meaning`).before(this.createKeiseiSection());
                break;
            case this.wki.PageEnum.kanji:
                $(`section#note-reading`).before(this.createKeiseiSection());
                break;
            case this.wki.PageEnum.reviews:
            case this.wki.PageEnum.lessons_reviews:
                if ($(`section#item-info-reading-mnemonic`).length)
                {
                    $(`section#item-info-reading-mnemonic`).after(this.createKeiseiSection());

                    if ($(`section#item-info-reading-mnemonic`).is(`:hidden`))
                        $(`#keisei_section`).hide();
                }
                else
                    $(`section#note-meaning`).before(this.createKeiseiSection());

                break;
            case this.wki.PageEnum.lessons:
                if ($(`div#main-info`).hasClass(`radical`))
                    $(`div#supplement-rad-name-mne`).after(this.createKeiseiSection(`margin-top: 12px;`));
                else
                    $(`div#supplement-kan-reading div:contains("Reading Mnemonic") blockquote:last`)
                    .after(this.createKeiseiSection(`margin-top: 12px;`));

                break;
            default:
                GM_log(`Unknown page type ${curPage}, cannot inject info!`);
                return;
        }
        // #####################################################################

        this.populateKeiseiSection(subject);

        if (curPage === this.wki.PageEnum.reviews ||
            curPage === this.wki.PageEnum.lessons)
            $(`.keisei_kanji_link`).attr(`target`, `_blank`);

        // #####################################################################
        $(`#keisei_head_visibility`).on(`click`, this.toggleMainFold.bind(this));
        // #####################################################################

        if (this.settings.minify)
        {
            $(`#keisei_main_fold`).hide();
            $(`#keisei_head_visibility i`).attr(`class`, `icon-eye-close`);
        }
    };

    // Fill the various field in the section, depending on the information in
    // the kanji and phonetic databases.
    // #########################################################################
    WK_Keisei.prototype.populateKeiseiSection = function(subject)
    {
        // #####################################################################
        if (subject.rad)
            if (subject.phon)
            {
                $(`#keisei_explanation`).append(this.explanation_radical(subject, this.kdb.getPReadings(subject.phon)));
                this.populateCharGrid(`#keisei_phonetic_grid`, subject);
            }
            else
            {
                $(`#keisei_explanation`).append(this.explanation_non_radical(subject));
                return;
            }
        // #####################################################################
        else
        {
            if ((!this.wki.checkSubject(subject)) || (subject.kan && !this.kdb.checkKanji(subject.kan)))
            {
                $(`#keisei_explanation`).append(this.explanation_missing(subject));
                return;
            }
            else if (!subject.phon && !this.kdb.checkKanji(subject.kan))
            {
                $(`#keisei_explanation`).append(
                    this.error_msg(subject,
                        `The requested information is not in the Keisei database!`));
                return;
            }

            // The kanji could be a phonetic element itself, show full info ...
            else if (this.kdb.checkPhonetic(subject.kan))
            {
                $(`#keisei_explanation`).append(this.explanation_pmark(subject, this.kdb.getPReadings(subject.phon)));
                this.populateCharGrid(`#keisei_phonetic_grid`, subject);
            }
            else
            {
                switch (this.kdb.getKType(subject.kan))
                {
                    case this.kdb.KTypeEnum.unprocessed:
                        $(`#keisei_explanation`).append(this.explanation_unprocessed(subject));
                        return;
                    case this.kdb.KTypeEnum.unknown:
                        $(`#keisei_explanation`).append(this.explanation_unknown(subject));
                        break;
                    case this.kdb.KTypeEnum.hieroglyph:
                    case this.kdb.KTypeEnum.indicative:
                    case this.kdb.KTypeEnum.comp_indicative:
                    case this.kdb.KTypeEnum.derivative:
                    case this.kdb.KTypeEnum.rebus:
                    case this.kdb.KTypeEnum.kokuji:
                        $(`#keisei_explanation`).append(this.explanation_other(subject));
                        break;
                    case this.kdb.KTypeEnum.comp_phonetic:
                        if (!subject.phon)
                        {
                            $(`#keisei_explanation`).append(
                                this.error_msg(subject,
                                    `The phonetic element of this kanji was not in the database (or even no db)!`));
                            return;
                        }

                        $(`#keisei_explanation`).append(
                            this.explanation_phonetic(
                                subject,
                                this.kdb.getPReadings(subject.phon)));

                        this.populateCharGrid(`#keisei_phonetic_grid`, subject);

                        break;
                    default:
                        $(`#keisei_explanation`).append(
                            this.error_msg(subject, `The requested kanji is not in the database (or typo in DB)!`));
                }
            }
        }
        // #####################################################################

        // Maybe we have additional information to display, add an additional fold
        if (this.kdb.getPXRefs(subject.phon).length ||
            this.kdb.getPNonCompounds(subject.phon).length)
        {
            $(`#keisei_main_fold`).append(this.createMoreInfoFold());
            this.populateMoreInfoFold(subject);
            $(`#keisei_more_fold`).hide();
        }
        else
            $(`#keisei_head_moreinfo`).addClass(`disabled`);
    };
    // #########################################################################

    // Find common items in two arrays a, b.
    //
    // From https://stackoverflow.com/a/16227294/2699475
    // #########################################################################
    WK_Keisei.prototype.intersect = function(a, b)
    {
        return a.filter((e) => (b.indexOf(e)>-1));
    };
    // #########################################################################

    // Create character items for all compounds, sort them, and add them all.
    // #########################################################################
    WK_Keisei.prototype.populateCharGrid = function(selector, subject)
    {
        var char_list = [];
        // arrays used for sorting the 4 categories, append to front/back at each
        var char_list_lo = [];
        var char_list_hi = [];

        if (!this.kdb.checkPhonetic(subject.phon))
        {
            GM_log(`The following phonetic was not found in the database`, subject.phon);
            return;
        }

        // #####################################################################
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
                "meaning": this.wkdb.getKMeaning(kanji)[0],
                "href": this.wkdb.isKanjiInWK(kanji) ? `/kanji/${kanji}` : `javascript:;`,
                "kanji_id": `kanji-${i+2}`
            };

            if (this.kdb.getKReadings(kanji).length === common_readings.length)
            {
                badge.push(`badge-perfect`);
                char_list_hi.unshift(li_template);

                if (kanji === subject.kan)
                    $(`#keisei_explanation_quality`).html(this.pmark_perfect(subject));
            }
            else if (!common_readings.length)
            {
                badge.push(`badge-low`);
                char_list_lo.push(li_template);

                if (kanji === subject.kan)
                    $(`#keisei_explanation_quality`).html(this.pmark_low(subject));
            }
            else
            {
                if (this.kdb.getPReadings(subject.phon).indexOf(this.kdb.getKReadings(kanji)[0]) !== -1)
                {
                    badge.push(`badge-high`);
                    char_list_hi.push(li_template);

                    if (kanji === subject.kan)
                        $(`#keisei_explanation_quality`).html(this.pmark_high(subject));
                }
                else
                {
                    badge.push(`badge-middle`);
                    char_list_lo.unshift(li_template);

                    if (kanji === subject.kan)
                        $(`#keisei_explanation_quality`).html(this.pmark_middle(subject));
                }
            }

            li_template.badge = badge.join(` `);
        }
        // #####################################################################

        // #####################################################################
        char_list.push({
            "kanji": subject.phon,
            "readings": this.kdb.getKReadings(subject.phon),
            "meaning": `Phonetic`,
            "kanji_id": `phonetic-1`
        });

        if (this.kdb.checkRadical(subject.phon))
            char_list.push({
                "kanji": subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meaning": this.kdb.getWKRadicalPP(subject.phon),
                "href": `/radicals/${this.kdb.getWKRadical(subject.phon)}`,
                "kanji_id": `radical-1`
            });

        if (this.kdb.checkKanji(subject.phon))
            char_list.push({
                "kanji": subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meaning": this.wkdb.getKMeaning(subject.phon)[0],
                "href": this.wkdb.isKanjiInWK(subject.phon) ? `/kanji/${subject.phon}`: `javascript:;`,
                "kanji_id": `kanji-1`
            });

        char_list = char_list.concat(char_list_hi);
        char_list = char_list.concat(char_list_lo);

        $(selector).html(char_list.map(this.gen_item_chargrid).join(``));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.populateMoreInfoFold = function(subject)
    {
        var i;

        // #####################################################################
        // Append all cross-referenced tone marks (for example compounds that
        // are tone marks on their own), 0, ..., n
        for (i = 0; i < this.kdb.getPXRefs(subject.phon).length; i++)
        {
            var curPhon = this.kdb.getPXRefs(subject.phon)[i];

            $(`#keisei_more_fold`).append($(`<span></span>`)
                                  .attr(`id`, `keisei_more_expl_${i}`));

            $(`#keisei_more_expl_${i}`).append(this.explanation_xref(curPhon, this.kdb.getPReadings(curPhon)));

            var $gridx = $(`<ul></ul>`)
                        .attr(`id`, `keisei_xref_grid_${i}`)
                        .attr(`style`, `padding-bottom: 10px; margin-bottom:6px; border-bottom: 1px solid #d5d5d5;`)
                        .addClass(`single-character-grid`);

            $(`#keisei_more_fold`).append($gridx);
            this.populateCharGrid(`#keisei_xref_grid_${i}`, {"kan": subject.kan, "phon": curPhon});
        }
        // #####################################################################

        // #####################################################################
        // Append kanji that include the tone mark but are not considered to be compounds
        if (this.kdb.getPNonCompounds(subject.phon).length)
        {
            $(`#keisei_more_fold`).append($(`<span></span>`)
                                  .attr(`id`, `keisei_more_non_comp`));

            $(`#keisei_more_non_comp`).append(this.explanation_non_compound(subject));

            var $gridn = $(`<ul></ul>`)
                        .attr(`id`, `keisei_non_comp_grid`)
                        .attr(`style`, `padding-bottom: 10px; margin-bottom:6px; border-bottom: 1px solid #d5d5d5;`)
                        .addClass(`single-character-grid`);

            $(`#keisei_more_fold`).append($gridn);

            var char_list = [];
            char_list.push({
                "kanji": subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meaning": `Non-Phonetic`,
                "kanji_id": `nonphonetic-1`
            });

            for (i = 0; i < this.kdb.getPNonCompounds(subject.phon).length; i++)
            {
                var curKanji = this.kdb.getPNonCompounds(subject.phon)[i];
                char_list.push({
                    "kanji": curKanji,
                    "readings": this.kdb.getKReadings(curKanji),
                    "meaning": this.wkdb.getKMeaning(curKanji)[0],
                    "href": this.wkdb.isKanjiInWK(curKanji) ? `/kanji/${curKanji}` : `javascript:;`,
                    "kanji_id": `kanji-${i+101}`
                });
            }

            $(`#keisei_non_comp_grid`).html(char_list.map(this.gen_item_chargrid).join(``));
        }
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`keisei_style`).replace(/wk_namespace/g, GM_info.script.namespace));

        this.settings.debug = GM_getValue(`debug`) || false;
        this.settings.minify = GM_getValue(`minify`) || false;

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        this.wkdb.init();
        this.kdb.init(this.wkdb);
        this.wki.init();

        this.log(`The script element is: `, GM_info);

        // #####################################################################
        // Main hook, WK Interaction will kick off this script once the page
        // is ready and we can access the subject of the page.
        $(document).on(`${GM_info.script.namespace}_wk_subject_ready`,
                       this.injectKeiseiSection.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // Just do it!
    // #########################################################################
    WK_Keisei.prototype.run = function()
    {
        var curPage = this.wki.detectCurPage.call(this.wki);

        // Add scripts with guarding namespace (selecting class)
        GM_addStyle(GM_getResourceText(`bootstrapcss`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        GM_addStyle(GM_getResourceText(`chargrid`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        // #####################################################################
        // Add parts of bootstrap for the modal pages (settings, etc.)
        if (curPage === this.wki.PageEnum.reviews ||
            curPage === this.wki.PageEnum.lessons)
        {
            $(`<script></script>`)
            .attr(`type`, `text/javascript`)
            .text(GM_getResourceText(`bootstrapjs`))
            .appendTo(`head`);
        }
        // #####################################################################

        // Start page detection (and its callbacks once ready)
        this.wki.startInteraction.call(this.wki);
    };
    // #########################################################################
}
)();
// #############################################################################


// #############################################################################
// #############################################################################
var wk_keisei = new WK_Keisei();

wk_keisei.init();
wk_keisei.run();
// #############################################################################
// #############################################################################
