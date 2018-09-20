/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_DMAK()
{
    this.wki = new WKInteraction(GM_info.script.namespace);
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

        const $section =
            $(`<section>`)
                .attr(`id`, `wk_dmak_section`)
                .append(`<h2>Stroke Order</h2>`)
                .insertAfter(`section#information`);

        $(`<div>`)
            .attr(`id`, `draw-dmak`)
            .appendTo($section);

        const dmak = new Dmak(
            subject.kan||subject.voc,
            {
                element: `draw-dmak`,
                height: 240,
                width: 240,
                uri: `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/`
            }
        );
    };
    // #########################################################################


    // #########################################################################
    WK_DMAK.prototype.init = function()
    {
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

