/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Niai.prototype.injectModals = function()
    {
        const $settings_modal = $(`<div></div>`)
                                .attr(`id`, `niai_modal_settings`)
                                .attr(`role`, `dialog`)
                                .addClass(`${GM_info.script.namespace} modal fade`)
                                .hide();

        const $info_modal = $(`<div></div>`)
                            .attr(`id`, `niai_modal_info`)
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
                        <h3 class="modal-title">Settings &mdash; Niai Visually Similar Kanji</h3>
                    </div>
                    <div class="modal-body">
                        <div class="btn-group-lg text-center">
                            <a class="btn" id="niai_settings_btn_debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        if (this.settings.debug)
            $(`#niai_settings_btn_debug`).addClass(`active`);

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

        $(`#niai_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
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

        $(`#niai_settings_btn_debug`).toggleClass(`active`);
        GM_setValue(`debug`, this.settings.debug);

        return false;
    };
    // #########################################################################
}
)();
