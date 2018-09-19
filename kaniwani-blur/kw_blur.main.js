/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    GM_addStyle(GM_getResourceText(`blur_style`));

    // #########################################################################
    const app_callback = function(mutations)
    {
        // console.log(mutations);

        if (_.some(mutations, [`target.tagName`, `UL`]))
        {
            $(`.kw_blurred`).remove();

            // console.log("Specified mutation happened ...");

            /* first div containing a solution in reviews */
            let $contain = $(`div[lang=ja]:first`).parent();

            /* this contains (exactly one each) character in reviews, join */
            /* Use last of type to jump over furigana */
            let solution = $(`div[lang=ja] > div:last-of-type`, $contain).text();

            $(`<div>`)
                .text(solution)
                .addClass(`kw_blurred noselect`)
                .appendTo(`h1`);

        }
    };
    // #########################################################################

    const app_obs = new MutationObserver(app_callback);

    app_obs.observe(document.getElementById(`app`),
                    {childList: true, subtree: true});
}
)();
// #############################################################################
