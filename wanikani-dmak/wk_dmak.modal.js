/* jshint esversion: 6 */

const BIG_DMAK_OPTIONS = {
    element: `wk_dmak_big_draw`,
    autoplay: false,
    height: 360,
    width: 360,
    uri: `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/`,

    stroke: {
        order: {
            visible: true,
            attr: {
                "font-size": 6
            }
        },
        attr: {
            "stroke-linecap": `butt`,
            "stroke-linejoin": `bevel`
        }
    }
};

(function() {
    "use strict";

    // #########################################################################
    WK_DMAK.prototype.injectModals = function(subject)
    {
        const $settings_modal = $(`<div></div>`)
                                .attr(`id`, `wk_dmak_modal_settings`)
                                .attr(`role`, `dialog`)
                                .addClass(`${GM_info.script.namespace} modal fade`)
                                .appendTo(`body`)
                                .hide();

        const $info_modal = $(`<div></div>`)
                            .attr(`id`, `wk_dmak_modal_info`)
                            .attr(`role`, `dialog`)
                            .addClass(`${GM_info.script.namespace} modal fade`)
                            .appendTo(`body`)
                            .hide();

        const $draw_modal = $(`<div></div>`)
                            .attr(`id`, `wk_dmak_modal_draw`)
                            .attr(`role`, `dialog`)
                            .css(`white-space`,  `nowrap`)
                            .addClass(`${GM_info.script.namespace} modal fade`)
                            .appendTo(`body`)
                            .hide();

        $settings_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Settings &mdash; DMAK (Draw Me A Kanji) Integration</h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="btn-group-lg text-center">
                                <a class="btn" id="wk_dmak_settings_btn_minify"><i class="icon-eye-open"></i> Toggle Mini Mode</a>
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
                        <h3 class="modal-title">About &mdash; DMAK (Draw Me A Kanji) Integration</h3>
                    </div>
                    <div class="modal-body">
                        <p>Use DMAK to render kanji stroke animations.</p>
                        <p>https://github.com/mbilbille/dmak</p>
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

        $draw_modal.html(
           `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h3 class="modal-title">Kanji Highlight</h3>
                    </div>
                    <div id="wk_dmak_modal_draw_main" class="modal-body text-center">
                        <div id="wk_dmak_big_draw"></div>
                    </div>
                    <div id="wk_dmak_modal_draw_footer" class="modal-footer text-center">
                        <button type="button" class="btn btn-default pull-right" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>`
        );

        $(`<span>`)
            .attr(`id`, `wk_dmak_big_control_btn_group`)
            .addClass(`btn-group`)
            .append(`<a class="btn" id="dmak_big_r"><i class="icon-fast-backward"></i></a>`)
            .append(`<a class="btn" id="dmak_big_p"><i class="icon-step-backward"></i></a>`)
            .append(`<a class="btn" id="dmak_big_s"><i class="icon-pause"></i></a>`)
            .append(`<a class="btn" id="dmak_big_g"><i class="icon-play"></i></a>`)
            .append(`<a class="btn" id="dmak_big_n"><i class="icon-step-forward"></i></a>`)
            .prependTo(`#wk_dmak_modal_draw_footer`);

        this.big_dmak = new Dmak(subject.kan||subject.voc, BIG_DMAK_OPTIONS);

        $(document).on(`click`, `#dmak_big_r`, ()=>{this.big_dmak.erase();});
        $(document).on(`click`, `#dmak_big_p`, ()=>{this.big_dmak.eraseLastStrokes(1);});
        $(document).on(`click`, `#dmak_big_s`, ()=>{this.big_dmak.pause();});
        $(document).on(`click`, `#dmak_big_g`, ()=>{this.big_dmak.render();});
        $(document).on(`click`, `#dmak_big_n`, ()=>{this.big_dmak.renderNextStrokes(1);});

        if (this.settings.minify)
        {
            $(`#wk_dmak_settings_btn_minify`).addClass(`active`);
            $(`#wk_dmak_settings_btn_minify i`).removeClass(`icon-eye-open`);
            $(`#wk_dmak_settings_btn_minify i`).addClass(`icon-eye-close`);
        }

        $(`#wk_dmak_settings_btn_minify`).on(`click`, this.toggleMinify.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_DMAK.prototype.toggleMinify = function(event)
    {
        this.settings.minify = !this.settings.minify;

        $(`#wk_dmak_settings_btn_minify`).toggleClass(`active`);
        $(`#wk_dmak_settings_btn_minify i`).toggleClass(`icon-eye-open`);
        $(`#wk_dmak_settings_btn_minify i`).toggleClass(`icon-eye-close`);

        if ($(`#wk_dmak_main_fold`).is(`:visible`) === this.settings.minify)
            this.toggleMainFold();

        GM_setValue(`minify`, this.settings.minify);

        return false;
    };
    // #########################################################################
}
)();
