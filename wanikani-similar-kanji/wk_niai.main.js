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

    WK_Niai.prototype.injectNiaiSection = function(injectorState)
    {
        // #####################################################################
        this.log(`Injecting similar kanji section (callback works).`);

        let niaiSection = this.createNiaiSection()[0].children;
        let section = injectorState.injector.append([...niaiSection[0].childNodes], niaiSection[1], {injectImmediately: true, sectionName: `Visually Similar Kanji`});
        if (!section) return;
        section.classList.add(GM_info.script.namespace, `col1`);
        section.id = `niai_section`;

        this.populateNiaiSection(injectorState.characters, injectorState.on);

        if (this.settings.minify)
        {
            $(`#niai_main_fold`).hide();
            $(`#niai_grid_visibility i`).attr(`class`, `fa fa-eye-slash`);
        }

        if (!this.settings.edit_mode)
        {
            $(`.delete-badge`).hide();
            $(`#niai_badges_btn i`).attr(`class`, `fa fa-circle-o`);
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
    WK_Niai.prototype.populateNiaiSection = function(kanji, curPage)
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

        if (typeof wkof === `object`)
            this.update_wk_cache(similar_list);

        if (!$(`#niai_badges_btn i`).hasClass(`fa-times-circle-o`))
        {
            $(`.delete-badge`).hide();
            $(`#niai_badges_btn i`).attr(`class`, `fa fa-circle-o`);
        }

        if (kanji in this.override_db)
            $(`#niai_reset_similar_btn`).removeClass(`disabled`);
        else
            $(`#niai_reset_similar_btn`).addClass(`disabled`);

        if (curPage !== `itemInfo`)
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
                        .replace(/\.wk_namespace/g, `#niai_section#niai_section#niai_section#niai_section`));

        this.settings.debug      = GM_getValue(`debug`)      || false;
        this.settings.minify     = GM_getValue(`minify`)     || false;
        this.settings.edit_mode  = GM_getValue(`edit_mode`)  || false;
        this.settings.use_alt    = GM_getValue(`use_alt`)    || false;
        this.settings.user_level = GM_getValue(`user_level`) || 99;
        this.settings.min_score  = GM_getValue(`min_score`)  || 0.3;

        this.override_db = JSON.parse(GM_getValue(`override_db`) || `{}`);

        this.ndb = new NiaiDB();

        if (options[`Current Level`])
        {
            this.settings.user_level = options[`Current Level`];
            GM_setValue(`user_level`, this.settings.user_level);
        }

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        this.ndb.init(this.override_db);

        this.log(`The script element is:`, GM_info);
        this.log("The override db is", this.override_db);

        // #####################################################################
        // Main hook, WK Item Info Injector will kick off this script once the
        // page is ready and we can access the subject of the page.
        let wkItemInfo = (window.unsafeWindow || window).wkItemInfo;
        if (wkItemInfo) {
            wkItemInfo.on(`itemPage,lessonQuiz,review`).forType(`kanji`).under(`reading`).spoiling(`meaning,reading`).notify(this.injectNiaiSection.bind(this));
            wkItemInfo.on(`lesson`).forType(`kanji`).under(`examples`).notify(this.injectNiaiSection.bind(this));
        }
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.run = function()
    {
        // Add scripts with guarding namespace (selecting class/id)
        let bootstrapcss = GM_getResourceText(`bootstrapcss`);
        GM_addStyle(bootstrapcss
                        .replace(/\.wk_namespace/g, `#niai_section#niai_section#niai_section#niai_section`));
        GM_addStyle(bootstrapcss
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        GM_addStyle(GM_getResourceText(`chargrid`)
                        .replace(/\.wk_namespace/g, `#niai_section#niai_section#niai_section#niai_section`));

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
