// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     1.8.40
// @author      acm
// @description Adds information to Wanikani about kanji that use Phonetic-Semantic Composition.
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_keisei
//
// @match       https://www.wanikani.com/*
// @match       https://preview.wanikani.com/*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
//
// @resource    kanji_db     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-phonetic-compounds/db/kanji_esc.json
// @resource    phonetic_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-phonetic-compounds/db/phonetic_esc.json
// @resource    wk_kanji_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-phonetic-compounds/db/wk_kanji_esc.json
//
// @resource    keisei_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/c45eb62588535d072daf5f572f47d6b8a217b66c/wanikani-phonetic-compounds/css/keisei.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/03a8f7e7e5b6cd9e9430c83909110a72724eb63f/styles/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/30e35798e7e61374017b211c3647600302df73dd/styles/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap.js
//
// @require     https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js
//
// @require     https://greasyfork.org/scripts/430565-wanikani-item-info-injector/code/WaniKani%20Item%20Info%20Injector.user.js?version=1380162
// @require     https://greasyfork.org/scripts/489759-wk-custom-icons/code/CustomIcons.js?version=1386034
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-phonetic-compounds/wk_keisei.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-phonetic-compounds/wk_keisei.strings.en.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/ee3454f1d7f1368f95abc7192c66d20fb39387f0/wanikani-phonetic-compounds/wk_keisei.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/ee3454f1d7f1368f95abc7192c66d20fb39387f0/wanikani-phonetic-compounds/wk_keisei.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/ee3454f1d7f1368f95abc7192c66d20fb39387f0/wanikani-phonetic-compounds/wk_keisei.nav.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/ee3454f1d7f1368f95abc7192c66d20fb39387f0/wanikani-phonetic-compounds/wk_keisei.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
