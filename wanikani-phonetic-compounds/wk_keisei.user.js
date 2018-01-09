// ==UserScript==
// @name        WaniKani Keisei Phonetic-Semantic Composition
// @version     1.4.1
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
// @resource    keisei_style https://raw.githubusercontent.com/mwil/wanikani-userscripts/8857b73c75e0411a5119e6a1fec9dcab5cb90cd0/wanikani-phonetic-compounds/css/keisei.css
//
// @resource    chargrid     https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/css/chargrid.css
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8d4694c53273fbac4e6b888f4ab95a3fa16d31c5/styles/bootstrap/js/bootstrap.js
//
// @require     https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/aaf6bf291dbbffe1507017eacf05de6059295109/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/5f88c054c338ab42df02caeb6e4ec4822112b4a8/wanikani-phonetic-compounds/wk_keisei.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/bb0e2a9665788a814fd9d350c9fcd9e8dfc8b499/wanikani-phonetic-compounds/wk_keisei.strings.en.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/8b96db1d7f72a0a3f7c859f369dd1494c2945684/wanikani-phonetic-compounds/wk_keisei.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/b546ae6785b9ebf914e80ec1fbe21902c9fe916e/wanikani-phonetic-compounds/wk_keisei.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/b546ae6785b9ebf914e80ec1fbe21902c9fe916e/wanikani-phonetic-compounds/wk_keisei.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
