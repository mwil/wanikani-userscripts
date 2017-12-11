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

        if (this.settings.minify) {
            $(`#niai_settings_btn_minify`).addClass(`active`);
            $(`#niai_settings_btn_minify i`)
                .removeClass(`icon-eye-open`)
                .addClass(`icon-eye-close`);
        }

        if (this.settings.edit_mode)
        {
            $(`#niai_settings_btn_edit_mode`).addClass(`active`);
            $(`#niai_settings_btn_edit_mode i`)
                .removeClass(`icon-circle-blank`)
                .addClass(`icon-remove-circle`);
        }

        $(`#niai_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#niai_settings_btn_clearDB`).on(`click`, this.toggleClearDB.bind(this));
        $(`#niai_settings_btn_minify`).on(`click`, this.toggleMinify.bind(this));
        $(`#niai_settings_btn_edit_mode`).on(`click`, this.toggleEditMode.bind(this));
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

    // #########################################################################
    WK_Niai.prototype.toggleMinify = function(event)
    {
        this.settings.minify = !this.settings.minify;

        $(`#niai_settings_btn_minify`).toggleClass(`active`);
        $(`#niai_settings_btn_minify i`).toggleClass(`icon-eye-open`);
        $(`#niai_settings_btn_minify i`).toggleClass(`icon-eye-close`);

        if ($(`#niai_main_fold`).is(`:visible`) === this.settings.minify)
            this.toggleMainFold();

        GM_setValue(`minify`, this.settings.minify);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleEditMode = function(event)
    {
        this.settings.edit_mode = !this.settings.edit_mode;

        $(`#niai_settings_btn_edit_mode`).toggleClass(`active`);
        $(`#niai_settings_btn_edit_mode i`).toggleClass(`icon-circle-blank`);
        $(`#niai_settings_btn_edit_mode i`).toggleClass(`icon-remove-circle`);

        if ($(`.delete-badge`).is(`:visible`) !== this.settings.edit_mode)
            this.toggleBadges();

        GM_setValue(`edit_mode`, this.settings.edit_mode);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleClearDB = function(event)
    {
        const kanji = this.wki.getSubject().kan;

        $(`#niai_settings_btn_clearDB`).toggleClass(`active`);
        $(`#niai_settings_btn_clearDB i`).toggleClass(`icon-warning-sign`);
        $(`#niai_settings_btn_clearDB i`).toggleClass(`icon-signout`);

        if (!$(`#niai_settings_btn_clearDB`).hasClass(`active`))
        {
            GM_log("WK_Niai: Override database cleared!");

            Object.keys(this.override_db).forEach(
                function(key) {
                    delete this.override_db[key];
                },
                this
            );
            GM_setValue(`override_db`, JSON.stringify(this.override_db));

            this.populateNiaiSection(kanji);
        }

        return false;
    };
    // #########################################################################
}
)();
