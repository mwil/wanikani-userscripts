// ==UserScript==
// @name        WaniKani Doushi Related Verbs
// @version     0.6.0
// @author      acm
// @description Adds a related verbs section to WaniKani
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_doushi
//
// @include     *://www.wanikani.com/vocabulary/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-verbs/wk_doushi.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-verbs/wk_doushi.user.js
//
// @resource    doushi_db    https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/db/doushi.json
// @resource    wk_verbs_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/db/wk_verbs.json
//
// @resource    doushi_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/css/doushi.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/wk_doushi.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/wk_doushi.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/wk_doushi.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-verbs/wk_doushi.main.js
//
// @grant       GM_log
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
