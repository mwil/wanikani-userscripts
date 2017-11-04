// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     0.8.0
// @author      acm
// @description Adds information to Wanikani about kanji that use Phonetic-Semantic Composition.
// @namespace   wk_keisei
// @include     http://www.wanikani.com/radicals/*
// @include     https://www.wanikani.com/radicals/*
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
    // WKKanjiDB, a dump from WK to fill in the meanings
    var wkdb = null;

    // Callback for the WKInteraction, this is called directly at the beginning
    // when the required WK content is available.
    //
    // Note: on the reviews and lessons page we inject some styles lifted from
    // WK to include the nice 'character grids', this might cause some ugly
    // interactions with these pages (seems fine though)!
    // #########################################################################
    function injectKeiseiSection()
    {
        var subject = wki.getSubject();
        var curKanji = null;
        var curPhon = null;

        if (!subject)
            return;

        switch(wki.curPage)
        {
            case wki.PageEnum.radicals:
                curPhon = kdb.mapWKRadicalToPhon(subject);
                $("section#note-meaning").after(createKeiseiSection());

                break;
            case wki.PageEnum.kanji:
                curKanji = subject;
                $("section#note-reading").before(createKeiseiSection());

                break;
            case wki.PageEnum.reviews:
                curKanji = subject;

                injectWKStyles();

                $("section#item-info-reading-mnemonic").after(createKeiseiSection());

                if ($("section#item-info-reading-mnemonic").is(":hidden"))
                    $("#keisei-section").hide();

                break;
            case wki.PageEnum.lessons:
                curKanji = subject;

                if ($("#keisei-section").length === 0)
                    injectWKStyles();
                else
                    $("#keisei-section").remove();

                $('div#supplement-kan-reading div:contains("Reading Mnemonic") blockquote:last').after(createKeiseiSection());

                break;
            default:
                console.log("KEISEI: Unknown page type", wki.curPage, ", cannot inject info!");
                return;
        }

        if (!curPhon)
            curPhon = kdb.checkPhonetic(curKanji) ? curKanji : kdb.getKPhonetic(curKanji);

        // TODO: extract curPhon from here, options of cK, cP are (cK, cP), (cK, cK), (cK, null), (null, null), (null, cP) <- rad page
        populateKeiseiSection(curKanji, curPhon);

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
        // $section.append($expl);

        return $section;
    }
    // #########################################################################

    // #########################################################################
    // Template strings with es6 features for the various explanations (first
    // paragraph for every information field).
    //
    // Inspired from https://stackoverflow.com/a/39065147/2699475
    const explanation_radical = (curPhon) =>
       `<p>The radical 「${curPhon}」 is used as a phonetic mark in other compounds!
        Its ON reading(s) are 「${kdb.getPReadings(curPhon).join("・ ")}」.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    const explanation_unknown = (curKanji) =>
       `<p>The kanji 「${curKanji}」 has an unknown or contested origin, or its tone mark is too obscure to be useful.
        Stay tuned for more information in future versions.</p>`;

    const explanation_unprocessed = (curKanji) =>
       `<p>The kanji 「${curKanji}」 was not yet added to the DB, please wait for a future version.</p>`;

    const explanation_phonetic = (curKanji, curPhon) =>
       `<p>The kanji 「${curKanji}」 was created using semantic-phonetic composition,
        the tone mark is 「${curPhon}」 with the ON reading(s) 「${kdb.getPReadings(curPhon).join("・ ")}」 (including rare ones).</p>
        <span id="keisei-explanation-quality"></span>`;

    const explanation_pmark = (curPhon) =>
       `<p>The kanji 「${curPhon}」 is used as a phonetic mark in other compounds!
        Its ON reading(s) are 「${kdb.getPReadings(curPhon).join("・ ")}」.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    const explanation_other = (curKanji) =>
       `<p>The kanji 「${curKanji}」 is not considered a semantic-phonetic composition.</p>`;

    const explanation_missing = () =>
       `<p>This element is not listed in the Keisei database!</p>`;

    const error_msg = (curKanji, msg) =>
       `<p>An error occured while processing kanji 「${curKanji}」! Message was: '${msg}'</p>`;
    // #########################################################################

    // Different paragraphs describing how well the current kanji is matched
    // by its corresponding tone mark.
    // #########################################################################
    const pmark_perfect = (curKanji) =>
       `<p>The tone mark is a perfect match（天）because all readings of this kanji are derived from it.</p>`;
    const pmark_high = (curKanji) =>
       `<p>The tone mark is a good match（上）because the main readings of this kanji are derived from it.</p>`;
    const pmark_middle = (curKanji) =>
       `<p>The tone mark is a bad match（中）because the kanji 「${curKanji}」 can be read that way in rare cases,
        but the prevalent reading(s) are different.</p>`;
    const pmark_low = (curKanji) =>
       `<p>The tone mark is no indicator at all（下）for the readings of this kanji,
        they may have changed over time or the construction of this character is different after all.</p>`;
    // #########################################################################

    // #########################################################################
    const explanation_xref = (curKanji, curPhon) =>
       `<p>The phonetic component ${curPhon} is related to another component, the readings may be similar.
        The ON reading(s) 「${kdb.getPReadings(curPhon).join("、 ")}」 are listed for this tone mark.</p>`;
    const explanation_non_compound = (curKanji, curPhon) =>
       `<p>The phonetic component ${curPhon} also has kanji that are either phonetic compounds of another tone mark,
        or are considered a different type of composition. The readings are likely to differ.</p>`;

    // Character item to be included in a character grid
    //
    // TODO: new tab in reviews and lessons, same in kanji and radicals
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

    // Fill the various field in the section, depending on the information in
    // the kanji and phonetic databases.
    // #########################################################################
    function populateKeiseiSection(curKanji, curPhon)
    {
        if ((!curKanji && !curPhon) || (curKanji && !kdb.checkKanji(curKanji)))
        {
            $("#keisei-explanation").append(explanation_missing(curPhon));
            return;
        }
        else if (!curPhon && !kdb.checkKanji(curKanji))
        {
            $("#keisei-explanation").append(
                error_msg(curKanji,
                          "The requested information is not in the Keisei database!"));
            return;
        }

        if (!curKanji)
        {
            $("#keisei-explanation").append(explanation_radical(curPhon));
            populateCharGrid("#keisei-phonetic-grid", null, curPhon);
        }
        // The kanji could be a phonetic element itself, show full info ...
        else if (kdb.checkPhonetic(curKanji))
        {
            $("#keisei-explanation").append(explanation_pmark(curKanji));
            populateCharGrid("#keisei-phonetic-grid", curKanji, curKanji);
        }
        else
        {
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
                    if (!curPhon)
                    {
                        $("#keisei-explanation").append(
                            error_msg(curKanji,
                                    "The phonetic element of this kanji was not in the database (or even no db)!"));
                        return;
                    }

                    $("#keisei-explanation").append(explanation_phonetic(curKanji, curPhon));
                    populateCharGrid("#keisei-phonetic-grid", curKanji, curPhon);

                    break;
                default:
                    $("#keisei-explanation").append(
                        error_msg(curKanji, "The requested kanji is not in the database!"));
            }
        }

        if (kdb.getPXRefs(curPhon).length > 0 || kdb.getPNonCompounds(curPhon).length > 0)
        {
            $("#keisei-section").append(createMoreInfoFold());
            populateMoreInfoFold(curKanji, curPhon);
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

            var common_readings = intersect(kdb.getKReadings(kanji), kdb.getPReadings(curPhon));
            var li_template = {kanji: kanji, badge: "", meaning: wkdb.getKMeaning(kanji)[0],
                href:"/kanji/"+kanji, kanji_id: "kanji-"+i};

            if (kdb.getKReadings(kanji).length === common_readings.length)
            {
                badge.push("badge-perfect");
                if (kanji === curKanji)
                    $("#keisei-explanation-quality").html(pmark_perfect(curKanji));
                char_list_hi.unshift(li_template);
            }
            else if (common_readings.length === 0)
            {
                badge.push("badge-low");
                if (kanji === curKanji)
                    $("#keisei-explanation-quality").html(pmark_low(curKanji));
                char_list_lo.push(li_template);
            }
            else
            {
                if (kdb.getPReadings(curPhon).indexOf(kdb.getKReadings(kanji)[0]) !== -1)
                {
                    badge.push("badge-high");
                    if (kanji === curKanji)
                        $("#keisei-explanation-quality").html(pmark_high(curKanji));
                    char_list_hi.push(li_template);
                }
                else
                {
                    badge.push("badge-middle");
                    if (kanji === curKanji)
                        $("#keisei-explanation-quality").html(pmark_middle(curKanji));
                    char_list_lo.unshift(li_template);
                }
            }

            li_template.badge = badge.join(" ");
        }

        // Order: Phonetic//WK Radical?//Base Kanji?//Perfect PComp//High//Middle/Low
        // curKanji is mixed in, gets special badge
        char_list.push({kanji: curPhon, badge: "", meaning: "Phonetic",
            href:"", kanji_id: "phonetic-1"});

        if (kdb.checkRadical(curPhon))
            char_list.push({kanji: curPhon, badge: "", meaning: kdb.getWKRadicalPP(curPhon),
                href:"/radicals/"+kdb.getWKRadical(curPhon), kanji_id: "radical-1"});

        if (kdb.checkKanji(curPhon))
            char_list.push({kanji: curPhon, badge: "", meaning: wkdb.getKMeaning(curPhon)[0],
                href:"/kanji/"+curPhon, kanji_id: "kanji-1"});

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
            char_list.push({kanji: phon, meaning: "Non-Phonetic", badge: "", href:"", kanji_id: "nonphonetic-1"});

            for (i = 0; i < kdb.getPNonCompounds(phon).length; i++)
            {
                var curKanji = kdb.getPNonCompounds(phon)[i];
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
            <style type="text/css">
                .badge-perfect:before {
                    content: "天"; background-color: #092;
                }
                .badge-high:before {
                    content: "上"; background-color: #092;
                }
                .badge-middle:before {
                    content: "中"; background-color: #f04;
                }
                .badge-low:before {
                    content: "下"; background-color: #f04;
                }
                .badge-current:before {
                    background-color: #0695df !important;
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

                /* #f0a -> 0c4
                 * #dd0093 -> 092
                 */
                ul.single-character-grid li[id|=phonetic],
                ul.single-character-grid tr[id|=phonetic]
                {
                    background-color:#0a2;
                    background-image:-moz-linear-gradient(top, #0c4, #092);
                    background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#0c4), to(#092));
                    background-image:-webkit-linear-gradient(top, #0c4, #092);
                    background-image:-o-linear-gradient(top, #0c4, #092);
                    background-image:linear-gradient(to bottom, #0c4, #092);
                    background-repeat:repeat-x;
                    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF00CC44', endColorstr='#FF009922', GradientType=0);
                    border-top:1px solid #0c4;
                    border-bottom:1px solid #092;
                    border-left:1px solid #0c4
                }

                ul.single-character-grid li[id|=nonphonetic],
                ul.single-character-grid tr[id|=nonphonetic]
                {
                    background-color:#f04;
                    background-image:-moz-linear-gradient(top, #f04, #c04);
                    background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#f04), to(#c04));
                    background-image:-webkit-linear-gradient(top, #f04, #c04);
                    background-image:-o-linear-gradient(top, #f04, #c04);
                    background-image:linear-gradient(to bottom, #f04, #c04);
                    background-repeat:repeat-x;
                    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFF0044', endColorstr='#FFCC0044', GradientType=0);
                    border-top:1px solid #f04;
                    border-bottom:1px solid #c04;
                    border-left:1px solid #f04
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

        wkdb = new WKKanjiDB();
        wkdb.init();

        wki = new WKInteraction();
        wki.init(injectKeiseiSection);
    }
    // #########################################################################

    run();
})(window.wk_keisei);
