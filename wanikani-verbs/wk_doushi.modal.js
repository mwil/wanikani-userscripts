/* jshint esversion: 6 */

(function() {
    "use strict";

    // #########################################################################
    WK_Doushi.prototype.injectModals = function()
    {
        const $settings_modal = $(`<div></div>`)
                                .attr(`id`, `doushi_modal_settings`)
                                .attr(`role`, `dialog`)
                                .addClass(`${GM_info.script.namespace} modal fade`)
                                .appendTo(`body`)
                                .hide();

        const $info_modal = $(`<div></div>`)
                            .attr(`id`, `doushi_modal_info`)
                            .attr(`role`, `dialog`)
                            .addClass(`${GM_info.script.namespace} modal fade`)
                            .appendTo(`body`)
                            .hide();

        $settings_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Settings &mdash; Doushi Related Verbs</h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="doushi_settings_btn_debug"><i class="icon-gear"></i> Toggle Debug Mode</a>
                                <a class="btn" id="doushi_settings_btn_with_self"><i class="icon-star-empty"></i> Include Verb Itself</a>
                            </div>
                        <p>
                        </p>
                        <div class="btn-group-lg text-center">
                        <a class="btn" id="doushi_settings_btn_same_kanji" data-setting="with_same_kanji">
                            <i class="icon-check-empty"></i> Same Kanji</a>
                        <a class="btn" id="doushi_settings_btn_same_kana" data-setting="with_same_kana">
                            <i class="icon-check-empty"></i> Same Kana</a>
                        <a class="btn" id="doushi_settings_btn_same_stem" data-setting="with_same_stem">
                            <i class="icon-check-empty"></i> Same Stem</a>
                        <a class="btn" id="doushi_settings_btn_same_meaning" data-setting="with_same_meaning">
                            <i class="icon-check-empty"></i> Same Meaning</a>
                        <a class="btn" id="doushi_settings_btn_conjugated" data-setting="with_conjugated">
                            <i class="icon-check-empty"></i> Conjugated</a>
                        </div>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        $info_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">About &mdash; Doushi Related Verbs</h3>
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

        if (this.settings.debug)
            $(`#doushi_settings_btn_debug`).addClass(`active`);

        if (this.settings.with_self)
        {
            $(`#doushi_settings_btn_with_self`).addClass(`active`);
            $(`#doushi_settings_btn_with_self i`).removeClass(`icon-star-empty`);
            $(`#doushi_settings_btn_with_self i`).addClass(`icon-star`);
        }

        [`#doushi_settings_btn_same_kanji`, `#doushi_settings_btn_same_kana`,
         `#doushi_settings_btn_same_stem`,  `#doushi_settings_btn_same_meaning`,
         `#doushi_settings_btn_conjugated`]
        .forEach(
            function(selector)
            {
                const $btn = $(selector);

                if (this.settings[$btn[0].dataset.setting])
                {
                    $btn.addClass(`active`);
                    $(`i`, $btn).removeClass(`icon-check-empty`);
                    $(`i`, $btn).addClass(`icon-check`);
                }

                $btn.on(`click`, this.toggleKinds.bind(this));
            },
            this
        );

        $(`#doushi_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#doushi_settings_btn_with_self`).on(`click`, this.toggleWithSelf.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.toggleDebug = function(event)
    {
        this.settings.debug = !this.settings.debug;

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        $(`#doushi_settings_btn_debug`).toggleClass(`active`);
        GM_setValue(`debug`, this.settings.debug);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.toggleWithSelf = function(event)
    {
        const subject = this.wki.getSubject();

        this.settings.with_self = !this.settings.with_self;

        $(`#doushi_settings_btn_with_self`).toggleClass(`active`);
        $(`#doushi_settings_btn_with_self i`).toggleClass(`icon-star`);
        $(`#doushi_settings_btn_with_self i`).toggleClass(`icon-star-empty`);

        GM_setValue(`with_self`, this.settings.with_self);

        this.populateDoushiSection(subject.voc);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.toggleKinds = function(event)
    {
        const target = event.currentTarget;
        const setting = target.dataset.setting;
        const subject = this.wki.getSubject();

        this.settings[setting] = !this.settings[setting];

        $(target).toggleClass(`active`);
        $(`i`, target).toggleClass(`icon-check`);
        $(`i`, target).toggleClass(`icon-check-empty`);

        GM_setValue(setting, this.settings[setting]);

        this.populateDoushiSection(subject.voc);

        return false;
    };
    // #########################################################################
})();
