// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     1.3.0
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
// @resource    kanji_db     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/kanji_esc.json
// @resource    phonetic_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/phonetic_esc.json
// @resource    wk_kanji_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/wk_kanji_esc.json
//
// @resource    keisei_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/5ec4d82173f9e4b5b11b6f70d7417af67b4d4cac/wanikani-phonetic-compounds/css/keisei.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/59e90d85a5a10f4ff2563b15058474a6adde867e/styles/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/80568c99d09eb37ac932b4eb82304264b477329b/styles/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/80568c99d09eb37ac932b4eb82304264b477329b/styles/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/aaf6bf291dbbffe1507017eacf05de6059295109/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8b96db1d7f72a0a3f7c859f369dd1494c2945684/wanikani-phonetic-compounds/wk_keisei.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bb0e2a9665788a814fd9d350c9fcd9e8dfc8b499/wanikani-phonetic-compounds/wk_keisei.strings.en.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8b96db1d7f72a0a3f7c859f369dd1494c2945684/wanikani-phonetic-compounds/wk_keisei.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8b96db1d7f72a0a3f7c859f369dd1494c2945684/wanikani-phonetic-compounds/wk_keisei.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8b96db1d7f72a0a3f7c859f369dd1494c2945684/wanikani-phonetic-compounds/wk_keisei.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
