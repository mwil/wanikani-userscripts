/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_Doushi()
{
    this.wki = new WKInteraction(GM_info.script.namespace);
    this.ddb = new DoushiDB();

    this.settings = {
        "debug": false,
        "with_self": true,
        "with_same_kanji": true,
        "with_same_kana": true,
        "with_same_stem": true,
        "with_same_meaning": true
    };
}
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Doushi.prototype.injectDoushiSection = function(event, curPage)
    {
        $(`#doushi_section`).remove();

        const subject = this.wki.getSubject();

        if (!(`voc` in subject) || !this.ddb.isVerb(subject.voc))
            return;

        switch(curPage)
        {
            case this.wki.PageEnum.vocabulary:
                $(`section#information`).after(this.createDoushiSection());
                break;
            case this.wki.PageEnum.reviews:
            case this.wki.PageEnum.lessons_reviews:
                $(`#item-info-col2`).prepend(this.createDoushiSection());
                break;
            case this.wki.PageEnum.lessons:
                $(`div#supplement-voc-meaning div.col2`)
                    .prepend(this.createDoushiSection(`margin-top: 1em;`));
                break;
            default:
                console.log(`WK_Doushi: Unknown page type`, curPage);
                return;
        }

        this.populateDoushiSection(subject.voc);

        if (curPage === this.wki.PageEnum.reviews ||
            curPage === this.wki.PageEnum.lessons)
            $(`.doushi_link`).attr(`target`, `_blank`);

        $(`#doushi_head_visibility`)
            .on(`click`, this.toggleMainFold.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.populateDoushiSection = function(character)
    {
        $(`#doushi_not_found`).remove();
        $(`#doushi_grid`).empty();

        if (!this.ddb.hasRelated(character, this.settings))
            $(`#doushi_section`).append(`<p id="doushi_not_found">Nothing found in DB.</p>`);
        else
            this.populateCharGrid(`#doushi_grid`, character);
    };
    // #########################################################################

    // #########################################################################
    const upperAll = function(string, delim=` `)
    {
        const tmp = string.split(delim);
        let result = [];

        for (let i = 0; i < tmp.length; i++)
            result.push(tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1));

        result = result.join(` `);

        // if (result.length > 12)
            // return result.slice(0, 9) + `...`;
        // else
            // return result;

        return result;
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.populateCharGrid = function(selector, character)
    {
        let verb_list = [];
        let related = this.ddb.getRelated(character, this.settings);

        // Add the verb itself as the first element in the list
        if (this.settings.with_self)
            related.unshift(character);

        related.forEach( function(char) {
            const wk_info = this.ddb.getWKInfo(char);
            let badges = [];
            let vtype = [];

            // check for vi/vt information
            if (wk_info.pos.includes(`vi`))
                if (wk_info.pos.includes(`vt`))
                    vtype.push(`badge-both`);
                else
                    vtype.push(`badge-vi`);
            else if (wk_info.pos.includes(`vt`))
                vtype.push(`badge-vt`);
            else
                vtype.push(`badge-none`);

            if (!wk_info.pos || wk_info.pos.includes(`v1`))
                badges.push(`badge-1dan`);
            else
                badges.push(`badge-5dan`);

            const li_item = {
                  "character": char,
                  "kana": wk_info.kana,
                  "meaning": upperAll(wk_info.meaning),
                  "badge": badges.join(` `),
                  "vtype": vtype.join(` `),
                  "href": `/vocabulary/${char}`
            };

            verb_list.push(li_item);
        }, this);

        $(selector).html(verb_list.map(this.gen_item_chargrid).join(``));
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`doushi_style`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        this.settings.debug = GM_getValue(`debug`) || false;
        this.settings.with_self = GM_getValue(`with_self`) || false;

        this.settings.with_same_kanji   = GM_getValue(`with_same_kanji`)   || false;
        this.settings.with_same_kana    = GM_getValue(`with_same_kana`)    || false;
        this.settings.with_same_stem    = GM_getValue(`with_same_stem`)    || false;
        this.settings.with_same_meaning = GM_getValue(`with_same_meaning`) || false;

        this.wki.init();
        this.ddb.init();

        $(document).on(`${GM_info.script.namespace}_wk_subject_ready`,
                       this.injectDoushiSection.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Doushi.prototype.run = function()
    {
        // Add scripts with guarding namespace (selecting class)
        GM_addStyle(GM_getResourceText(`bootstrapcss`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        GM_addStyle(GM_getResourceText(`chargrid`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        // #####################################################################
        // Add parts of bootstrap for the modal pages (settings, etc.)
        if ($.fn.modal === undefined)
        {
            $(`<script></script>`)
            .attr(`type`, `text/javascript`)
            .text(GM_getResourceText(`bootstrapjs`))
            .appendTo(`head`);
        }
        // #####################################################################

        // Start page detection (and its callbacks once ready)
        this.wki.startInteraction.call(this.wki);
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
const wk_doushi = new WK_Doushi();

wk_doushi.init();
wk_doushi.run();
// #############################################################################
