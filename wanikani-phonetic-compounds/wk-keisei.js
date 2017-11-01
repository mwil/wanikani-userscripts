// ==UserScript==
// @name        WaniKani Phonetic-Semantic Composition Rebirth
// @version     2.0.0
// @author      acm
// @description Adds information to Wanikani about kanji that use Phonetic-Semantic Composition.
// @namespace   wk_keisei
// @include     http://www.wanikani.com/kanji/*
// @include     https://www.wanikani.com/kanji/*
// @include     http://www.wanikani.com/review/session*
// @include     https://www.wanikani.com/review/session*
// @include     http://www.wanikani.com/lesson/session*
// @include     https://www.wanikani.com/lesson/session*
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/wk-phon-db-niko.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/utility/wk_interaction.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/utility/wk_chargrid.js
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @grant       none
// @run-at      document-end
// ==/UserScript==

/* jshint esversion: 6 */

window.wk_keisei = {};

(function(gobj) {
    "use strict";

    // WKInteraction, an object to interact with the WaniKani site
    var wki = null;
    // KeiseiDB, the database including all kanji and their tone marks
    var kdb = null;

    // Callback for the WKInteraction, this is called directly at the beginning
    // when the required WK content is available.
    //
    // Note: on the reviews and lessons page we inject some styles lifted from
    // WK to include the nice 'character grids', this might cause some ugly
    // interactions with these pages (seems fine though)!
    // #########################################################################
    function injectKeiseiSection()
    {
        if (!wki.getKanji())
            return;

        switch(wki.curPage)
        {
            case wki.PageEnum.kanji:
                $("section#note-reading").before(createKeiseiSection());
                break;
            case wki.PageEnum.reviews:
                injectWKStyles();

                $("section#item-info-reading-mnemonic").after(createKeiseiSection());

                if ($("section#item-info-reading-mnemonic").is(":hidden"))
                    $("#keisei-section").hide();

                break;
            case wki.PageEnum.lessons:
                if ($("#keisei-section").length === 0)
                    injectWKStyles();
                else
                    $("#keisei-section").remove();

                $('div#supplement-kan-reading div:contains("Reading Mnemonic") blockquote:last').after(createKeiseiSection());
                break;
            default:
                console.log("KEISEI: Unknown page type, cannot inject info!");
        }

        populateKeiseiSection();
    }

    // #########################################################################
    // Insert stubs for all information fields to be filled later by
    // populateKeiseiSection().
    //
    // Some section may stay empty, for example when a kanji is not related to
    // phonetic compounds.
    // #########################################################################
    function createKeiseiSection()
    {
        var $section = $("<section></section>")
                       .attr("id", "keisei-section");

        var $grid = $("<ul></ul>")
                    .attr("id", "keisei-phonetic-grid")
                    .addClass("single-character-grid");

        $section.append('<h2>Phonetic-Semantic Composition</h2>');
        $section.append($('<span></span>').attr("id", "keisei-explanation"));
        $section.append($grid);
        // $section.append($expl);

        return $section;
    }
    // #########################################################################

    // #########################################################################
    // Template strings with es6 features for the various explanations (first
    // paragraph for every information field).
    //
    // Inspired from https://stackoverflow.com/a/39065147/2699475
    const explanation_unknown = (curKanji) =>
       `<p>The kanji ${curKanji} has an unknown or contested origin. Stay tuned for more information in future versions.</p>`;

    const explanation_unprocessed = (curKanji) =>
       `<p>The kanji ${curKanji} was not yet added to the DB, please wait for a future version.</p>`;

    const explanation_phonetic = (curKanji, curPhon) =>
       `<p>The kanji ${curKanji} was created using semantic-phonetic composition.</p>
        <p>The ON reading(s) ${kdb.getPReadings(curPhon).join(", ")} are listed for this tone mark, including rare ones.</p>
        <span id="keisei-explanation-quality"></span>`;

    const explanation_pmark = (curPhon) =>
       `<p>The kanji ${curPhon} is used as a phonetic mark in other compounds!</p>
        <p>The ON readings ${kdb.getPReadings(curPhon).join(", ")} are listed for this tone mark.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    const explanation_other = (curKanji) =>
       `<p>The kanji ${curKanji} is not considered a semantic-phonetic composition.</p>`;

    const error_msg = (curKanji, msg) =>
       `<p>An error occured while processing kanji '${curKanji}'! Message was: '${msg}'</p>`;
    // #########################################################################

    // Different paragraphs describing how well the current kanji is matched
    // by its corresponding tone mark.
    // #########################################################################
    const pmark_perfect = (curKanji) =>
       `<p>Information on mutual readings and the regularity of the composition here ...</p>`;
    const pmark_high = (curKanji) =>
       `<p>Information on mutual readings and the regularity of the composition here ...</p>`;
    const pmark_middle = (curKanji) =>
       `<p>Information on mutual readings and the regularity of the composition here ...</p>`;
    const pmark_low = (curKanji) =>
       `<p>Information on mutual readings and the regularity of the composition here ...</p>`;
    // #########################################################################

    // #########################################################################
    const explanation_xref = (curKanji, curPhon) =>
       `<p>The phonetic component ${curPhon} is related to another component, the readings may be similar.</p>`;
    const explanation_non_compound = (curKanji, curPhon) =>
       `<p>The phonetic component ${curPhon} also has kanji that are either phonetic compounds of another tone mark,
       or are considered a different type of composition. The readings are likely to differ.</p>`;

    // Character item to be included in a character grid
    //
    // TODO: we might get this directly from WK later ...
    // #########################################################################
    const li_phon_char = ({kanji, badge, kanji_id}) =>
       `<li id="${kanji_id}" class="character-item">
            <span lang="ja" class="${badge}"></span>
            <a href="">
                <span class="character" lang="ja">${kanji}</span>
                <ul>
                    <li>${kdb.getKReadings(kanji)[0]}</li>
                    <li>Meaning</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################

    // Fill the various field in the section, depending on the information in
    // the kanji and phonetic databases.
    // #########################################################################
    function populateKeiseiSection()
    {
        var curKanji = wki.getKanji();

        if (!kdb.checkKanji(curKanji))
        {
            $("#keisei-explanation").append(
                error_msg(curKanji,
                          "The requested kanji is not in the database!"));
            return;
        }

        // The kanji could be a phonetic element itself, show full info ...
        if (kdb.checkPhonetic(curKanji))
        {
            $("#keisei-explanation").append(explanation_pmark(curKanji));
            populateCharGrid("#keisei-phonetic-grid", curKanji, curKanji);
            return;
        }

        switch (kdb.getKType(curKanji))
        {
            case kdb.KTypeEnum.unprocessed:
                $("#keisei-explanation").append(explanation_unprocessed(curKanji));
                return;
            case kdb.KTypeEnum.unknown:
                $("#keisei-explanation").append(explanation_unknown(curKanji));
                break;
            case kdb.KTypeEnum.hieroglyph:
            case kdb.KTypeEnum.indicative:
            case kdb.KTypeEnum.comp_indicative:
            case kdb.KTypeEnum.derivative:
            case kdb.KTypeEnum.rebus:
            case kdb.KTypeEnum.kokuji:
                $("#keisei-explanation").append(explanation_other(curKanji));
                break;
            case kdb.KTypeEnum.comp_phonetic:
                var curPhon = kdb.getKPhonetic(curKanji);

                if (!curPhon)
                {
                    $("#keisei-explanation").append(
                        error_msg(curKanji,
                                  "The phonetic element of this kanji was not in the database (or even no db)!"));
                    return;
                }

                $("#keisei-explanation").append(explanation_phonetic(curKanji, curPhon));
                populateCharGrid("#keisei-phonetic-grid", curKanji, curPhon);

                if (kdb.getPXRefs(curPhon).length > 0 || kdb.getPNonCompounds(curPhon).length > 0)
                {
                    $("#keisei-section").append(createMoreInfoFold());
                    populateMoreInfoFold(curKanji, curPhon);
                }

                break;
            default:
                $("#keisei-explanation").append(
                    error_msg(curKanji, "The requested kanji is not in the database!"));
        }
    }
    // #########################################################################

    // Find common items in two arrays.
    //
    // From https://stackoverflow.com/a/16227294/2699475
    // #########################################################################
    function intersect(a, b) {
        return a.filter(function (e) {
            return b.indexOf(e) > -1;
        });
    }
    // #########################################################################

    // Create character items for all compounds, sort them, and add them all.
    // #########################################################################
    function populateCharGrid(selector, curKanji, curPhon)
    {
        var char_list = [];
        var char_list_lo = [];
        var char_list_hi = [];

        for (var i = 0; i < kdb.getPCompounds(curPhon).length; i++)
        {
            var kanji = kdb.getPCompounds(curPhon)[i];
            var badge = ["item-badge", "recently-unlocked-badge"];

            if (!kanji)
                continue;
            if (kanji === curKanji)
                badge.push("badge-current");

            var common_readings = intersect(kdb.getKReadings(kanji), kdb.getPReadings(curPhon));

            if (kdb.getKReadings(kanji).length === common_readings.length)
            {
                badge.push("badge-perfect");
                $("#keisei-explanation-quality").html(pmark_perfect(curKanji));
                char_list_hi.unshift({kanji: kanji, badge: badge.join(" "), kanji_id: "kanji-"+i});
            }
            else if (common_readings.length === 0)
            {
                badge.push("badge-low");
                $("#keisei-explanation-quality").html(pmark_low(curKanji));
                char_list_lo.push({kanji: kanji, badge: badge.join(" "), kanji_id: "kanji-"+i});
            }
            else
            {
                if (kdb.getPReadings(curPhon).indexOf(kdb.getKReadings(kanji)[0]) !== -1)
                {
                    badge.push("badge-high");
                    $("#keisei-explanation-quality").html(pmark_high(curKanji));
                    char_list_hi.push({kanji: kanji, badge: badge.join(" "), kanji_id: "kanji-"+i});
                }
                else
                {
                    badge.push("badge-middle");
                    $("#keisei-explanation-quality").html(pmark_middle(curKanji));
                    char_list_lo.unshift({kanji: kanji, badge: badge.join(" "), kanji_id: "kanji-"+i});
                }
            }
        }

        // Order: Phonetic//WK Radical?//Base Kanji?//Perfect PComp//High//Middle/Low
        // curKanji is mixed in, gets special badge
        char_list.push({kanji: curPhon, badge: "", kanji_id: "radical-1"});
        // char_list.push({kanji: curPhon, badge: "", kanji_id: "radical-1"});  // TODO: WK radical
        if (kdb.checkKanji(curPhon))
            char_list.push({kanji: curPhon, badge: "", kanji_id: "kanji-1"});

        char_list = char_list.concat(char_list_hi);
        char_list = char_list.concat(char_list_lo);

        $(selector).html(char_list.map(li_phon_char).join(""));
    }
    // #########################################################################

    // Sometimes we want to include even more chargrids with related tone marks
    // or kanji that are not considered a result of phonetic composition.
    // #########################################################################
    function createMoreInfoFold()
    {
        var $infofold = $('<div id="keisei-more-fold"></div>');

        var $button = $('<div id="keisei-more-button"><i class="icon-chevron-down"></i>Show More Information</div>');
        var $info = $('<div id="keisei-more-info"></div>');

        $infofold.append($button);
        $infofold.append($info);

        $button.on("click", toggleMoreInfoFold);

        return $infofold;
    }
    // #########################################################################

    // #########################################################################
    function populateMoreInfoFold(kanji, phon)
    {
        var i;

        for (i = 0; i < kdb.getPXRefs(phon).length; i++)
        {
            var curPhon = kdb.getPXRefs(phon)[i];

            $("#keisei-more-info").append($('<span></span>').attr("id", "keisei-more-expl-"+i));
            $("#keisei-more-expl-"+i).append(explanation_xref(kanji, curPhon));
            var $gridx = $("<ul></ul>")
                        .attr("id", "keisei-xref-grid-"+i)
                        .addClass("single-character-grid");
            $("#keisei-more-info").append($gridx);
            populateCharGrid("#keisei-xref-grid-"+i, kanji, curPhon);
        }

        if (kdb.getPNonCompounds(phon).length > 0)
        {
            $("#keisei-more-info").append($('<span></span>').attr("id", "keisei-more-non-comp"));
            $("#keisei-more-non-comp").append(explanation_non_compound(kanji, phon));
            var $gridn = $("<ul></ul>")
                        .attr("id", "keisei-non-comp-grid")
                        .addClass("single-character-grid");
            $("#keisei-more-info").append($gridn);

            var char_list = [];
            char_list.push({kanji: phon, badge: "", kanji_id: "radical-"});

            for (i = 0; i < kdb.getPNonCompounds(phon).length; i++)
            {
                var curKanji = kdb.getPNonCompounds(phon)[i];

                char_list.push({kanji: curKanji, badge: "", kanji_id: "kanji-"+i});
            }

            $("#keisei-non-comp-grid").html(char_list.map(li_phon_char).join(""));
        }
    }
    // #########################################################################

    // Callback function for click events on more info button.
    // #########################################################################
    function toggleMoreInfoFold()
    {
        var $button = $('#keisei-more-button');
        var $fold = $('#keisei-more-info');

        if ($fold.is(":visible"))
            $button.html('<i class="icon-chevron-down"></i>Show More Information');
        else
            $button.html('<i class="icon-chevron-up"></i>Show Less Information');

        $('#keisei-more-info').slideToggle();
    }
    // #########################################################################

    // Inject our own styles, this is done last so existing styles will be
    // superceded here.
    // #########################################################################
    function injectStyles()
    {
        $("html > head").append($(`
            <style>
                .badge-perfect:before {
                    content: "天"; background-color: #0695df;
                }
                .badge-high:before {
                    content: "上"; background-color: #0695df;
                }
                .badge-middle:before {
                    content: "中"; background-color: #a80571;
                }
                .badge-low:before {
                    content: "下"; background-color: #a80571;
                }
                .badge-current:before {
                    background-color: #fbc042 !important;
                }
                #keisei-more-button {
                    cursor: pointer;
                    margin-top: 20px;
                    padding: 10px;
                    text-align: center;
                }
                #keisei-more-info {
                    display: none;
                }
            </style>
        `));
    }
    // #########################################################################


    // Just do it!
    // #########################################################################
    function run()
    {
        injectStyles();

        kdb = new KeiseiDB();
        kdb.init();

        wki = new WKInteraction();
        wki.init(injectKeiseiSection);
    }
    // #########################################################################

    run();
})(window.wk_keisei);
