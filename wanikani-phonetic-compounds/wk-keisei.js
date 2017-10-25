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
            <table id="KEISEI-curKanji-table" style="line-height:2;" align="center" width="200px"></table>
            <span style="display: block; text-align: center; cursor: pointer;">
                Show other compounds <i class="icon-chevron-down"></i>
            </span>
            <table id="KEISEI-phonetic-table" style="line-height:2;" align="center" width="200px"></table>
        </p>
    `;
    const PHON_TABLE = ({kanji, dbKanji}) => `
        <tr>
            <td><span class="kanji-highlight" lang="ja" style="padding: 6px"> ${kanji} </span></td>
            <td>${dbKanji.readings}</td>
        </tr>
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

        var dbKanji = kanji_db[curKanji];


        if (dbKanji.type === "comp_phonetic")
        {
            var curPhon = dbKanji.phonetic;

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

            $("#KEISEI-compound-info").append(KTYPE_PCOMP(curKanji, dbKanji, curPhon, dbPhon));
            $("#KEISEI-component-info").append(PHON_INFO(curPhon, dbPhon));

            var phon_list = [];

            for (var i = 0; i < dbPhon.compounds.length; i++)
            {
                var kanji = dbPhon.compounds[i];

                if (kanji != curKanji)
                    phon_list.push({kanji: kanji, dbKanji: kanji_db[kanji]});
            }

            $('#KEISEI-curKanji-table').html([{kanji: curKanji, dbKanji: dbKanji}].map(PHON_TABLE).join(''));
            $('#KEISEI-phonetic-table').html(phon_list.map(PHON_TABLE).join(''));
        }
        else if (dbKanji.type === "no_clue")
        {
            $("#KEISEI-compound-info").append(KTYPE_OTHER(curKanji, dbKanji));
        }
        else
        {
            $("#KEISEI-compound-info").append(KTYPE_UNKNOWN(curKanji, dbKanji));
        }
    }

    function run()
    {
        wki = new WKInteraction();
        wki.init();

        injectInfoElem();
        populateInfoElem();
    }

    run();
})(window.wk_keisei);
