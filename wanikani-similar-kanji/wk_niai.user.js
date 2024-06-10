// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     1.3.49
// @author      acm
// @description Adds a visually similar kanji section to content pages, reviews, and lessons
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_niai
//
// @match       https://www.wanikani.com/*
// @match       https://preview.wanikani.com/*
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
// @resource    niai_style     https://raw.githubusercontent.com/mwil/wanikani-userscripts/7e1d846282c6d962fbe28b6e3a8c0b50a61220c9/wanikani-similar-kanji/css/wk_niai.css
//
// @resource    chargrid       https://raw.githubusercontent.com/mwil/wanikani-userscripts/0e0833ee8175b903d34108210759c1a457408833/styles/css/chargrid.css
// @resource    bootstrapcss   https://raw.githubusercontent.com/mwil/wanikani-userscripts/45e295823c7d6d40630ddd14c95a78df093fb296/styles/bootstrap/css/bootstrap.crop.css
//
// @resource    bootstrap-js   https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap.js
// @resource    b-dropdown-js  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap-dropdown.js
//
// @require     https://greasyfork.org/scripts/430565-wanikani-item-info-injector/code/WaniKani%20Item%20Info%20Injector.user.js?version=1380162
// @require     https://greasyfork.org/scripts/489759-wk-custom-icons/code/CustomIcons.js?version=1386034
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/e57d0de325d2c020da8723df1bac4c0035dc88db/wanikani-similar-kanji/wk_niai.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/f6bcb499b97b78b9d0f97542620f3beac50e06a6/wanikani-similar-kanji/wk_niai.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/f6bcb499b97b78b9d0f97542620f3beac50e06a6/wanikani-similar-kanji/wk_niai.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/f6bcb499b97b78b9d0f97542620f3beac50e06a6/wanikani-similar-kanji/wk_niai.main.js
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
