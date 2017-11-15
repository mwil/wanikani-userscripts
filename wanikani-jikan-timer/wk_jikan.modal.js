
/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.injectModals = function()
    {
        var $settings_modal = $(`<div></div>`)
                              .attr(`id`, `jikan_modal_settings`)
                              .attr(`role`, `dialog`)
                              .addClass(`modal fade`)
                              .hide();

        var $info_modal = $(`<div></div>`)
                          .attr(`id`, `jikan_modal_info`)
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
                        <h3 class="modal-title">Settings &mdash; Jikan Timer</h3>
                    </div>
                    <div class="modal-body">
                        <div class="btn-group-lg text-center">
                            <a class="btn" id="jikan_settings_btn_debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                            <a class="btn" id="jikan_settings_btn_clearDB"><i class="icon-signout"></i> Clear Measurement DB</a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        if (this.settings.debug)
            $(`#jikan_settings_btn_debug`).addClass(`active`);

        $info_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">About &mdash; Jikan Timer</h3>
                    </div>
                    <div class="modal-body">
                        <h3>Script Information</h3>
                        <p>Userscript version: ${GM_info.script.version}</p>
                        <p>Last modified: ${new Date(GM_info.script.lastModified).toTimeString()}</p>

                        <h3>Database Information</h3>
                        <span id="jikan_stats"></span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        $(`#jikan_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#jikan_settings_btn_clearDB`).on(`click`, this.toggleClearDB.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.toggleDebug = function(event)
    {
        this.settings.debug = !this.settings.debug;

        this.log = this.settings.debug ?
            function(msg, ...args) {GM_log(`WK_Jikan:`, msg, ...args);} :
            function() {};

        $(`#jikan_settings_btn_debug`).toggleClass(`active`);
        GM_setValue(`debug`, this.settings.debug);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.toggleClearDB = function(event)
    {
        $(`#jikan_settings_btn_clearDB`).toggleClass(`active`);
        $(`#jikan_settings_btn_clearDB i`).toggleClass(`icon-warning-sign`);
        $(`#jikan_settings_btn_clearDB i`).toggleClass(`icon-signout`);

        if (!$(`#jikan_settings_btn_clearDB`).hasClass(`active`))
        {
            GM_log("WK_Jikan: Measurement database cleared!");
            this.measurement_db = {"rad": {}, "kan": {}, "voc": {}};
            GM_setValue(`measurement_db`, JSON.stringify(this.measurement_db));
        }
    };
    // #########################################################################
})();
