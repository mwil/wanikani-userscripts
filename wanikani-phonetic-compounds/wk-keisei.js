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

    var wki = null;

    // #########################################################################
    function createKeiseiSection()
    {
        var $section = $("<section></section>")
                       .attr("id", "keisei-section");

        var $grid = $("<ul></ul>")
                    .attr("id", "keisei-phonetic-grid")
                    .addClass("single-character-grid");

        // var $expl = $("<aside></aside>")
                    // .attr("id", "keisei-explanation")
                    // .addClass("additional-info")
                    // .append('<h3><i class="icon-info-sign"></i> Phonetic-Semantic Composition</h3>');

        $section.append('<h2>Phonetic-Semantic Composition</h2>');
        $section.append($('<p></p>').attr("id", "keisei-explanation"));
        $section.append($grid);
        // $section.append($expl);

        return $section;
    }
    // #########################################################################

    // #########################################################################
    // Template strings with es6 features
    // https://stackoverflow.com/a/39065147/2699475
    const explanation_unknown = (curKanji, dbKanji) =>
       `The kanji ${curKanji} has an unknown origin or is not yet listed in the database, stay tuned!`;

    const explanation_phonetic = (curKanji, dbKanji, curPhon, dbPhon) =>
       `The kanji ${curKanji} was created using semantic-phonetic composition.
        The phonetic component is ${curPhon}.
        More text ...`;

    const explanation_other = (curKanji, dbKanji) =>
       `The kanji ${curKanji} is not considered a semantic-phonetic composition.
        It may still contain a component that is used phonetically in other kanji,
        this information will be added in a future userscript version.`;

    const error_msg = (curKanji, msg) =>
       `An error occured while processing kanji '${curKanji}'! Message was: '${msg}'`;
    // #########################################################################

    const li_phon_char = ({kanji, dbKanji, badge, kanji_id}) =>
       `<li id="${kanji_id}" class="character-item">
            <span lang="ja" class="${badge}"></span>
            <a href="">
                <span class="character" lang="ja">${kanji}</span>
                <ul>
                    <li>${dbKanji.readings[0]}</li>
                    <li>Meaning</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################

    // #########################################################################
    function injectKeiseiSection()
    {
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

    // #########################################################################
    // https://stackoverflow.com/a/16227294/2699475
    function intersect(a, b) {
        return a.filter(function (e) {
            return b.indexOf(e) > -1;
        });
    }
    // #########################################################################

    function populateCharGrid()
    {
    }

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

    function createMoreInfoFold()
    {
        var $infofold = $('<div id="keisei-more-fold"></div>');

        var $button = $('<div id="keisei-more-button"><i class="icon-chevron-down"></i>Show More Information</div>');
        var $info = $('<div id="keisei-more-info"><p>Toller test etxt blibu</p></div>');

        $infofold.append($button);
        $infofold.append($info);

        $button.on("click", toggleMoreInfoFold);

        return $infofold;
    }

    // #########################################################################
    function populateKeiseiSection()
    {
        var curKanji = wki.getKanji();

        if (!kanji_db || !(curKanji in kanji_db))
        {
            $("#keisei-compound-info").append(
                error_msg(
                    curKanji,
                    "The requested kanji is not in the database (or even no db)!"
            ));
            return;
        }

        var dbCurKanji = kanji_db[curKanji];

        if (dbCurKanji.type === "comp_phonetic")
        {
            var curPhon = dbCurKanji.phonetic;

            if (!phonetic_db || !(curPhon in phonetic_db))
            {
                $("#keisei-compound-info").append(
                    error_msg(
                        curKanji,
                        "The phonetic element of this kanji was not in the database (or even no db)!"
                ));
                return;
            }

            var dbCurPhon = phonetic_db[curPhon];

            $("#keisei-explanation").append(explanation_phonetic(curKanji, dbCurKanji, curPhon, dbCurPhon));

            var phon_list = [];

            for (var i = 0; i < dbCurPhon.compounds.length; i++)
            {
                var kanji = dbCurPhon.compounds[i];

                if (!(kanji in kanji_db))
                {
                    console.log("KEISEI: The following kanji was not in the database:", kanji);
                    continue;
                }

                var dbKanji = kanji_db[kanji];
                var badge = "item-badge recently-unlocked-badge badge-low";
                var common_readings = intersect(dbKanji.readings, dbCurPhon.readings);

                if (dbKanji.readings.length === common_readings.length)
                    badge = "item-badge recently-unlocked-badge badge-perfect";
                else if (common_readings.length === 0)
                    badge = "item-badge recently-unlocked-badge badge-low";
                else
                {
                    if (dbCurPhon.readings.indexOf(dbKanji.readings[0]) != -1)
                        badge = "item-badge recently-unlocked-badge badge-high";
                    else
                        badge = "item-badge recently-unlocked-badge badge-middle";
                }

                if (kanji != curKanji)
                    phon_list.push({kanji: kanji, dbKanji: dbKanji, badge: badge, kanji_id: "kanji-"+i});
                else
                    phon_list.unshift({kanji: kanji, dbKanji: dbKanji, badge: badge, kanji_id: "kanji-"+i});
            }

            phon_list.unshift({kanji: curPhon, dbKanji: dbCurPhon, badge: "", kanji_id: "radical-1"});
            $('#keisei-phonetic-grid').html(phon_list.map(li_phon_char).join(''));
        }
        else if (dbCurKanji.type !== "no_clue")
            $("#keisei-explanation").append(explanation_other(curKanji, dbCurKanji));
        else
            $("#keisei-explanation").append(explanation_unknown(curKanji, dbCurKanji));

        $("#keisei-section").append(createMoreInfoFold());
    }
    // #########################################################################

    // #########################################################################
    function injectStyles()
    {
        $('html > head').append($(`
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


    // #########################################################################
    function run()
    {
        injectStyles();

        wki = new WKInteraction();
        wki.init(injectKeiseiSection);
    }
    // #########################################################################

    run();
})(window.wk_keisei);
