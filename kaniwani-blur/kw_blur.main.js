/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";

    GM_addStyle(GM_getResourceText(`blur_style`));

    const app_callback = function(mutations)
    {
        console.log(mutations);

        if (_.some(mutations, [`target.className`, `sc-kasBVs hzKNYV`]) ||
            _.some(mutations, [`target.className`, `sc-laTMn eJYOxB`]))
        {
            $(`.kw_blurred`).remove();

            console.log("Specified mutation happened ...");

            let $contain = $(`div.sc-dliRfk.bsdHG`)[0];  /* div containing a solution */
            let solution = $($contain, `div.sc-iqzUVk.hzQWwO`).text(); /* this class contains exactly one character each */

            $(`<div>`)
                .text(solution)
                .addClass(`kw_blurred noselect`)
                .appendTo(`h1`);
        }
    };


    let app_obs = new MutationObserver(app_callback);
    app_obs.observe(document.getElementById(`app`), {childList: true, subtree: true});
}
)();
// #############################################################################
