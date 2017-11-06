// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     0.8.6
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
// @resource    kanji     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/kanji.json
// @resource    phonetic  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/phonetic.json
// @resource    wk_kanji  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/wk_kanji.json
// @resource    style     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/css/keisei.css
// @resource    chargrid  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/css/chargrid.css
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dc3ad13c6b5abebaaa6b9e366fa7577c313f9ed6/wanikani-phonetic-compounds/phonetic_db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/ffeb781e177b3bfa5b7cd9ab4dd6f59eeab12752/wanikani-phonetic-compounds/wk_kanji_db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dc3ad13c6b5abebaaa6b9e366fa7577c313f9ed6/utility/wk_interaction.js
//
// @grant       GM_log
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_notification
//
// @run-at      document-end
// ==/UserScript==

/* jshint esversion: 6 */

// TODO: ideas
//       - menu to get info
//       -- set debug
//       -- stats (#kanji, radicals, phonetics, ...)
//       -- dates of db updates
//       - notify db updates (store old version as value)

window.wk_keisei = {};

wk_keisei.debug = true;
wk_keisei.log = wk_keisei.debug ? function(...msg) {GM_log("WK_Keisei: "+msg[0], msg.slice(1));} : function() {};

(function(gobj) {
    "use strict";

    // WKInteraction, an object to interact with the WaniKani site
    var wki = null;
    // KeiseiDB, the database including all kanji and their tone marks
    var kdb = null;
    // WKKanjiDB, a dump from WK to fill in the meanings
    var wkdb = null;

    // #########################################################################
    // Template strings with es6 features for the various explanations (first
    // paragraph for every information field).
    //
    // Inspired from https://stackoverflow.com/a/39065147/2699475
    const explanation_non_radical = (subject) =>
       `<p>This radical is not considered a phonetic mark!</p>`;

    const explanation_radical = (subject) =>
       `<p>The radical 「${subject.phon}」 is used as a phonetic mark in other compounds!
        Its ON reading(s) are 「${kdb.getPReadings(subject.phon).join("・")}」.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    const explanation_unknown = (subject) =>
       `<p>The kanji 「${subject.kan}」 has an unknown or contested origin, or its tone mark is too obscure to be useful.
        Stay tuned for more information in future versions.</p>`;

    const explanation_unprocessed = (subject) =>
       `<p>The kanji 「${subject.kan}」 was not yet added to the DB, please wait for a future version.</p>`;

    const explanation_phonetic = (subject) =>
       `<p>The kanji 「${subject.kan}」 was created using semantic-phonetic composition,
        the tone mark is 「${subject.phon}」 with the ON reading(s) 「${kdb.getPReadings(subject.phon).join("・")}」 (including rare ones).</p>
        <span id="keisei-explanation-quality"></span>`;

    const explanation_pmark = (subject) =>
       `<p>The kanji 「${subject.phon}」 is used as a phonetic mark in other compounds!
        Its ON reading(s) are 「${kdb.getPReadings(subject.phon).join("・")}」.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    const explanation_other = (subject) =>
       `<p>The kanji 「${subject.kan}」 is not considered a semantic-phonetic composition.</p>`;

    const explanation_missing = (subject) =>
       `<p>This element is not listed in the Keisei database!</p>`;

    const error_msg = (subject, msg) =>
       `<p>An error occured while processing kanji 「${subject.kan}」! Message was: '${msg}'</p>`;
    // #########################################################################

    // Different paragraphs describing how well the current kanji is matched
    // by its corresponding tone mark.
    // #########################################################################
    const pmark_perfect = (subject) =>
       `<p>The tone mark is a perfect match（天）because all readings of this kanji are derived from it.</p>`;
    const pmark_high = (subject) =>
       `<p>The tone mark is a good match（上）because the main readings of this kanji are derived from it.</p>`;
    const pmark_middle = (subject) =>
       `<p>The tone mark is a bad match（中）because the kanji 「${subject.kan}」 can be read that way in rare cases,
        but the prevalent reading(s) are different.</p>`;
    const pmark_low = (subject) =>
       `<p>The tone mark is no indicator at all（下）for the readings of this kanji,
        they may have changed over time or the construction of this character is different after all.</p>`;
    // #########################################################################

    // #########################################################################
    const explanation_xref = (subject) =>
       `<p>The phonetic component ${subject.phon} is related to another component, the readings may be similar.
        The ON reading(s) 「${kdb.getPReadings(subject.phon).join("・")}」 are listed for this tone mark.</p>`;
    const explanation_non_compound = (subject) =>
       `<p>The phonetic component ${subject.phon} also has kanji that are either phonetic compounds of another tone mark,
        or are considered a different type of composition. The readings are likely to differ.</p>`;

    // Character item to be included in a character grid
    // #########################################################################
    const li_phon_char = ({kanji, meaning, badge, href, kanji_id}) =>
       `<li id="${kanji_id}" class="character-item">
            <span lang="ja" class="${badge}"></span>
            <a class="keisei-kanji-link" href="${href}">
                <span class="character" lang="ja">${kanji}</span>
                <ul>
                    <li>${kdb.getKReadings(kanji)[0]}</li>
                    <li>${meaning}</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################


    // Callback for the WKInteraction, this is called directly at the beginning
    // when the required WK content is available.
    //
    // Note: on the reviews and lessons page we inject some styles lifted from
    // WK to include the nice 'character grids', this might cause some ugly
    // interactions with these pages (seems fine though)!
    //
    // TODO: also react to radicals in reviews and lessons!
    // #########################################################################
    function injectKeiseiSection()
    {
        var subject = wki.getSubject();

        gobj.log("Injecting phonetic section (callback works).");

        if (!wki.checkSubject(subject))
            return;

        if (subject.rad)
            subject.phon = kdb.mapWKRadicalToPhon(subject.rad);
        else
            subject.phon = kdb.getKPhonetic(subject.kan) || subject.kan;

        gobj.log("Working with the following input:", subject);


        switch(wki.curPage)
        {
            case wki.PageEnum.radicals:
                $("section#note-meaning").before(createKeiseiSection());
                break;
            case wki.PageEnum.kanji:
                $("section#note-reading").before(createKeiseiSection());
                break;
            case wki.PageEnum.reviews:
                if ($("section#item-info-reading-mnemonic").length > 0)
                {
                    $("section#item-info-reading-mnemonic").after(createKeiseiSection());

                    if ($("section#item-info-reading-mnemonic").is(":hidden"))
                        $("#keisei-section").hide();
                }
                else
                    $("div#item-info-col2").append(createKeiseiSection());

                break;
            case wki.PageEnum.lessons:
                $("#keisei-section").remove();

                $('div#supplement-kan-reading div:contains("Reading Mnemonic") blockquote:last')
                .after(createKeiseiSection());

                break;
            default:
                GM_log("Unknown page type", wki.curPage, ", cannot inject info!");
                return;
        }

        populateKeiseiSection(subject);

        if (wki.curPage === wki.PageEnum.reviews || wki.curPage === wki.PageEnum.lessons)
            $(".keisei-kanji-link").attr("target", "_blank");
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

        gobj.log("Created the Keisei section, append!");

        return $section;
    }
    // #########################################################################

    // Fill the various field in the section, depending on the information in
    // the kanji and phonetic databases.
    // #########################################################################
    function populateKeiseiSection(subject)
    {
        if (subject.rad)
        {
            if (subject.phon)
            {
                $("#keisei-explanation").append(explanation_radical(subject));
                populateCharGrid("#keisei-phonetic-grid", subject);
            }
            else
            {
                $("#keisei-explanation").append(explanation_non_radical(subject));
                return;
            }
        }
        else
        {
            if ((!wki.checkSubject(subject)) || (subject.kan && !kdb.checkKanji(subject.kan)))
            {
                $("#keisei-explanation").append(explanation_missing(subject));
                return;
            }
            else if (!subject.phon && !kdb.checkKanji(subject.kan))
            {
                $("#keisei-explanation").append(
                    error_msg(subject,
                            "The requested information is not in the Keisei database!"));
                return;
            }

            // The kanji could be a phonetic element itself, show full info ...
            else if (kdb.checkPhonetic(subject.kan))
            {
                $("#keisei-explanation").append(explanation_pmark(subject));
                populateCharGrid("#keisei-phonetic-grid", subject);
            }
            else
            {
                switch (kdb.getKType(subject.kan))
                {
                    case kdb.KTypeEnum.unprocessed:
                        $("#keisei-explanation").append(explanation_unprocessed(subject));
                        return;
                    case kdb.KTypeEnum.unknown:
                        $("#keisei-explanation").append(explanation_unknown(subject));
                        break;
                    case kdb.KTypeEnum.hieroglyph:
                    case kdb.KTypeEnum.indicative:
                    case kdb.KTypeEnum.comp_indicative:
                    case kdb.KTypeEnum.derivative:
                    case kdb.KTypeEnum.rebus:
                    case kdb.KTypeEnum.kokuji:
                        $("#keisei-explanation").append(explanation_other(subject));
                        break;
                    case kdb.KTypeEnum.comp_phonetic:
                        if (!subject.phon)
                        {
                            $("#keisei-explanation").append(
                                error_msg(subject,
                                        "The phonetic element of this kanji was not in the database (or even no db)!"));
                            return;
                        }

                        $("#keisei-explanation").append(explanation_phonetic(subject));
                        populateCharGrid("#keisei-phonetic-grid", subject);

                        break;
                    default:
                        $("#keisei-explanation").append(
                            error_msg(subject, "The requested kanji is not in the database!"));
                }
            }
        }

        // Maybe we have additional information to display, add an additional fold
        if (kdb.getPXRefs(subject.phon).length > 0 || kdb.getPNonCompounds(subject.phon).length > 0)
        {
            $("#keisei-section").append(createMoreInfoFold());
            populateMoreInfoFold(subject);
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
    function populateCharGrid(selector, subject)
    {
        var char_list = [];
        var char_list_lo = [];
        var char_list_hi = [];

        for (var i = 0; i < kdb.getPCompounds(subject.phon).length; i++)
        {
            var kanji = kdb.getPCompounds(subject.phon)[i];
            var badge = ["item-badge", "recently-unlocked-badge"];

            if (!kanji)
                continue;

            var common_readings = intersect(kdb.getKReadings(kanji), kdb.getPReadings(subject.phon));
            var li_template = {kanji: kanji, badge: "", meaning: wkdb.getKMeaning(kanji)[0],
                href:"/kanji/"+kanji, kanji_id: "kanji-"+i};

            if (kdb.getKReadings(kanji).length === common_readings.length)
            {
                badge.push("badge-perfect");
                if (kanji === subject.kan)
                    $("#keisei-explanation-quality").html(pmark_perfect(subject));
                char_list_hi.unshift(li_template);
            }
            else if (common_readings.length === 0)
            {
                badge.push("badge-low");
                if (kanji === subject.kan)
                    $("#keisei-explanation-quality").html(pmark_low(subject));
                char_list_lo.push(li_template);
            }
            else
            {
                if (kdb.getPReadings(subject.phon).indexOf(kdb.getKReadings(kanji)[0]) !== -1)
                {
                    badge.push("badge-high");
                    if (kanji === subject.kan)
                        $("#keisei-explanation-quality").html(pmark_high(subject));
                    char_list_hi.push(li_template);
                }
                else
                {
                    badge.push("badge-middle");
                    if (kanji === subject.kan)
                        $("#keisei-explanation-quality").html(pmark_middle(subject));
                    char_list_lo.unshift(li_template);
                }
            }

            li_template.badge = badge.join(" ");
        }

        char_list.push({kanji: subject.phon, badge: "", meaning: "Phonetic",
            href:"", kanji_id: "phonetic-1"});

        if (kdb.checkRadical(subject.phon))
            char_list.push({kanji: subject.phon, badge: "", meaning: kdb.getWKRadicalPP(subject.phon),
                href:"/radicals/"+kdb.getWKRadical(subject.phon), kanji_id: "radical-1"});

        if (kdb.checkKanji(subject.phon))
            char_list.push({kanji: subject.phon, badge: "", meaning: wkdb.getKMeaning(subject.phon)[0],
                href:"/kanji/"+subject.phon, kanji_id: "kanji-1"});

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
        var $infofold = $('<div></div>')
                        .attr("id", "keisei-more-fold");

        var $button = $('<div id="keisei-more-button"><i class="icon-chevron-down"></i>Show More Information</div>');
        var $info = $('<div ></div>')
                    .attr("id", "keisei-more-info");

        $infofold.append($button);
        $infofold.append($info);

        $button.on("click", toggleMoreInfoFold);

        return $infofold;
    }
    // #########################################################################

    // #########################################################################
    function populateMoreInfoFold(subject)
    {
        var i;

        for (i = 0; i < kdb.getPXRefs(subject.phon).length; i++)
        {
            var curPhon = kdb.getPXRefs(subject.phon)[i];

            $("#keisei-more-info").append($('<span></span>').attr("id", "keisei-more-expl-"+i));
            $("#keisei-more-expl-"+i).append(explanation_xref(subject));
            var $gridx = $("<ul></ul>")
                        .attr("id", "keisei-xref-grid-"+i)
                        .addClass("single-character-grid");
            $("#keisei-more-info").append($gridx);
            populateCharGrid("#keisei-xref-grid-"+i, {"kan": subject.kan, "phon": curPhon});
        }

        if (kdb.getPNonCompounds(subject.phon).length > 0)
        {
            $("#keisei-more-info").append($('<span></span>').attr("id", "keisei-more-non-comp"));
            $("#keisei-more-non-comp").append(explanation_non_compound(subject));
            var $gridn = $("<ul></ul>")
                        .attr("id", "keisei-non-comp-grid")
                        .addClass("single-character-grid");

            $("#keisei-more-info").append($gridn);

            var char_list = [];
            char_list.push({kanji: subject.phon, meaning: "Non-Phonetic", badge: "", href:"", kanji_id: "nonphonetic-1"});

            for (i = 0; i < kdb.getPNonCompounds(subject.phon).length; i++)
            {
                var curKanji = kdb.getPNonCompounds(subject.phon)[i];
                char_list.push({kanji: curKanji, meaning: wkdb.getKMeaning(curKanji)[0], badge: "",
                    href:"/kanji/"+curKanji, kanji_id: "kanji-"+i});
            }

            $("#keisei-non-comp-grid").html(char_list.map(li_phon_char).join(""));
        }
    }
    // #########################################################################

    // Callback function for click events on more info button.
    // #########################################################################
    function toggleMoreInfoFold()
    {
        var $button = $("#keisei-more-button");
        var $fold = $("#keisei-more-info");

        if ($fold.is(":visible"))
            $button.html('<i class="icon-chevron-down"></i>Show More Information');
        else
            $button.html('<i class="icon-chevron-up"></i>Show Less Information');

        $("#keisei-more-info").slideToggle();
    }
    // #########################################################################


    // Just do it!
    // #########################################################################
    function run()
    {
        GM_addStyle(GM_getResourceText("style"));

        // GM_notification({title:"WK Keisei", text:"There is even some text included ..."});

        kdb = new KeiseiDB();
        kdb.init();

        wkdb = new WKKanjiDB();
        wkdb.init();

        wki = new WKInteraction();
        wki.init(injectKeiseiSection);

        // add the fake chargrid styles to pages that normally don't have them
        if (wki.curPage === wki.PageEnum.reviews || wki.curPage === wki.PageEnum.lessons)
            GM_addStyle(GM_getResourceText("chargrid"));
    }
    // #########################################################################

    run();
})(window.wk_keisei);
