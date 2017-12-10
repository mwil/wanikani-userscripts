// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     0.0.1
// @author      acm
// @namespace   wk_niai

// @include     *://www.wanikani.com/kanji/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*

// @resource    from_keisei   http://localhost:8088/static/from_keisei.json
// @resource    stroke_dist   http://localhost:8088/static/stroke_edit_dist.json
// @resource    yl_radical    http://localhost:8088/static/yl_radical.json
// @resource    old_script    http://localhost:8088/static/old_script.json
// @resource    manual        http://localhost:8088/static/manual.json
// @resource    lookup        http://localhost:8088/static/lookup.json

// @resource    niai_style    http://localhost:8088/static/wk_niai.css
// @resource    chargrid      http://localhost:8088/static/chargrid.css
// @resource    bootstrapcss  http://localhost:8088/static/bootstrap.crop.css

// @resource    bootstrapjs   http://localhost:8088/static/bootstrap.js

// @require     http://localhost:8088/static/wk_interaction.js

// @require     http://localhost:8088/static/wk_niai.db.js
// @require     http://localhost:8088/static/wk_niai.modal.js
// @require     http://localhost:8088/static/wk_niai.html.js
// @require     http://localhost:8088/static/wk_niai.main.js

// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText

// @run-at      document-end
// ==/UserScript==
