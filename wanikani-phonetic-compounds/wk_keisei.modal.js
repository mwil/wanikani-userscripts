/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Keisei.prototype.injectModals = function()
    {
        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

        const $settings_modal = $(`<div></div>`)
                                .attr(`id`, `keisei_modal_settings`)
                                .attr(`role`, `dialog`)
                                .addClass(`${GM_info.script.namespace} modal fade`)
                                .appendTo(`body`)
                                .hide();

        const $info_modal = $(`<div></div>`)
                            .attr(`id`, `keisei_modal_info`)
                            .attr(`role`, `dialog`)
                            .addClass(`${GM_info.script.namespace} modal fade`)
                            .appendTo(`body`)
                            .hide();

        $settings_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title" style="display:flex; flex-direction:row">
                            Settings &mdash; Keisei Phonetic-Semantic Composition
                            <form id="keisei_head_kanji_form" style="all:unset; flex-grow:1; flex-direction:row; display:none" onsubmit="return false">
                                &nbsp;for&nbsp;
                                <input id="keisei_head_kanji_input" type="text" lang="ja" size="1" style="all:unset; cursor:pointer; flex-grow:1">
                            </form>
                        </h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="keisei_settings_btn_debug">${Icons.customIconTxt("settings")} Toggle Debug Mode</a>
                                <a class="btn" id="keisei_settings_btn_clearDB">${Icons.customIconTxt("right-from-bracket")} Reset Markers</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="keisei_settings_btn_minify">${Icons.customIconTxt("eye")} Toggle Mini Mode</a>
                                <a class="btn" id="keisei_settings_btn_fullinfo">${Icons.customIconTxt("square-caret-o-down")} Toggle Full Info Mode</a>
                                <a class="btn" id="keisei_settings_btn_fuzzykana">${Icons.customIconTxt("circle-o")} Toggle Dakuten Mode</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="keisei_settings_btn_onlywk">${Icons.customIconTxt("filter")} Show Only Kanji in Wanikani</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn btn-large" id="keisei_settings_btn_withbeta">${Icons.customIconTxt("thumbs-o-up")} Enable Beta Features</a>
                            </div>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        const $kanji_form = $settings_modal.find('#keisei_head_kanji_form');

        let focusedInput;
        $kanji_form.find('input').on('focus', (ev) => {
            if (focusedInput === ev.target) return;
            focusedInput = ev.target;
            setTimeout(() => {
                focusedInput.select();
                focusedInput = null;
            }, 100);
        }).on(`keydown`, (ev) => ev.stopPropagation());

        $kanji_form.on('submit', (ev) => {
            ev.preventDefault();
            const [elInput] = ev.target.elements;
            const [k] = elInput.value
                .replace(/[\p{scx=Hiragana}\p{scx=Katakana}\w\s]/gu, '')
                .trim();
            if (k) {
                this.populateKeiseiSection({
                    kan: k,
                    phon: this.kdb.getKPhonetic(k) || k
                });
            }
        });

        $info_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">About &mdash; Keisei Phonetic-Semantic Composition</h3>
                    </div>
                    <div class="modal-body">
                        <h3>Script Information</h3>
                        <p>Userscript version: ${GM_info.script.version}</p>
                        <p>Last modified: ${new Date(GM_info.script.lastModified).toTimeString()}</p>

                        <h3>Database Information</h3>
                        <span id="keisei_stats"></span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        this.fillStats();

        _.forEach(this.settings, (is_set, setting)=>
        {
            if (is_set)
                $(`#keisei_settings_btn_${setting}`).addClass(`active`);
        });

        if (this.settings.minify)
            $(`#keisei_settings_btn_minify`).find(`svg`).replaceWith(Icons.customIconTxt("eye-slash"));

        if (this.settings.fullinfo)
            $(`#keisei_settings_btn_fullinfo`).find(`svg`).replaceWith(Icons.customIconTxt("square-caret-o-up"));

        if (this.settings.fuzzykana)
            $(`#keisei_settings_btn_fuzzykana`).find(`svg`).replaceWith(Icons.customIconTxt("quote-right"));

        $(`#keisei_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#keisei_settings_btn_minify`).on(`click`, this.toggleMinify.bind(this));
        $(`#keisei_settings_btn_fullinfo`).on(`click`, this.toggleFullInfo.bind(this));
        $(`#keisei_settings_btn_fuzzykana`).on(`click`, this.toggleFuzzyKana.bind(this));
        $(`#keisei_settings_btn_withbeta`).on(`click`, this.toggleWithBeta.bind(this));
        $(`#keisei_settings_btn_onlywk`).on(`click`, this.toggleOnlyWK.bind(this));
        $(`#keisei_settings_btn_clearDB`).on(`click`, this.toggleClearDB.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.fillStats = function()
    {
        let wk_radicals_cnt = 0;
        let proc_kanji_cnt  = 0;
        let compound_cnt    = 0;

        const all_kanji_cnt = Object.keys(this.kdb.kanji_db).length;
        const phonetic_cnt  = Object.keys(this.kdb.phonetic_db).length;

        Object.keys(this.kdb.kanji_db).forEach(
            function(kanji)
            {
                if (this.kdb.kanji_db[kanji].type !== `unprocessed`)
                    proc_kanji_cnt += 1;
                if (this.kdb.kanji_db[kanji].type === `comp_phonetic`)
                    compound_cnt += 1;
            },
            this
        );

        Object.keys(this.kdb.phonetic_db).forEach(
            function(phon)
            {
                if (this.kdb.phonetic_db[phon]["wk-radical"])
                    wk_radicals_cnt += 1;
            },
            this
        );

        $(`#keisei_stats`).html(
           `<p>${proc_kanji_cnt} kanji covered out of ${all_kanji_cnt} in database</p>
            <p>${compound_cnt} phonetic compounds using ${phonetic_cnt} phonetic marks</p>
            <p>${wk_radicals_cnt} WK radicals are also considered phonetic marks</p>`
        );
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleDebug = function(event)
    {
        this.settings.debug = !this.settings.debug;

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        $(`#keisei_settings_btn_debug`).toggleClass(`active`);
        GM_setValue(`debug`, this.settings.debug);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleMinify = function(event)
    {
        this.settings.minify = !this.settings.minify;

        $(`#keisei_settings_btn_minify`).toggleClass(`active`);
        this.toggleIcon($(`#keisei_settings_btn_minify`), ['eye', 'eye-slash']);

        if ($(`#keisei_main_fold`).is(`:visible`) === this.settings.minify)
            this.toggleMainFold();

        GM_setValue(`minify`, this.settings.minify);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleFullInfo = function(event)
    {
        this.settings.fullinfo = !this.settings.fullinfo;

        $(`#keisei_settings_btn_fullinfo`).toggleClass(`active`);
        this.toggleIcon($(`#keisei_settings_btn_fullinfo`), ['square-caret-o-up', 'square-caret-o-down']);

        if ($(`#keisei_more_fold`).is(`:visible`) !== this.settings.fullinfo)
            this.toggleMoreInfoFold();

        GM_setValue(`fullinfo`, this.settings.fullinfo);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleFuzzyKana = function(event)
    {
        this.settings.fuzzykana = !this.settings.fuzzykana;

        $(`#keisei_settings_btn_fuzzykana`).toggleClass(`active`);
        this.toggleIcon($(`#keisei_settings_btn_fuzzykana`), ['circle-o', 'quote-right']);

        this.populateCharGrid(`#keisei_phonetic_grid`, this.currentSubject);

        GM_setValue(`fuzzykana`, this.settings.fuzzykana);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleOnlyWK = function(event)
    {
        this.settings.onlywk = !this.settings.onlywk;

        $(`#keisei_settings_btn_onlywk`).toggleClass(`active`);

        this.populateCharGrid(`#keisei_phonetic_grid`, this.currentSubject);

        GM_setValue(`onlywk`, this.settings.onlywk);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleWithBeta = function(event)
    {
        this.settings.withbeta = !this.settings.withbeta;

        $(`#keisei_settings_btn_withbeta`).toggleClass(`active`);
        // $(`#keisei_settings_btn_withbeta i`).toggleClass(`fa-circle-o`);
        // $(`#keisei_settings_btn_withbeta i`).toggleClass(`fa-quote-right`);

        if (!$(`.dropdown.phonetic`).length && this.settings.withbeta)
            this.addNavItem();
        else if ($(`.dropdown.phonetic`).length && !this.settings.withbeta)
            $(`.dropdown.phonetic`).remove();

        GM_setValue(`withbeta`, this.settings.withbeta);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleClearDB = function(event)
    {
        $(`#keisei_settings_btn_clearDB`).toggleClass(`active`);
        this.toggleIcon($(`#keisei_settings_btn_clearDB`), ['triangle-exclamation', 'right-from-bracket']);

        if (!$(`#keisei_settings_btn_clearDB`).hasClass(`active`))
        {
            GM_log("WK_Keisei: Override database cleared!");

            this.override_db = {};

            GM_setValue(`override_db`, JSON.stringify(this.override_db));
        }

        return false;
    };
    // #########################################################################
}
)();
