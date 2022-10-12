// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     1.3.18
// @author      acm
// @description Adds a visually similar kanji section to content pages, reviews, and lessons
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_niai
//
// @include     *://www.wanikani.com/kanji/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*
// @include     *://www.wanikani.com/extra_study/session*
// @include     *://preview.wanikani.com/kanji/*
// @include     *://preview.wanikani.com/review/session*
// @include     *://preview.wanikani.com/lesson/session*
// @include     *://preview.wanikani.com/extra_study/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
//
// @resource    from_keisei_db https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/from_keisei_esc.json
// @resource    stroke_dist_db https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/stroke_edit_dist_esc.json
// @resource    yl_radical_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/yl_radical_esc.json
// @resource    old_script_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/old_script_esc.json
// @resource    noto_db        https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/wk_niai_noto_esc.json
// @resource    manual_db      https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/manual_esc.json
// @resource    lookup_db      https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/lookup_esc.json
//
// @resource    niai_style     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/css/wk_niai.css
//
// @resource    chargrid       https://raw.githubusercontent.com/mwil/wanikani-userscripts/9e2c7070a8f277dcb372d2e04c60136cea14f81a/styles/css/chargrid.css
// @resource    bootstrapcss   https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/css/bootstrap.crop.css
//
// @resource    bootstrap-js   https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap.js
// @resource    b-dropdown-js  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap-dropdown.js
//
// @require     https://greasyfork.org/scripts/430565-wanikani-item-info-injector/code/WaniKani%20Item%20Info%20Injector.user.js?version=1103761
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/wk_niai.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/wk_niai.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/wk_niai.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/9e2c7070a8f277dcb372d2e04c60136cea14f81a/wanikani-similar-kanji/wk_niai.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       unsafeWindow
//
// @run-at      document-end
// ==/UserScript==
