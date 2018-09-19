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
        console.log(mutations);

        if (_.some(mutations, [`target.className`, `sc-kasBVs hzKNYV`]) ||  /* Last change on transition */
            _.some(mutations, [`target.className`, `sc-laTMn eJYOxB`]))     /* Last change on the initial (first) question */
        {
            $(`.kw_blurred`).remove();

            console.log("Specified mutation happened ...");

            /* first div containing a solution */
            let $contain = $(`div.sc-dliRfk.bsdHG`)[0];

            /* this class contains exactly one character each, join ... */
            let solution = $($contain, `div.sc-iqzUVk.hzQWwO`).text();

            $(`<div>`)
                .text(solution)
                .addClass(`kw_blurred noselect`)
                .appendTo(`h1`);
        }
    };
    // #########################################################################


    const app_obs = new MutationObserver(app_callback);
    app_obs.observe(document.getElementById(`app`), {childList: true, subtree: true});
}
)();
// #############################################################################
