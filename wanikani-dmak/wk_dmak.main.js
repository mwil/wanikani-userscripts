/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_DMAK()
{
    this.wki = new WKInteraction(GM_info.script.namespace);

    this.settings = {
        "debug": false,
        "minify": false
    };
}

// #############################################################################
(function()
{
    'use strict';

    // #########################################################################
    WK_DMAK.prototype.injectDMAKSection = function(event, curPage)
    {
        $(`#wk_dmak_section`).remove();

        const subject = this.wki.getSubject();

        // #####################################################################
        switch(curPage)
        {
            case this.wki.PageEnum.kanji:
            case this.wki.PageEnum.vocabulary:
                $(`section#information`)
                    .after(this.createDMAKSection(subject));
                break;
            case this.wki.PageEnum.reviews:
                $(`section#item-info-meaning-mnemonic`)
                    .before(this.createDMAKSection(subject));
                break;
            default:
                console.log(`Unknown page type ${curPage}, cannot inject info!`);
                return;
        }

        if (this.settings.minify)
        {
            $(`#wk_dmak_main_fold`).hide();
            $(`#wk_dmak_head_visibility i`).attr(`class`, `icon-eye-close`);
        }

        // #####################################################################
        $(`#wk_dmak_head_visibility`)
            .on(`click`, this.toggleMainFold.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_DMAK.prototype.init = function()
    {
        this.settings.debug     = GM_getValue(`debug`)     || false;
        this.settings.minify    = GM_getValue(`minify`)    || false;

        this.wki.init();

        // #####################################################################
        // Main hook, WK Interaction will kick off this script once the page
        // is ready and we can access the subject of the page.
        $(document).on(`${GM_info.script.namespace}_wk_subject_ready`,
                       this.injectDMAKSection.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_DMAK.prototype.run = function()
    {
        // Add scripts with guarding namespace (selecting class)
        GM_addStyle(GM_getResourceText(`bootstrapcss`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        // #####################################################################

        // Add parts of bootstrap for the modal pages (settings, etc.)
        if ($.fn.modal === undefined)
            $(`<script></script>`)
                .attr(`type`, `text/javascript`)
                .text(GM_getResourceText(`bootstrapjs`))
                .appendTo(`head`);
        // #####################################################################

        this.wki.startInteraction.call(this.wki);
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
// #############################################################################
var wk_dmak = new WK_DMAK();

wk_dmak.init();
wk_dmak.run();
// #############################################################################
// #############################################################################

