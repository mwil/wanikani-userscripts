// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     1.4.0
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
// @resource    from_keisei_db https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/from_keisei_esc.json
// @resource    stroke_dist_db https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/stroke_edit_dist_esc.json
// @resource    yl_radical_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/yl_radical_esc.json
// @resource    old_script_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/old_script_esc.json
// @resource    noto_db        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/wk_niai_noto_esc.json
// @resource    manual_db      https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/manual_esc.json
// @resource    lookup_db      https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/lookup_esc.json
//
// @resource    niai_style     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/css/wk_niai.css
//
// @resource    chargrid       https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/css/chargrid.css
// @resource    bootstrapcss   https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/css/bootstrap.crop.css
//
// @resource    bootstrap-js   https://raw.githubusercontent.com/mwil/wanikani-userscripts/8d4694c53273fbac4e6b888f4ab95a3fa16d31c5/styles/bootstrap/js/bootstrap.js
// @resource    b-dropdown-js  https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/js/bootstrap-dropdown.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3c6ea0466951a1e58b75b2cb7a945ed7716082f7/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3557aa7900d86e54bdb4ab29eda34feb46ac64b1/wanikani-similar-kanji/wk_niai.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/b83d74d286584b0319ee2bbe455e2e13f6a9afce/wanikani-similar-kanji/wk_niai.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3557aa7900d86e54bdb4ab29eda34feb46ac64b1/wanikani-similar-kanji/wk_niai.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3557aa7900d86e54bdb4ab29eda34feb46ac64b1/wanikani-similar-kanji/wk_niai.main.js
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

/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_Niai()
{
    this.settings = {
        "debug": false,
        "minify": false,
        "edit_mode": false,
        "use_alt": false,
        "alt_sources": [
            {"id": "old_script_db",  "base_score": 0.4},
            {"id": "yl_radical_db",  "base_score": -0.2},
            {"id": "stroke_dist_db", "base_score": -0.2}
        ],
        "sources": [
            {"id": "noto_db",        "base_score": 0.1},
            {"id": "keisei_db",      "base_score": 0.65},
            {"id": "manual_db",      "base_score": 0.9},
            {"id": "override_db",    "base_score": 0.0}
        ],
        "user_level": 99,
        "min_score": 0.4
    };
}
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    WK_Niai.prototype.injectNiaiSection = function(event, curPage)
    {
        // #####################################################################
        $(`#niai_section`).remove();

        const subject = this.wki.getSubject();

        this.log(`Injecting similar kanji section (callback works).`);

        if (!this.wki.checkSubject(subject, [`kan`]))
            return;

        switch(curPage)
        {
            case this.wki.PageEnum.kanji:
                // Remove the old section
                $(`section:contains('Visually Similar Kanji')`).remove();

                $(`section:contains('Found In Vocabulary')`)
                    .before(this.createNiaiSection());
                break;
            case this.wki.PageEnum.reviews:
            case this.wki.PageEnum.lessons_reviews:
                $(`div#item-info-col2`)
                    .append(this.createNiaiSection());

                if ($(`div#item-info-col2`).is(`:hidden`))
                    $(`#niai_section`).hide();

                break;
            case this.wki.PageEnum.lessons:
                // WK uses an very strong CSS selector for the lesson pages,
                // need to move the div somewhere else ... this might possibly
                // break other stuff!
                if (!$(`#real_skrv`).length)
                    $(`div#supplement-kan-related-vocabulary`)
                        .removeAttr("style")
                        .wrap(`<div id="real_skrv"></div>`);

                $(`div#real_skrv`)
                    .append(this.createNiaiSection(`margin-bottom: 1em;`)
                             .wrap(`<div class="pure-u-1 col1></div>`)
                             .wrap(`<div class="pure-g-r"></div>`));

                break;
            default:
                GM_log(`Unknown page type ${curPage}, cannot inject info!`);
                return;
        }

        this.populateNiaiSection(subject.kan);

        if (this.settings.minify)
        {
            $(`#niai_main_fold`).hide();
            $(`#niai_grid_visibility i`).attr(`class`, `icon-eye-close`);
        }

        if (!this.settings.edit_mode)
        {
            $(`.delete-badge`).hide();
            $(`#niai_badges_btn i`).attr(`class`, `icon-circle-blank`);
        }

        // #####################################################################
        $(`#niai_grid_visibility`).on(`click`, this.toggleMainFold.bind(this));
        $(`#niai_badges_btn`).on(`click`, this.toggleBadges.bind(this));
        $(`#niai_reset_similar_btn`).on(`click`, this.resetSimilarKanji.bind(this));
        $(`#add_kanji_btn`).on(`click`, this.addSimilarKanji.bind(this));
        // #####################################################################
        $(`#niai_add_similar_input`).on(`input`, this.onSimilarInput.bind(this));

        // Prevent the enter key from replacing the content with nothing
        $(`#niai_add_similar_input`).on(`keydown`, function(event) {
            if (event.keyCode === 10 || event.keyCode === 13) {
                event.preventDefault();
                return false;
            }

            return true;
        });

        // Keep dropdown open when acting inside
        $(document).on(`click`, `#add_kanji_dropdown .dropdown-menu`,
           (e) => e.stopPropagation());
    };
    // #########################################################################

    const len_limiter = function(str_array)
    {
        let result = [];

        str_array.forEach(
            function(str) {
                if (str.length > 15)
                    result.push(str.slice(0, 12) + `...`);
                else
                    result.push(str);
            }
        );

        return result;
    };

    // #########################################################################
    WK_Niai.prototype.populateNiaiSection = function(kanji)
    {
        $(`#niai_similar_grid`).empty();

        let use_sources = this.settings.sources;

        if (this.settings.use_alt)
            use_sources = [...this.settings.alt_sources, ...use_sources];

        const similar_list = [kanji,
                              ...this.ndb.getSimilar(kanji,
                                                     this.settings.user_level,
                                                     use_sources,
                                                     this.settings.min_score)];
        let char_list = [];

        similar_list.forEach(
            function(sim_kanji, i)
            {
                if (!this.ndb.isKanjiInDB(sim_kanji))
                    return;

                const sim_info = this.ndb.getInfo(sim_kanji);

                const li_template = {
                    "kanji":     sim_kanji,
                    "readings":  sim_info.readings,
                    "meanings":  len_limiter(sim_info.meanings),
                    "wk_level":  sim_info.level,
                    "is_locked": this.ndb.isKanjiLocked(
                                    sim_kanji, this.settings.user_level) ?
                                        `locked` :
                                        ``,
                    "notInWK":   this.ndb.isKanjiInWK(sim_kanji) ?  `` : `notInWK`,
                    "badge":     kanji === sim_kanji ? `` : `delete-badge`,
                    "href":      this.ndb.isKanjiInWK(sim_kanji) ?
                                    `/kanji/${sim_kanji}` :
                                    `https://jisho.org/search/${sim_kanji}%20%23kanji`,
                    "kanji_id":  kanji === sim_kanji ?
                                        `selfkanji-${sim_kanji}` :
                                        `kanji-${sim_kanji}`
                };

                char_list.push(li_template);
            },
            this
        );

        $(`#niai_similar_grid`).html(char_list.map(this.gen_item_chargrid).join(``));

        if (false && unsafeWindow.wkof)
            this.wkof_fix_info(similar_list);

        if (!$(`#niai_badges_btn i`).hasClass(`icon-remove-circle`))
        {
            $(`.delete-badge`).hide();
            $(`#niai_badges_btn i`).attr(`class`, `icon-circle-blank`);
        }

        if (kanji in this.override_db)
            $(`#niai_reset_similar_btn`).removeClass(`disabled`);
        else
            $(`#niai_reset_similar_btn`).addClass(`disabled`);

        if (this.wki.detectCurPage() === this.wki.PageEnum.reviews ||
            this.wki.detectCurPage() === this.wki.PageEnum.lessons)
            $(`.niai_similar_link`).attr(`target`, `_blank`);

        $(`li.notInWK a`).attr(`target`, `_blank`);
        // #####################################################################

        // #####################################################################
        $(`.${GM_info.script.namespace} .delete-badge`).on(
            `click`, this.removeSimilarKanji.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`niai_style`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        this.settings.debug      = GM_getValue(`debug`)      || false;
        this.settings.minify     = GM_getValue(`minify`)     || false;
        this.settings.edit_mode  = GM_getValue(`edit_mode`)  || false;
        this.settings.use_alt    = GM_getValue(`use_alt`)    || false;
        this.settings.user_level = GM_getValue(`user_level`) || 99;
        this.settings.min_score  = GM_getValue(`min_score`)  || 0.3;

        this.override_db = JSON.parse(GM_getValue(`override_db`) || `{}`);

        this.ndb = new NiaiDB();
        this.wki = new WKInteraction(GM_info.script.namespace);

        if ($(`li.dropdown.levels`).length)
        {
            this.settings.user_level = parseInt($(`li.levels a span`).text());
            GM_setValue(`user_level`, this.settings.user_level);
        }

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        this.ndb.init(this.override_db);
        this.wki.init();

        this.log(`The script element is:`, GM_info);
        this.log("The override db is", this.override_db);

        // #####################################################################
        // Main hook, WK Interaction will kick off this script once the page
        // is ready and we can access the subject of the page.
        $(document).on(`${GM_info.script.namespace}_wk_subject_ready`,
                       this.injectNiaiSection.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.run = function()
    {
        // Add scripts with guarding namespace (selecting class)
        GM_addStyle(GM_getResourceText(`bootstrapcss`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        GM_addStyle(GM_getResourceText(`chargrid`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        // #####################################################################
        // Add parts of bootstrap for the modal pages (settings, etc.)
        if ($.fn.modal === undefined)
            $(`<script></script>`)
                .attr(`type`, `text/javascript`)
                .text(GM_getResourceText(`bootstrap-js`))
                .appendTo(`head`);
        if ($.fn.dropdown === undefined)
            $(`<script></script>`)
                .attr(`type`, `text/javascript`)
                .text(GM_getResourceText(`b-dropdown-js`))
                .appendTo(`head`);
        // #####################################################################

        // Start page detection (and its callbacks once ready)
        this.wki.startInteraction.call(this.wki);
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
// #############################################################################
const wk_niai = new WK_Niai();

wk_niai.init();
wk_niai.run();
// #############################################################################
// #############################################################################
