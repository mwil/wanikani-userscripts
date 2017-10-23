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


    function run()
    {
        var wki = new WKInteraction();
        wki.init();

        console.log(`The kanji in this page is ${wki.getKanji()}`);
    }

    run();
})(window.wk_keisei);
