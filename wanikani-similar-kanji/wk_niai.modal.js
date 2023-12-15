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

        let kan = '';
        let wkItemInfo = (window.unsafeWindow || window).wkItemInfo;
        if (wkItemInfo && wkItemInfo.currentState.type === 'kanji') {
            kan = wkItemInfo.currentState.characters;
        }

        $settings_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title" style="display:flex; flex-direction:row">
                            Settings &mdash; Niai Visually Similar Kanji
                            <form id="niai_head_kanji_form" style="all:unset; flex-grow:1; flex-direction:row; display:none" onsubmit="return false">
                                &nbsp;for&nbsp;
                                <input id="niai_head_kanji_input" type="text" lang="ja" size="1" style="all:unset; cursor:pointer; flex-grow:1">
                            </form>
                        </h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="niai_settings_btn_debug"><i class="fa fa-gear"></i> Toggle Debug Mode</a>
                                <a class="btn" id="niai_settings_btn_clearDB"><i class="fa fa-sign-out"></i> Clear Override DB</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="niai_settings_btn_minify"><i class="fa fa-eye"></i> Toggle Mini Mode</a>
                                <a class="btn" id="niai_settings_btn_edit_mode"><i class="fa fa-circle-o"></i> Toggle Edit Mode</a>
                            </div>
                        </p>
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="niai_settings_btn_use_alt"><i class="fa fa-minus-square"></i> Original Sources</a>
                            </div>
                        </p>
                        <p class="text-center">
                            <label for="niai_settings_input_min_score">Set Minimal Score Below:</label>
                            <input id="niai_settings_input_min_score" type="number", min="0", max="1", step="0.1" value="${this.settings.min_score}">
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        const $kanji_form = $settings_modal.find('#niai_head_kanji_form');

        let focusedInput;
        $kanji_form.find('input').on('focus', (ev) => {
            if (focusedInput === ev.target) return;
            focusedInput = ev.target;
            setTimeout(() => {
                focusedInput.select();
                focusedInput = null;
            }, 100);
        }).on(`keydown`, (ev) => ev.stopPropagation());;

        $kanji_form.on('submit', (ev) => {
            ev.preventDefault();
            const [elInput] = ev.target.elements;
            const [k] = elInput.value
                .replace(/[\p{scx=Hiragana}\p{scx=Katakana}\w\s]/gu, '')
                .trim();
            if (k) {
                this.populateNiaiSection(k);
            }
        });

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
                .removeClass(`fa-eye`)
                .addClass(`fa-eye-slash`);
        }

        if (this.settings.edit_mode)
        {
            $(`#niai_settings_btn_edit_mode`).addClass(`active`);
            $(`#niai_settings_btn_edit_mode i`)
                .removeClass(`fa-circle-o`)
                .addClass(`fa-times-circle-o`);
        }

        if (this.settings.use_alt)
        {
            $(`#niai_settings_btn_use_alt`).addClass(`active`);
            $(`#niai_settings_btn_use_alt i`)
                .removeClass(`fa-minus-square`)
                .addClass(`fa-plus-square`);
        }

        $(`#niai_settings_input_min_score`).val(this.settings.min_score);

        $(`#niai_settings_btn_debug`).on(`click`, this.toggleDebug.bind(this));
        $(`#niai_settings_btn_clearDB`).on(`click`, this.toggleClearDB.bind(this));
        $(`#niai_settings_btn_minify`).on(`click`, this.toggleMinify.bind(this));
        $(`#niai_settings_btn_edit_mode`).on(`click`, this.toggleEditMode.bind(this));
        $(`#niai_settings_btn_use_alt`).on(`click`, this.toggleUseAlt.bind(this));

        $(`#niai_settings_input_min_score`).on(`input`, this.changeMinScore.bind(this));
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
        $(`#niai_settings_btn_minify i`).toggleClass(`fa-eye`);
        $(`#niai_settings_btn_minify i`).toggleClass(`fa-eye-slash`);

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
        $(`#niai_settings_btn_edit_mode i`).toggleClass(`fa-circle-o`);
        $(`#niai_settings_btn_edit_mode i`).toggleClass(`fa-times-circle-o`);

        if ($(`.delete-badge`).is(`:visible`) !== this.settings.edit_mode)
            this.toggleBadges();

        GM_setValue(`edit_mode`, this.settings.edit_mode);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleUseAlt = function(event)
    {
        const kanji = wkItemInfo.currentState.characters;
        this.settings.use_alt = !this.settings.use_alt;

        $(`#niai_settings_btn_use_alt`).toggleClass(`active`);
        $(`#niai_settings_btn_use_alt i`).toggleClass(`fa-minus-square`);
        $(`#niai_settings_btn_use_alt i`).toggleClass(`fa-plus-square`);

        this.populateNiaiSection(kanji);

        GM_setValue(`use_alt`, this.settings.use_alt);

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.toggleClearDB = function(event)
    {
        const kanji = wkItemInfo.currentState.characters;

        $(`#niai_settings_btn_clearDB`).toggleClass(`active`);
        $(`#niai_settings_btn_clearDB i`).toggleClass(`fa-exclamation-triangle`);
        $(`#niai_settings_btn_clearDB i`).toggleClass(`fa-sign-out`);

        if (!$(`#niai_settings_btn_clearDB`).hasClass(`active`))
        {
            GM_log(`WK_Niai: Override database cleared!`);

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

    WK_Niai.prototype.changeMinScore = function(event)
    {
        const kanji = wkItemInfo.currentState.characters;
        const new_value = $(`#niai_settings_input_min_score`).val();

        if (new_value != this.settings.min_score)
        {
            this.settings.min_score = new_value;
            GM_setValue(`min_score`, new_value);

            this.populateNiaiSection(kanji);
        }
    };
    // #########################################################################
}
)();
