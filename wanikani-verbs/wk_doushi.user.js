// ==UserScript==
// @name        WaniKani Doushi Related Verbs
// @version     0.0.1
// @author      acm
// @description Adds a related verbs section to WaniKani
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_doushi
//
// @include     *://www.wanikani.com/vocabulary/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-phonetic-compounds/wk_keisei.user.js
//
// @resource    kanji        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/db/kanji_esc.json
//
// @resource    doushi_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/5ec4d82173f9e4b5b11b6f70d7417af67b4d4cac/wanikani-phonetic-compounds/css/doushi.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/4fc05739f26921ab52da421f5f37b78bd10ca644/wanikani-phonetic-compounds/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/5ec4d82173f9e4b5b11b6f70d7417af67b4d4cac/wanikani-phonetic-compounds/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/ea922c774c72c5d308be0a71a5100b9f9988f082/wanikani-phonetic-compounds/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/5871e18612736335f501dd4590510945241511e2/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/wk_doushi.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/wk_doushi.main.js
//
// @grant       GM_log
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
