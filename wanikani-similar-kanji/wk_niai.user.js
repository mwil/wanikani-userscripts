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
        $("#niai_section").remove();

        const subject = this.wki.getSubject();

        this.log("Injecting similar kanji section (callback works).");

        if (!this.wki.checkSubject(subject, ["kan"]))
            return;

        switch(curPage)
        {
            case this.wki.PageEnum.kanji:
                // Remove the old section
                $("section:contains('Visually Similar Kanji')").remove();

                $("section:contains('Found In Vocabulary')")
                    .before(this.createNiaiSection());
                break;
            case this.wki.PageEnum.reviews:
            case this.wki.PageEnum.lessons_reviews:
                $("div#item-info-col2")
                    .append(this.createNiaiSection());

                if ($("div#item-info-col2").is(":hidden"))
                    $("#niai_section").hide();

                break;
            case this.wki.PageEnum.lessons:
                // WK uses an very strong CSS selector for the lesson pages,
                // need to move the div somewhere else ... this might possibly
                // break other stuff!
                if (!$("#real_skrv").length)
                    $("div#supplement-kan-related-vocabulary")
                        .removeAttr("style")
                        .wrap('<div id="real_skrv"></div>');

                $("div#real_skrv")
                    .append(this.createNiaiSection("margin-bottom: 1em;")
                             .wrap('<div class="pure-u-1 col1></div>')
                             .wrap('<div class="pure-g-r"></div>'));

                break;
            default:
                GM_log(`Unknown page type ${curPage}, cannot inject info!`);
                return;
        }

        this.populateNiaiSection(subject.kan);

        if (this.settings.minify)
        {
            $("#niai_main_fold").hide();
            $("#niai_grid_visibility i").attr("class", "icon-eye-close");
        }

        if (!this.settings.edit_mode)
        {
            $(".delete-badge").hide();
            $("#niai_badges_btn i").attr("class", "icon-circle-blank");
        }

        // #####################################################################
        $("#niai_grid_visibility").on("click", this.toggleMainFold.bind(this));
        $("#niai_badges_btn").on("click", this.toggleBadges.bind(this));
        $("#niai_reset_similar_btn").on("click", this.resetSimilarKanji.bind(this));
        $("#add_kanji_btn").on("click", this.addSimilarKanji.bind(this));
        // #####################################################################
        $("#niai_add_similar_input").on("input", this.onSimilarInput.bind(this));

        // Prevent the enter key from replacing the content with nothing
        $("#niai_add_similar_input").on("keydown", function(event) {
            if (event.keyCode === 10 || event.keyCode === 13) {
                event.preventDefault();
                return false;
            }

            return true;
        });

        // Keep dropdown open when acting inside
        $(document).on("click", "#add_kanji_dropdown .dropdown-menu",
           (e) => e.stopPropagation());
    };
    // #########################################################################

    const len_limiter = function(str_array)
    {
        let result = [];

        str_array.forEach(
            function(str) {
                if (str.length > 15)
                    result.push(str.slice(0, 12) + "...");
                else
                    result.push(str);
            }
        );

        return result;
    };

    // #########################################################################
    WK_Niai.prototype.populateNiaiSection = function(kanji)
    {
        $("#niai_similar_grid").empty();

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
                                        "locked" :
                                        "",
                    "notInWK":   this.ndb.isKanjiInWK(sim_kanji) ?  "" : "notInWK",
                    "badge":     kanji === sim_kanji ? "" : "delete-badge",
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

        $("#niai_similar_grid").html(char_list.map(this.gen_item_chargrid).join(""));

        if (false && unsafeWindow.wkof)
            this.wkof_fix_info(similar_list);

        if (!$("#niai_badges_btn i").hasClass("icon-remove-circle"))
        {
            $(".delete-badge").hide();
            $("#niai_badges_btn i").attr("class", "icon-circle-blank");
        }

        if (kanji in this.override_db)
            $("#niai_reset_similar_btn").removeClass("disabled");
        else
            $("#niai_reset_similar_btn").addClass("disabled");

        if (this.wki.detectCurPage() === this.wki.PageEnum.reviews ||
            this.wki.detectCurPage() === this.wki.PageEnum.lessons)
            $(".niai_similar_link").attr("target", "_blank");

        $("li.notInWK a").attr("target", "_blank");
        // #####################################################################

        // #####################################################################
        $(`.${GM_info.script.namespace} .delete-badge`).on(
            "click", this.removeSimilarKanji.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText("niai_style")
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        this.settings.debug      = GM_getValue("debug")      || false;
        this.settings.minify     = GM_getValue("minify")     || false;
        this.settings.edit_mode  = GM_getValue("edit_mode")  || false;
        this.settings.use_alt    = GM_getValue("use_alt")    || false;
        this.settings.user_level = GM_getValue("user_level") || 99;
        this.settings.min_score  = GM_getValue("min_score")  || 0.3;

        this.override_db = JSON.parse(GM_getValue("override_db") || "{}");

        this.ndb = new NiaiDB();
        this.wki = new WKInteraction(GM_info.script.namespace);

        if ($("li.dropdown.levels").length)
        {
            this.settings.user_level = parseInt($("li.levels a span").text());
            GM_setValue("user_level", this.settings.user_level);
        }

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        this.ndb.init(this.override_db);
        this.wki.init();

        this.log("The script element is:", GM_info);
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
        GM_addStyle(GM_getResourceText("bootstrapcss")
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        GM_addStyle(GM_getResourceText("chargrid")
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        // #####################################################################
        // Add parts of bootstrap for the modal pages (settings, etc.)
        if ($.fn.modal === undefined)
            $("<script></script>")
                .attr("type", "text/javascript")
                .text(GM_getResourceText("bootstrap-js"))
                .appendTo("head");
        if ($.fn.dropdown === undefined)
            $("<script></script>")
                .attr("type", "text/javascript")
                .text(GM_getResourceText("b-dropdown-js"))
                .appendTo("head");
        // #####################################################################

        // Start page detection (and its callbacks once ready)
        this.wki.startInteraction.call(this.wki);
    };
    // #########################################################################
}
)();
// #############################################################################



// #############################################################################
(function()
{
    "use strict";

    // Character item to be included in a character grid
    // #########################################################################
    WK_Niai.prototype.gen_item_chargrid =
        ({kanji, readings, meanings, wk_level, is_locked="", notInWK="", badge="item-badge", href="javascript:;", kanji_id=""}) =>
       `<li id="${kanji_id}" class="${is_locked} ${notInWK} character-item" data-kanji="${kanji}">
            <span lang="ja" class="${badge}" data-kanji="${kanji}"></span>
            <a class="niai_similar_link" href="${href}">
                <span class="character" lang="ja" title="WK Level: ${wk_level}">${kanji}</span>
                <ul>
                    <li class="niai_reading">${readings[0]}</li>
                    <li class="niai_meaning">${meanings[0]}</li>
                </ul>
            </a>
        </li>`;
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Niai.prototype.createNiaiSection = function(style)
    {
        const $section = $("<section></section>")
                         .attr("id", "niai_section")
                         .attr("style", style)
                         .addClass(`${GM_info.script.namespace} col1`);

        const $main_fold = $("<div></div>")
                           .attr("id", "niai_main_fold");

        const $grid = $("<ul></ul>")
                      .attr("id", "niai_similar_grid")
                      .addClass("single-character-grid");

        const $view_btn = $('<span class="btn-group"></span>')
                          .append(`<a class="btn" id="niai_grid_visibility">
                                      <i class="icon-eye-open"></i>
                                  </a>`);
        // The note-niai part (at front!!) is crucial to stop enter keypresses
        // to go to the next page during reviews and lessons
        const $db_btn = $('<span class="btn-group"></span>')
                        .append(`<a class="btn" id="niai_badges_btn">
                                    <i class="icon-remove-circle"></i>
                                </a>`)
                        .append(`<span id="add_kanji_dropdown">
                                     <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                                         <span class="icon-plus"></span>
                                     </a>
                                     <ul class="note-niai dropdown-menu text-center">
                                        <li>
                                            <ul class="single-character-grid">
                                                ${this.gen_item_chargrid({
                                                    "kanji": "？",
                                                    "readings": ["&nbsp;"],
                                                    "meanings": ["Enter Kanji"],
                                                    "kanji_id": "kanji-dropdown"
                                                })}
                                            </ul>
                                        </li>
                                        <li class="divider"></li>
                                        <li><span class="input-prepend" style="margin-bottom: 0;">
                                                <span class="add-on">漢</span>
                                                <textarea id="niai_add_similar_input" maxlength="1" rows="1" class="span2" type="text" placeholder="Enter Kanji Here"></textarea>
                                            </span>
                                        </li>
                                        <li><a id="add_kanji_btn"><i class="icon-fixed-width icon-plus"></i> Add To Similar Kanji</a></li>
                                     </ul>
                                 </span>`)
                        .append(`<a class="btn disabled" id="niai_reset_similar_btn">
                                    <i class="icon-undo"></i>
                                </a>`);

        const $head_btn = $('<span class="btn-group"></span>')
                          .append(`<a class="btn" id="niai_head_settings_btn" data-toggle="modal" data-target="#niai_modal_settings">
                                        <i class="icon-gear"></i>
                                   </a>`)
                          .append(`<a class="btn" id="niai_head_info_btn" data-toggle="modal" data-target="#niai_modal_info">
                                        <i class="icon-question"></i>
                                   </a>`);

        const $head_grp = $("<span></span>")
                          .attr("id", "niai_head_btn_group")
                          .addClass("btn-group pull-right");
        $head_grp
            .append($db_btn)
            .append($view_btn)
            .append($head_btn);

        const $head = $("<h2>Visually Similar Kanji</h2>")
                      .append($head_grp);

        $section.append($head);
        $main_fold.append($grid);
        $section.append($main_fold);

        this.log("Created the Niai section, appending to the page!");

        if (!$("#niai_modal_settings").length)
            this.injectModals();

        return $section;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleMainFold = function(event)
    {
        $("#niai_main_fold").toggle();

        $("#niai_grid_visibility i").toggleClass("icon-eye-open");
        $("#niai_grid_visibility i").toggleClass("icon-eye-close");

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleBadges = function(event)
    {
        $(".delete-badge").toggle();

        $("#niai_badges_btn i").toggleClass("icon-circle-blank");
        $("#niai_badges_btn i").toggleClass("icon-remove-circle");

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.resetSimilarKanji = function(event)
    {
        if ($("#niai_reset_similar_btn").hasClass("disabled"))
            return false;

        const kanji = this.wki.getSubject().kan;

        $("#niai_reset_similar_btn").toggleClass("active");
        $("#niai_reset_similar_btn i").toggleClass("icon-undo");
        $("#niai_reset_similar_btn i").toggleClass("icon-exclamation-sign");

        if (!$("#niai_reset_similar_btn").hasClass("active"))
        {
            delete this.override_db[kanji];
            GM_setValue("override_db", JSON.stringify(this.override_db));

            this.populateNiaiSection(kanji);
        }

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.addMappingToOverrideDB = function(kanji, sim_kanji)
    {
        if (kanji in this.override_db)
        {
            let found = this.override_db[kanji].some(
                function(item)
                {
                    if (item.kan === sim_kanji)
                        item.score = -1.0;

                    return (item.kan === sim_kanji);
                }
            );

            if (!found)
                this.override_db[kanji].push({"kan": sim_kanji, "score": -1.0});
        }
        else
            this.override_db[kanji] = [{"kan": sim_kanji, "score": -1.0}];
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.removeSimilarKanji = function(event)
    {
        const kanji = this.wki.getSubject().kan;
        const sim_kanji = event.currentTarget.dataset.kanji;

        if (!kanji || !sim_kanji)
            return false;

        // FIXED: also add the reverse mapping to DB
        this.addMappingToOverrideDB(kanji, sim_kanji);
        this.addMappingToOverrideDB(sim_kanji, kanji);

        GM_setValue("override_db", JSON.stringify(this.override_db));

        this.populateNiaiSection(kanji);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.onSimilarInput = function(event)
    {
        const new_kanji = $("#niai_add_similar_input").val().trim();

        if (!new_kanji || new_kanji.length > 1)
        {
            $("#kanji-dropdown .character").text("？");
            $("#kanji-dropdown .niai_reading").html("&nbsp;");
            $("#kanji-dropdown .niai_meaning").text("Enter Kanji");
            $("#kanji-dropdown")[0].dataset.kanji = "";
        }
        else if (!this.ndb.isKanjiInDB(new_kanji))
        {
            $("#kanji-dropdown .character").text(new_kanji);
            $("#kanji-dropdown .niai_reading").html("&nbsp;");
            $("#kanji-dropdown .niai_meaning").text("Not In WK!");
            $("#kanji-dropdown")[0].dataset.kanji = "";
        }
        else
        {
            const kanji_item = this.ndb.getInfo(new_kanji);

            $("#kanji-dropdown .character").text(new_kanji);
            $("#kanji-dropdown .niai_reading").text(kanji_item.readings[0]);
            $("#kanji-dropdown .niai_meaning").text(kanji_item.meanings[0]);
            $("#kanji-dropdown")[0].dataset.kanji = new_kanji;
        }

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.addSimilarKanji = function(event)
    {
        const kanji = this.wki.getSubject().kan;
        const new_kanji = $("#kanji-dropdown")[0].dataset.kanji;

        if (!kanji || !new_kanji || kanji === new_kanji)
            return false;

        if (!(kanji in this.override_db))
            this.override_db[kanji] = [];

        let found = this.override_db[kanji].some(
            function(item)
            {
                if (new_kanji === item.kan)
                    item.score = 1.0;

                return (new_kanji === item.kan);
            }
        );

        if (!found && this.ndb.isKanjiInDB(new_kanji))
            this.override_db[kanji].push({"kan": new_kanji, "score": 1.0});

        GM_setValue("override_db", JSON.stringify(this.override_db));
        this.populateNiaiSection(kanji);

        $("#niai_add_similar_input").val("").focus();
        $("#kanji-dropdown .character").text("？");
        $("#kanji-dropdown .niai_reading").html("&nbsp;");
        $("#kanji-dropdown .niai_meaning").text("Enter Kanji");

        // $('[data-toggle="dropdown"]').parent().removeClass("open");

        return false;
    };
    // #########################################################################
}
)();
// #############################################################################

(function() {
    "use strict";

    // #########################################################################
    WK_Niai.prototype.injectModals = function()
    {
        const $settings_modal = $("<div></div>")
                                .attr("id", "niai_modal_settings")
                                .attr("role", "dialog")
                                .addClass(`${GM_info.script.namespace} modal fade`)
                                .hide();

        const $info_modal = $("<div></div>")
                            .attr("id", "niai_modal_info")
                            .attr("role", "dialog")
                            .addClass(`${GM_info.script.namespace} modal fade`)
                            .hide();

        $("body").append($settings_modal);
        $("body").append($info_modal);

        $settings_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Settings &mdash; Niai Visually Similar Kanji</h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="niai_settings_btn_debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                                <a class="btn" id="niai_settings_btn_clearDB"><i class="icon-signout"></i> Clear Override DB</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="niai_settings_btn_minify"><i class="icon-eye-open"></i> Toggle Mini Mode</a>
                                <a class="btn" id="niai_settings_btn_edit_mode"><i class="icon-circle-blank"></i> Toggle Edit Mode</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="niai_settings_btn_use_alt"><i class="icon-minus-sign-alt"></i> Original Sources</a>
                            </div>
                        </p>
                        <p class="text-center">
                            <label for="niai_settings_input_min_score">Set Minimal Score Below:</label>
                            <input id="niai_settings_input_min_score" type="number", min="0", max="1", step="0.1" value="${this.settings.min_score}">
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        if (this.settings.debug)
            $("#niai_settings_btn_debug").addClass("active");

        $info_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">About &mdash; Niai Visually Similar Kanji</h3>
                    </div>
                    <div class="modal-body">
                        <h3>Script Information</h3>
                        <p>Userscript version: ${GM_info.script.version}</p>
                        <p>Last modified: ${new Date(GM_info.script.lastModified).toTimeString()}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        if (this.settings.minify) {
            $("#niai_settings_btn_minify").addClass("active");
            $("#niai_settings_btn_minify i")
                .removeClass("icon-eye-open")
                .addClass("icon-eye-close");
        }

        if (this.settings.edit_mode)
        {
            $("#niai_settings_btn_edit_mode").addClass("active");
            $("#niai_settings_btn_edit_mode i")
                .removeClass("icon-circle-blank")
                .addClass("icon-remove-circle");
        }

        if (this.settings.use_alt)
        {
            $("#niai_settings_btn_use_alt").addClass("active");
            $("#niai_settings_btn_use_alt i")
                .removeClass("icon-minus-sign-alt")
                .addClass("icon-plus-sign-alt");
        }

        $("#niai_settings_input_min_score").val(this.settings.min_score);

        $("#niai_settings_btn_debug").on("click", this.toggleDebug.bind(this));
        $("#niai_settings_btn_clearDB").on("click", this.toggleClearDB.bind(this));
        $("#niai_settings_btn_minify").on("click", this.toggleMinify.bind(this));
        $("#niai_settings_btn_edit_mode").on("click", this.toggleEditMode.bind(this));
        $("#niai_settings_btn_use_alt").on("click", this.toggleUseAlt.bind(this));

        $("#niai_settings_input_min_score").on("input", this.changeMinScore.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleDebug = function(event)
    {
        this.settings.debug = !this.settings.debug;

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        $("#niai_settings_btn_debug").toggleClass("active");
        GM_setValue("debug", this.settings.debug);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleMinify = function(event)
    {
        this.settings.minify = !this.settings.minify;

        $("#niai_settings_btn_minify").toggleClass("active");
        $("#niai_settings_btn_minify i").toggleClass("icon-eye-open");
        $("#niai_settings_btn_minify i").toggleClass("icon-eye-close");

        if ($("#niai_main_fold").is(":visible") === this.settings.minify)
            this.toggleMainFold();

        GM_setValue("minify", this.settings.minify);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleEditMode = function(event)
    {
        this.settings.edit_mode = !this.settings.edit_mode;

        $("#niai_settings_btn_edit_mode").toggleClass("active");
        $("#niai_settings_btn_edit_mode i").toggleClass("icon-circle-blank");
        $("#niai_settings_btn_edit_mode i").toggleClass("icon-remove-circle");

        if ($(".delete-badge").is(":visible") !== this.settings.edit_mode)
            this.toggleBadges();

        GM_setValue("edit_mode", this.settings.edit_mode);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleUseAlt = function(event)
    {
        const kanji = this.wki.getSubject().kan;
        this.settings.use_alt = !this.settings.use_alt;

        $("#niai_settings_btn_use_alt").toggleClass("active");
        $("#niai_settings_btn_use_alt i").toggleClass("icon-minus-sign-alt");
        $("#niai_settings_btn_use_alt i").toggleClass("icon-plus-sign-alt");

        this.populateNiaiSection(kanji);

        GM_setValue("use_alt", this.settings.use_alt);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleClearDB = function(event)
    {
        const kanji = this.wki.getSubject().kan;

        $("#niai_settings_btn_clearDB").toggleClass("active");
        $("#niai_settings_btn_clearDB i").toggleClass("icon-warning-sign");
        $("#niai_settings_btn_clearDB i").toggleClass("icon-signout");

        if (!$("#niai_settings_btn_clearDB").hasClass("active"))
        {
            GM_log("WK_Niai: Override database cleared!");

            Object.keys(this.override_db).forEach(
                function(key) {
                    delete this.override_db[key];
                },
                this
            );
            GM_setValue("override_db", JSON.stringify(this.override_db));

            this.populateNiaiSection(kanji);
        }

        return false;
    };

    WK_Niai.prototype.changeMinScore = function(event)
    {
        const kanji = this.wki.getSubject().kan;
        const new_value = $("#niai_settings_input_min_score").val();

        if (new_value != this.settings.min_score)
        {
            this.settings.min_score = new_value;
            GM_setValue("min_score", new_value);

            this.populateNiaiSection(kanji);
        }
    };
    // #########################################################################
}
)();

function NiaiDB()
{
    this.override_db = {};
}


// #############################################################################
(function() {
   "use strict";

    NiaiDB.prototype = {
        constructor: NiaiDB,

        init: function(override_db)
        {
            this.override_db = override_db;

            // if (wkof)
            //     wkof.include("ItemData");
        },

        isKanjiInWK: function(kanji)
        {
            // WK started adding new kanji, treat unknown kanji gracefully
            if (!this.isKanjiInDB(kanji))
                return false;

            return (this.lookup_db[kanji].level !== 99);
        },

        isKanjiInDB: function(kanji)
        {
            return (kanji in this.lookup_db);
        },

        isKanjiLocked: function(kanji, level)
        {
            if (this.isKanjiInDB(kanji))
                return (this.lookup_db[kanji].level > level);
            else
                return true;
        },

        getInfo: function(kanji)
        {
            if (!this.isKanjiInDB(kanji))
                return {"meanings": "Not in DB!", "readings": "&nbsp;", level: "N/A"};

            let k_info = this.lookup_db[kanji];

            k_info.readings = k_info[k_info.important_reading];

            return k_info;
        },

        getSimilar: function(kanji, level, sources, min_score)
        {
            // use an object to override with later databases.
            let similar_kanji = {};

            sources.forEach(
                function(source)
                {
                    if (!(kanji in this[source.id]))
                        return;

                    this[source.id][kanji].forEach(
                        function(sim_info)
                        {
                            const hasScore = (
                                typeof sim_info !== "string" &&
                                "score" in sim_info
                            );

                            let sim_kanji = hasScore ? sim_info.kan : sim_info;
                            let score = source.base_score +
                                        (hasScore ? sim_info.score : 0.0);

                            if (!this.isKanjiInDB(sim_kanji))
                            {
                                console.log("Ignoring", kanji, ", not in DB yet!");
                                return;
                            }

                            const old_score = (sim_kanji in similar_kanji ?
                                               similar_kanji[sim_kanji].score :
                                               0.0);

                            if (score > min_score || (score > 0.0 && old_score > 0.0))
                            {
                                similar_kanji[sim_kanji] = {
                                    "kan": sim_kanji,
                                    "score": score,  // why was old_score used here?
                                    "locked": this.isKanjiLocked(sim_kanji, level)
                                };
                            }
                            else if (score < 0)
                            {
                                // negative scores are used to delete unwanted
                                // kanji to make it consistent across all DBs
                                // including the user's local db.
                                delete similar_kanji[sim_kanji];
                            }
                        },
                        this
                    );
                },
                this
            );

            let result = Object.values(similar_kanji);

            result.sort((a,b) => 2*Math.sign(b.score - a.score) +
                                 a.kan.localeCompare(b.kan))
                  .splice(19);

            return result.map((a) => a.kan);
        }
    };

    // Use the WK Open Framework to replace the offine DB of Niai
    // #########################################################################
    WK_Niai.prototype.update_wk_cache = function()
    {
        const wkof_config_locked = {
            wk_items: {
                options: {},
                filters: {
                    srs: {value: 'lock', invert: true},
                    item_type: 'kan'
                }
            }
        };

        const wkof_config_meaning = {
            wk_items: {
                options: {},
                filters: {
                    item_type: 'kan'
                }
            }
        };

        const _fix_info = function(items)
        {
            const type_items = wkof.ItemData.get_index(items, "slug");

            similar_list.forEach((sim_kanji) => {
                if (sim_kanji in type_items)
                    $(`li[id$="${sim_kanji}"]`).removeClass("locked");
                else
                    $(`li[id$="${sim_kanji}"]`).addClass("locked");
            });
        };

        // Retrieve the latest meanings directly from WK
        const _fix_meanings = function(items)
        {
            const type_items = wkof.ItemData.get_index(items, "slug");

            similar_list.forEach((sim_kanji) => {
                if (sim_kanji in type_items)
                {
                    $(`li[id$="${sim_kanji}"] li.niai_meaning`)
                        .text(type_items[sim_kanji].data.meanings[0].meaning);
                }
            });
        };

        wkof.ready("ItemData")
            .then(()=>
                    wkof.ItemData.get_items(wkof_config_locked)
                        .then(_fix_info)
            )
            .then(()=>
                    wkof.ItemData.get_items(wkof_config_meaning)
                        .then(_fix_meanings)
            );
    };
    // #########################################################################
}
());
// #############################################################################

// #############################################################################
NiaiDB.prototype.keisei_db      = JSON.parse(GM_getResourceText("from_keisei_db"));
NiaiDB.prototype.old_script_db  = JSON.parse(GM_getResourceText("old_script_db"));
NiaiDB.prototype.yl_radical_db  = JSON.parse(GM_getResourceText("yl_radical_db"));
NiaiDB.prototype.stroke_dist_db = JSON.parse(GM_getResourceText("stroke_dist_db"));
NiaiDB.prototype.noto_db        = JSON.parse(GM_getResourceText("noto_db"));
NiaiDB.prototype.manual_db      = JSON.parse(GM_getResourceText("manual_db"));
NiaiDB.prototype.lookup_db      = JSON.parse(GM_getResourceText("lookup_db"));
// #############################################################################

// #############################################################################
// #############################################################################
const wk_niai = new WK_Niai();

wk_niai.init();
wk_niai.run();
// #############################################################################
// #############################################################################
