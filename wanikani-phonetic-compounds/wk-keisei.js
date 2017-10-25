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

    /*
    // https://stackoverflow.com/a/39065147/2699475
    const Item = ({ url, img, title }) => `
        <a href="${url}" class="list-group-item">
            <div class="image">
            <img src="${img}" />
            </div>
            <p class="list-group-item-text">${title}</p>
        </a>
    `;

    $('.list-items').html([
        { url: '/foo', img: 'foo.png', title: 'Foo item' },
        { url: '/bar', img: 'bar.png', title: 'Bar item' },
    ].map(Item).join(''));
    */

    function createInfoElem()
    {
        var $elem = $("<aside></aside>")
                    .attr("id", "KEISEI-phonetic-info")
                    .addClass("additional-info");

        var $ound = $("<p></p>")
                    .attr("id", "KEISEI-compound-info")
                    .append('<h3><i class="icon-info-sign"></i> Phonetic-Semantic Composition</h3>');
        var $nent = $("<p></p>")
                    .attr("id", "KEISEI-component-info");

        $elem.append($ound);
        $elem.append($nent);

        return $elem;
    }

    const KTYPE_UNKNOWN = (curKanji, dbKanji) => `
        <p>The kanji ${curKanji} has an unknown origin or is not yet listed in the database, stay tuned!</p>
    `;
    const KTYPE_PCOMP = (curKanji, dbKanji, curPhon, dbPhon) => `
        <p>The kanji ${curKanji} was created using semantic-phonetic composition.
        The phonetic component is ${curPhon}.</p>
    `;
    const KTYPE_OTHER = (curKanji, dbKanji) => `
        <p>The kanji ${curKanji} is not considered a semantic-phonetic composition.</p>
    `;
    const KTYPE_ERROR = (curKanji, msg) => `
        <p>An error occured while processing kanji '${curKanji}'! Message was: '${msg}'</p>
    `;

    const PHON_INFO = (curPhon, dbPhon) => `
        <span>
            <span class="radical-icon" lang="ja">
                <span class="japanese-font-styling-correction" style="display: margin-top: 0.1em;">${curPhon}</span>
            </span>
            <table style="display: inline-table;">
                <tr><td><b>Readings</b>: ${dbPhon.readings}</td></tr>
                <tr><td></td></tr>
            </table>
        </span>
        <p>
            <span style="display: block; text-align: center; cursor: pointer;">
                Hide compounds <i class="icon-chevron-up"></i>
            </span>
            <ul id="KEISEI-phonetic-grid" class="single-character-grid multi-character-grid-extra-styling-767px"></ul>
        </p>
    `;
    const PHON_CITEM = ({kanji, dbKanji, badge}) => `
        <li id="kanji-123" class="character-item">
            <span lang="ja" class="item-badge recently-unlocked-badge ${badge}">G</span>
            <a href="">
                <span class="character" lang="ja">${kanji}</span>
                <ul>
                    <li>${dbKanji.readings[0]}</li>
                    <li>Meaning</li>
                </ul>
            </a>
        </li>
    `;

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

    function populateInfoElem()
    {
        var curKanji = wki.getKanji();

        if (!kanji_db || !(curKanji in kanji_db))
        {
            $("#KEISEI-compound-info").append(
                KTYPE_ERROR(
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
                    KTYPE_ERROR(
                        curKanji,
                        "The phonetic element of this kanji was not in the database (or even no db)!"
                ));
                return;
            }

            var dbPhon = phonetic_db[curPhon];

            $("#KEISEI-compound-info").append(KTYPE_PCOMP(curKanji, dbCurKanji, curPhon, dbPhon));
            $("#KEISEI-component-info").append(PHON_INFO(curPhon, dbPhon));

            var phon_list = [];

            for (var i = 0; i < dbPhon.compounds.length; i++)
            {
                var kanji = dbPhon.compounds[i];
                var dbKanji = kanji_db[kanji];


                var badge = "badge-low";
                var common_readings = dbKanji.readings.filter((n) => dbPhon.readings.includes(n));
                console.log("Common readings of", kanji, "are", common_readings);

                if (dbKanji.readings.length === common_readings.length)
                {
                    badge = "badge-perfect";
                }
                else if (common_readings.length === 0)
                {
                    badge = "badge-low";
                }
                else
                {
                    if (dbPhon.readings.indexOf(dbKanji.readings[0]) != -1)
                        badge = "badge-high";
                    else
                        badge = "badge-middle";
                }

                if (kanji != curKanji)
                    phon_list.push({kanji: kanji, dbKanji: dbKanji, badge: badge});
                else
                    phon_list.unshift({kanji: kanji, dbKanji: dbKanji, badge: badge});
            }

            $('#KEISEI-phonetic-grid').html(phon_list.map(PHON_CITEM).join(''));
        }
        else if (dbCurKanji.type === "no_clue")
        {
            $("#KEISEI-compound-info").append(KTYPE_OTHER(curKanji, dbCurKanji));
        }
        else
        {
            $("#KEISEI-compound-info").append(KTYPE_UNKNOWN(curKanji, dbCurKanji));
        }
    }

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
                    content: "中"; background-color: #0695df;
                }
                .badge-low:before {
                    content: "下"; background-color: #480130;
                }
            </style>
        `));
        wki = new WKInteraction();
        wki.init();

        injectInfoElem();
        populateInfoElem();
    }

    run();
})(window.wk_keisei);
