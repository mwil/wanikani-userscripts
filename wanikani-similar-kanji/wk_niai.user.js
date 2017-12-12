// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     0.9.7
// @author      acm
// @description Adds a visually similar kanji section to content pages, reviews, and lessons
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_niai
//
// @include     *://www.wanikani.com/kanji/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
//
// @resource    from_keisei   https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/from_keisei_esc.json
// @resource    stroke_dist   https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/stroke_edit_dist_esc.json
// @resource    yl_radical    https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/yl_radical_esc.json
// @resource    old_script    https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/old_script_esc.json
// @resource    manual        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/manual_esc.json
// @resource    lookup        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/lookup_esc.json
//
// @resource    niai_style    https://raw.githubusercontent.com/mwil/wanikani-userscripts/e61adae7ce316be8917b19309123956abf1f990b/wanikani-similar-kanji/css/wk_niai.css
//
// @resource    chargrid      https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/css/chargrid.css
// @resource    bootstrapcss  https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/css/bootstrap.crop.css
//
// @resource    bootstrap-js  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8d4694c53273fbac4e6b888f4ab95a3fa16d31c5/styles/bootstrap/js/bootstrap.js
// @resource    b-dropdown-js https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/js/bootstrap-dropdown.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3adc5e03fb71be39b33ded2faf6847fd9a4bbcb8/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/b15c3cbdb1d0c31c4c38348b7c10a98a894a9e05/wanikani-similar-kanji/wk_niai.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/e61adae7ce316be8917b19309123956abf1f990b/wanikani-similar-kanji/wk_niai.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/0cf87edf331081a7067f7089c981430fc5f34269/wanikani-similar-kanji/wk_niai.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3a3f24de330e771266d2f0680faa6625bb3a0985/wanikani-similar-kanji/wk_niai.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
