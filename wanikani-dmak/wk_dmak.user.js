// ==UserScript==
// @name        Wanikani Draw Me A Kanji
// @version     0.8.0
// @author      acm
// @description Adds a stroke animation to WK
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_dmak
//
// @include     *://www.wanikani.com/*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-dmak/wk_dmak.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-dmak/wk_dmak.user.js
//
// @require     https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js
// @require     https://raw.githubusercontent.com/DmitryBaranovskiy/raphael/master/raphael.min.js
// @require     https://raw.githubusercontent.com/mbilbille/dmak/master/dist/dmak.min.js
//
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8d4694c53273fbac4e6b888f4ab95a3fa16d31c5/styles/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3c6ea0466951a1e58b75b2cb7a945ed7716082f7/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-dmak/wk_dmak.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-dmak/wk_dmak.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-dmak/wk_dmak.main.js
//
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
