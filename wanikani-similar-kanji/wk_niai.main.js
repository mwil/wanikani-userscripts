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
        "min_score": 0.3
    };
}
// #############################################################################

// #############################################################################
function initializeCustomIcons()
{
    "use strict";

    // Get the current version of the Custom Icons library that is assigned to the window
    const Icons = window.unsafeWindow?.Icons ?? window.Icons;

    // Add all but one of the icons we will be needing; circle-exclamation is more than a single path, so we will insert that manually
    // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
    // UIcons by Flaticon - https://www.flaticon.com/uicons
    Icons.addCustomIcons([
        [
            'eye',
            "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z",
            [576, 512]
        ],
        [
            'eye-slash',
            "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z",
            [640, 512]
        ],
        [
            'circle-o',
            "m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-16c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z",
            [24, 24]
        ],
        [
            'circle-xmark',
            "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z",
        ],
        [
            'undo',
            "M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z",
        ],
        [
            'question',
            "M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
            [320, 512]
        ],
        [
            'right-from-bracket',
            "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z",
        ],
        [
            'triangle-warning',
            "M11,13V7c0-.55,.45-1,1-1s1,.45,1,1v6c0,.55-.45,1-1,1s-1-.45-1-1Zm1,2c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm11.58,4.88c-.7,1.35-2.17,2.12-4.01,2.12H4.44c-1.85,0-3.31-.77-4.01-2.12-.71-1.36-.51-3.1,.5-4.56L8.97,2.6c.71-1.02,1.83-1.6,3.03-1.6s2.32,.58,3,1.57l8.08,12.77c1.01,1.46,1.2,3.19,.49,4.54Zm-2.15-3.42s-.02-.02-.02-.04L13.34,3.67c-.29-.41-.79-.67-1.34-.67s-1.05,.26-1.36,.71L2.59,16.42c-.62,.88-.76,1.84-.4,2.53,.35,.68,1.15,1.05,2.24,1.05h15.12c1.09,0,1.89-.37,2.24-1.05,.36-.69,.22-1.65-.37-2.49Z",
        ],
        [
            'square-minus',
            "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z",
            [448, 512]
        ],
        [
            'square-plus',
            "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z",
            [448, 512]
        ],
    ]);

    // Add a custom icon that does not use only a single <path> element in the svg

    let customSVGSprites = document.getElementById("customSVGSprites__" + Icons.VERSION_NUM);
    if (!customSVGSprites) {
        console.error("There was an issue retrieving the Custom Icons script's SVG element.");
        return;
    }

    let idBase = "custom-icon-v" + Icons.VERSION_NUM + "__";
    let svgContent = `
    <path xmlns="http://www.w3.org/2000/svg" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z"/>
    <rect xmlns="http://www.w3.org/2000/svg" x="11" y="17" width="2" height="2" rx="1"/>`;
    customSVGSprites.innerHTML += `<symbol id="${idBase}circle-exclamation" viewbox="0 0 24 24">${svgContent}</symbol>`;
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

        // Get the current version of the Custom Icons library that is assigned to the window
        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

        let niaiSection = this.createNiaiSection()[0].children;
        let section = injectorState.injector.append([...niaiSection[0].childNodes], niaiSection[1], {injectImmediately: true, sectionName: `Niai Visually Similar Kanji`});
        if (!section) return;
        section.classList.add(GM_info.script.namespace, `col1`);
        section.id = `niai_section`;

        $(`#niai_head_kanji_input`).val(injectorState.characters);
        this.populateNiaiSection(injectorState.characters, injectorState.on);

        if (this.settings.minify)
        {
            $(`#niai_main_fold`).hide();
            $("#niai_grid_visibility").html(Icons.customIconTxt("eye-slash"));
        }

        if (!this.settings.edit_mode)
        {
            $(`.delete-badge`).hide();
            $("#niai_badges_btn").html(Icons.customIconTxt("circle-o"));
        }

        // #####################################################################
        if (injectorState.characters) {
            $('#niai_head_kanji_form').css('display', 'flex');
            $('#niai_head_kanji_form input').val(injectorState.characters);
        } else {
            $('#niai_head_kanji_form').css('display', 'none');
            $('#niai_head_kanji_form input').val('');
        }
        // #####################################################################

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
    WK_Niai.prototype.populateNiaiSection = function(kanji, curPage = this.wkItemInfoRef.currentState.on)
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

        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

        let iconIdBase = "custom-icon-v" + Icons.VERSION_NUM + "__";

        if (!$(`#niai_badges_btn svg`).is(`#${iconIdBase}circle-xmark`))
        {
            $(`.delete-badge`).hide();
            $("#niai_badges_btn").html(Icons.customIconTxt("circle-o"));
        }

        if (kanji in this.override_db)
            $(`#niai_reset_similar_btn`).removeClass(`disabled`);
        else
            $(`#niai_reset_similar_btn`).addClass(`disabled`);

        if (curPage !== `itemPage`)
            $(`.niai_similar_link`).attr(`target`, `_blank`);
        else
            $(`.niai_similar_link:not(li.notInWK a)`).attr(`data-turbo-frame`, `_blank`);

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
                        .replace(/\.wk_namespace/g, `#niai_section`));

        initializeCustomIcons();

        this.settings.debug      = GM_getValue(`debug`)      || false;
        this.settings.minify     = GM_getValue(`minify`)     || false;
        this.settings.edit_mode  = GM_getValue(`edit_mode`)  || false;
        this.settings.use_alt    = GM_getValue(`use_alt`)    || false;
        this.settings.user_level = GM_getValue(`user_level`) || 99;
        this.settings.min_score  = GM_getValue(`min_score`)  || 0.3;

        this.override_db = JSON.parse(GM_getValue(`override_db`) || `{}`);

        this.ndb = new NiaiDB();

        if (this.settings.user_level > 60 || this.settings.user_level < wkof.user.level) {
            this.settings.user_level = wkof.user.level;
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
        this.wkItemInfoRef = (window.unsafeWindow || window).wkItemInfo;
        if (this.wkItemInfoRef) {
            this.wkItemInfoRef.on(`itemPage,lessonQuiz,review,extraStudy`).forType(`kanji`).under(`reading`).spoiling(`meaning,reading`).notifyWhenVisible(this.injectNiaiSection.bind(this));
            this.wkItemInfoRef.on(`lesson`).forType(`kanji`).under(`examples`).notifyWhenVisible(this.injectNiaiSection.bind(this));
        }
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.run = function()
    {
        // Add scripts with guarding namespace (selecting class/id)
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
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
// #############################################################################
let promise = typeof wkof !== `undefined` ? (wkof.include(`Jquery, Apiv2`), wkof.ready(`Jquery, Apiv2`)) : new Promise(r => r());

promise.then(() => {
    const wk_niai = new WK_Niai();

    wk_niai.init();
    wk_niai.run();
});
// #############################################################################
// #############################################################################
