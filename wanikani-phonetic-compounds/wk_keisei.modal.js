
/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Keisei.prototype.injectModals = function()
    {
        var $settings_modal = $(`<div></div>`)
                              .attr(`id`, `keisei_modal_settings`)
                              .attr(`role`, `dialog`)
                              .addClass(`modal fade`)
                              .hide();

        var $info_modal = $(`<div></div>`)
                          .attr(`id`, `keisei_modal_info`)
                          .attr(`role`, `dialog`)
                          .addClass(`modal fade`)
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
                        <div class="btn-group-lg text-center">
                            <a class="btn" id="keisei_settings_btn_debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                            <a class="btn" id="keisei_settings_btn_minify"><i class="icon-eye-open"></i> Toggle Mini Mode</a>
                        </div>
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

        $(`#keisei_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#keisei_settings_btn_minify`).on(`click`, this.toggleMinify.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.fillStats = function()
    {
        var all_kanji_cnt = Object.keys(this.kdb.kanji_db).length;
        var proc_kanji_cnt = 0;
        var phonetic_cnt = Object.keys(this.kdb.phonetic_db).length;
        var compound_cnt = 0;
        var wk_radicals_cnt = 0;

        Object.keys(this.kdb.kanji_db).forEach(
            function(kanji) {
                if (this.kdb.kanji_db[kanji].type !== `unprocessed`)
                    proc_kanji_cnt += 1;
                if (this.kdb.kanji_db[kanji].type === `comp_phonetic`)
                    compound_cnt += 1;
            },
            this
        );

        Object.keys(this.kdb.phonetic_db).forEach(
            function(phon) {
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
            function(msg, ...args) {GM_log(`WK_Keisei:`, msg, ...args);} :
            function() {};

        $(`#keisei_settings_btn_debug`).toggleClass(`active`);
        GM_setValue(`debug`, this.settings.debug);
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
    };
    // #########################################################################
})();
