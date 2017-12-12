/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Keisei.prototype.injectModals = function()
    {
        const $settings_modal = $(`<div></div>`)
                                .attr(`id`, `keisei_modal_settings`)
                                .attr(`role`, `dialog`)
                                .addClass(`${GM_info.script.namespace} modal fade`)
                                .hide();

        const $info_modal = $(`<div></div>`)
                            .attr(`id`, `keisei_modal_info`)
                            .attr(`role`, `dialog`)
                            .addClass(`${GM_info.script.namespace} modal fade`)
                            .hide();

        $(`body`).append($settings_modal);
        $(`body`).append($info_modal);

        $settings_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Settings &mdash; Keisei Phonetic-Semantic Composition</h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="keisei_settings_btn_debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                                <a class="btn" id="keisei_settings_btn_clearDB"><i class="icon-signout"></i> Reset Markers</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="keisei_settings_btn_minify"><i class="icon-eye-open"></i> Toggle Mini Mode</a>
                                <a class="btn" id="keisei_settings_btn_fullinfo"><i class="icon-collapse"></i> Toggle Full Info Mode</a>
                            </div>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        if (this.settings.debug)
            $(`#keisei_settings_btn_debug`).addClass(`active`);

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

        if (this.settings.minify) {
            $(`#keisei_settings_btn_minify`).addClass(`active`);
            $(`#keisei_settings_btn_minify i`).removeClass(`icon-eye-open`);
            $(`#keisei_settings_btn_minify i`).addClass(`icon-eye-close`);
        }

        if (this.settings.fullinfo) {
            $(`#keisei_settings_btn_fullinfo`).addClass(`active`);
            $(`#keisei_settings_btn_fullinfo i`).removeClass(`icon-collapse`);
            $(`#keisei_settings_btn_fullinfo i`).addClass(`icon-collapse-top`);
        }

        $(`#keisei_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#keisei_settings_btn_minify`).on(`click`, this.toggleMinify.bind(this));
        $(`#keisei_settings_btn_fullinfo`).on(`click`, this.toggleFullInfo.bind(this));
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
            <p>${compound_cnt} phonetic compounds using ${phonetic_cnt} tone marks</p>
            <p>${wk_radicals_cnt} WK radicals are also considered tone marks</p>`
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
        $(`#keisei_settings_btn_minify i`).toggleClass(`icon-eye-open`);
        $(`#keisei_settings_btn_minify i`).toggleClass(`icon-eye-close`);

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
        $(`#keisei_settings_btn_fullinfo i`).toggleClass(`icon-collapse-top`);
        $(`#keisei_settings_btn_fullinfo i`).toggleClass(`icon-collapse`);

        if ($(`#keisei_more_fold`).is(`:visible`) !== this.settings.fullinfo)
            this.toggleMoreInfoFold();

        GM_setValue(`fullinfo`, this.settings.fullinfo);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleClearDB = function(event)
    {
        $(`#keisei_settings_btn_clearDB`).toggleClass(`active`);
        $(`#keisei_settings_btn_clearDB i`).toggleClass(`icon-warning-sign`);
        $(`#keisei_settings_btn_clearDB i`).toggleClass(`icon-signout`);

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
