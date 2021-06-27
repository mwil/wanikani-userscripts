// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     1.8.7
// @author      acm
// @description Adds information to Wanikani about kanji that use Phonetic-Semantic Composition.
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_keisei
//
// @include     *://www.wanikani.com/*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
//
// @resource    kanji_db     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/kanji_esc.json
// @resource    phonetic_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/phonetic_esc.json
// @resource    wk_kanji_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/wk_kanji_esc.json
//
// @resource    keisei_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/58d6c99b618aa0a84783d67ba67ed55f538e006f/wanikani-phonetic-compounds/css/keisei.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/styles/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8d4694c53273fbac4e6b888f4ab95a3fa16d31c5/styles/bootstrap/js/bootstrap.js
//
// @require     https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/dcb8b40135dd68fdde8764be4e50ace03ad80506/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/2f590d5316a8a9aa34326fe98c5beab332179546/wanikani-phonetic-compounds/wk_keisei.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/b2f5455a15c9e808df7214896b05e29915e807c0/wanikani-phonetic-compounds/wk_keisei.strings.en.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/337620114c75a9ed6aa2bdfb9ec8397b75048a01/wanikani-phonetic-compounds/wk_keisei.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/0903f5c2a92705f8abb8a68a9a60d5d413854b2b/wanikani-phonetic-compounds/wk_keisei.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/51438d133a194c16deb81518b1f7f89c1f6abf6d/wanikani-phonetic-compounds/wk_keisei.nav.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/c6ff1ff9898673bef50a94e8d7428bec9ee217bc/wanikani-phonetic-compounds/wk_keisei.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
