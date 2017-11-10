
/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Keisei.prototype.injectModals = function()
    {
        var $settings_modal = $(`<div></div>`)
                              .attr(`id`, `keisei-modal-settings`)
                              .attr(`role`, `dialog`)
                              .addClass(`modal fade`)
                              .hide();

        var $info_modal = $(`<div></div>`)
                          .attr(`id`, `keisei-modal-info`)
                          .attr(`role`, `dialog`)
                          .addClass(`modal fade`)
                          .hide();

        $(`body`).append($settings_modal);
        $(`body`).append($info_modal);

        $settings_modal.html(`
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Keisei Settings Menu</h3>
                    </div>
                    <div class="modal-body">
                        <p>Some nice texts go here ...</p>
                        <div class="btn-group-lg">
                            <a class="btn" id="keisei-settings-btn-debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                            <a class="btn" id="keisei-settings-btn-minify"><i class="icon-eye-open"></i> Toggle Mini Mode</a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        if (this.settings.debug)
            $(`#keisei-settings-btn-debug`).addClass(`active`);

        $info_modal.html(`
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Keisei Information</h3>
                    </div>
                    <div class="modal-body">
                        <h3>Script Information</h3>
                        <p>Userscript version: ${GM_info.script.version}</p>
                        <p>Last modified: ${new Date(GM_info.script.lastModified).toTimeString()}</p>

                        <h3>Database Information</h3>
                        <span id="keisei-stats"></span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        this.fillStats();

        if (this.settings.minify) {
            $(`#keisei-settings-btn-minify`).addClass(`active`);
            $(`#keisei-settings-btn-minify i`).removeClass(`icon-eye-open`);
            $(`#keisei-settings-btn-minify i`).addClass(`icon-eye-close`);
        }

        $(`#keisei-settings-btn-debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#keisei-settings-btn-minify`).on(`click`, this.toggleMinify.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.fillStats = function()
    {
        var all_kanji_cnt = Object.keys(this.kdb.kanji_db).length;
        var proc_kanji_cnt = 0;
        var phonetic_cnt = Object.keys(this.kdb.phonetic_db).length;
        var compound_cnt = 0;

        Object.keys(this.kdb.kanji_db).forEach(
            function(key) {
                if (this.kdb.kanji_db[key].type !== `unprocessed`)
                    proc_kanji_cnt += 1;
                if (this.kdb.kanji_db[key].type === `comp_phonetic`)
                    compound_cnt += 1;
            },
            this
        );

        $(`#keisei-stats`).html(`
            <p>${proc_kanji_cnt} kanji covered out of ${all_kanji_cnt} in database</p>
            <p>${compound_cnt} phonetic compounds using ${phonetic_cnt} tone marks</p>`);
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleDebug = function()
    {
        this.settings.debug = !this.settings.debug;

        this.log = this.settings.debug ?
            function(msg, ...args) {GM_log(`WK_Keisei:`, msg, args);} :
            function() {};

        $(`#keisei-settings-btn-debug`).toggleClass(`active`);
        GM_setValue(`debug`, this.settings.debug);
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.toggleMinify = function()
    {
        this.settings.minify = !this.settings.minify;

        $(`#keisei-settings-btn-minify`).toggleClass(`active`);
        $(`#keisei-settings-btn-minify i`).toggleClass(`icon-eye-open`);
        $(`#keisei-settings-btn-minify i`).toggleClass(`icon-eye-close`);

        if ($(`#keisei-main-fold`).is(`:visible`) === this.settings.minify)
            this.toggleMainFold();

        GM_setValue(`minify`, this.settings.minify);
    };
    // #########################################################################
})();
