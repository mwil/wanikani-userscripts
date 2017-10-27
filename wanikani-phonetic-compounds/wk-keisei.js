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
// @require     http://localhost:8088/static/wk-phon-db-niko.js
// @require     http://localhost:8088/static/wk-interaction.js
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
    function createInfoElem()
    {
        var $elem = $("<section></section>")
                    .attr("id", "KEISEI-section");
        var $ound = $('<h2>Phonetic-Semantic Composition</h2>');
        var $grid = $("<ul></ul>")
                    .attr("id", "KEISEI-phonetic-grid")
                    .addClass("single-character-grid")
                    .addClass("multi-character-grid-extra-styling-767px");
        var $expl = $("<aside></aside>")
                    .attr("id", "KEISEI-explanation")
                    .addClass("additional-info")
                    .append('<h3><i class="icon-info-sign"></i> Phonetic-Semantic Composition</h3>');

        $elem.append($ound);
        $elem.append($grid);
        $elem.append("<p></p>");
        $elem.append($expl);

        return $elem;
    }
    // #########################################################################

    // #########################################################################
    // Template strings with es6 features
    // https://stackoverflow.com/a/39065147/2699475
    const ktype_unknown_msg = (curKanji, dbKanji) =>
       `<p>The kanji ${curKanji} has an unknown origin or is not yet listed in the database, stay tuned!</p>`;
    const ktype_phonetic_msg = (curKanji, dbKanji, curPhon, dbPhon) =>
       `<p>The kanji ${curKanji} was created using semantic-phonetic composition.
        The phonetic component is ${curPhon}.
        More text ...</p>`;
    const ktype_other_msg = (curKanji, dbKanji) =>
       `<p>The kanji ${curKanji} is not considered a semantic-phonetic composition.
        It may still contain a component that is used phonetically in other kanji,
        this information will be added in a future userscript version.</p>`;
    const error_msg = (curKanji, msg) =>
       `<p>An error occured while processing kanji '${curKanji}'! Message was: '${msg}'</p>`;
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
    function injectInfoElem()
    {
        switch(wki.curPage)
        {
            case wki.PageEnum.kanji:
                $("section#note-reading").before(createInfoElem());

                break;
            case wki.PageEnum.reviews:
                break;
            case wki.PageEnum.lessons:
                break;
            default:
                console.log("WKPSC: Unknown page type, cannot inject info!");
        }
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

    // #########################################################################
    function populateInfoElem()
    {
        var curKanji = wki.getKanji();

        if (!kanji_db || !(curKanji in kanji_db))
        {
            $("#KEISEI-compound-info").append(
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
                $("#KEISEI-compound-info").append(
                    error_msg(
                        curKanji,
                        "The phonetic element of this kanji was not in the database (or even no db)!"
                ));
                return;
            }

            var dbCurPhon = phonetic_db[curPhon];

            $("#KEISEI-explanation").append(ktype_phonetic_msg(curKanji, dbCurKanji, curPhon, dbCurPhon));

            var phon_list = [];

            for (var i = 0; i < dbCurPhon.compounds.length; i++)
            {
                var kanji = dbCurPhon.compounds[i];
                console.log("phoncompounds are", dbCurPhon);

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
            $('#KEISEI-phonetic-grid').html(phon_list.map(li_phon_char).join(''));
        }
        else if (dbCurKanji.type !== "no_clue")
            $("#KEISEI-explanation").append(ktype_other_msg(curKanji, dbCurKanji));
        else
            $("#KEISEI-explanation").append(ktype_unknown_msg(curKanji, dbCurKanji));
    }
    // #########################################################################

    // #########################################################################
    function run()
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
            </style>
        `));
        wki = new WKInteraction();
        wki.init();

        injectInfoElem();
        populateInfoElem();
    }
    // #########################################################################

    run();
})(window.wk_keisei);
