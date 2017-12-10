/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_Niai()
{
    this.ndb = new NiaiDB();
    this.wki = new WKInteraction(GM_info.script.namespace);

    this.settings = {
        "debug": false,
        "sources": [
            "manual_db",
            "stroke_dist_db",
            "yl_radical_db",
            "keisei_db",
            "old_script_db"
        ],
        "user_level": 99
    };
}
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    WK_Niai.prototype.injectNiaiSection = function(event, curPage)
    {
        // #####################################################################
        $(`#niai_section`).remove();

        const subject = this.wki.getSubject();

        this.log(`Injecting similar kanji section (callback works).`);

        if (!this.wki.checkSubject(subject, [`kan`]))
            return;

        switch(curPage)
        {
            case this.wki.PageEnum.kanji:
                // Remove the old section
                $(`section:contains('Visually Similar Kanji')`).remove();

                $(`section#note-reading`)
                    .before(this.createNiaiSection());
                break;
            case this.wki.PageEnum.reviews:
            case this.wki.PageEnum.lessons_reviews:
                $(`div#item-info-col2`)
                    .append(this.createNiaiSection());

                if ($(`div#item-info-col2`).is(`:hidden`))
                    $(`#niai_section`).hide();

                break;
            case this.wki.PageEnum.lessons:
                // WK uses an very strong CSS selector for the lesson pages,
                // need to move the div somewhere else ... this might possibly
                // break other stuff!
                if (!$(`#real_skrv`).length)
                    $(`div#supplement-kan-related-vocabulary`)
                        .removeAttr("style")
                        .wrap(`<div id="real_skrv"></div>`);

                $(`div#real_skrv`)
                    .prepend(this.createNiaiSection(`margin-bottom: 1em;`)
                             .wrap(`<div class="pure-u-1 col1></div>`)
                             .wrap(`<div class="pure-g-r"></div>`));

                break;
            default:
                GM_log(`Unknown page type ${curPage}, cannot inject info!`);
                return;
        }

        this.populateNiaiSection(subject.kan);

        if (curPage === this.wki.PageEnum.reviews ||
            curPage === this.wki.PageEnum.lessons)
            $(`.niai_similar_link`).attr(`target`, `_blank`);

        $(`li.notInWK a`).attr(`target`, `_blank`);
        // #####################################################################
    };
    // #########################################################################

    const len_limiter = function(str_array)
    {
        let result = [];

        str_array.forEach(
            function(str) {
                if (str.length > 15)
                    result.push(str.slice(0, 12) + `...`);
                else
                    result.push(str);
            }
        );

        return result;
    };

    // #########################################################################
    WK_Niai.prototype.populateNiaiSection = function(kanji)
    {
        $(`#niai_similar_grid`).empty();

        const similar_list = [kanji,
                              ...this.ndb.getSimilar(kanji,
                                                     this.settings.user_level,
                                                     this.settings.sources)];
        let char_list = [];

        console.log("found similar kanji", similar_list);

        similar_list.forEach(
            function(sim_kanji, i)
            {
                const sim_info = this.ndb.getInfo(sim_kanji);

                const li_template = {
                    "kanji":     sim_kanji,
                    "readings":  sim_info.readings,
                    "meanings":  len_limiter(sim_info.meanings),
                    "is_locked":  this.ndb.isKanjiLocked(
                                    sim_kanji, this.settings.user_level) ?
                                        `locked` :
                                        ``,
                    "href":      this.ndb.isKanjiInWK(sim_kanji) ?
                                    `/kanji/${sim_kanji}` :
                                    `https://jisho.org/search/${sim_kanji}%20%23kanji`,
                    "kanji_id":  kanji === sim_kanji ? `selfkanji-1` : `kanji-${i}`
                };

                char_list.push(li_template);
            },
            this
        );

        $(`#niai_similar_grid`).html(char_list.map(this.gen_item_chargrid).join(``));
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`niai_style`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        this.settings.debug = GM_getValue(`debug`) || true;
        this.settings.user_level = GM_getValue(`user_level`) || 99;

        if (this.settings.user_level === 99 &&
            this.wki.detectCurPage() === this.wki.PageEnum.kanji)
        {
            this.settings.user_level = parseInt($(`li.levels a span`).text());
            GM_setValue(`user_level`, this.settings.user_level);
        }

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        this.ndb.init();
        this.wki.init();

        this.log(`The script element is:`, GM_info);

        // #####################################################################
        // Main hook, WK Interaction will kick off this script once the page
        // is ready and we can access the subject of the page.
        $(document).on(`${GM_info.script.namespace}_wk_subject_ready`,
                       this.injectNiaiSection.bind(this));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Niai.prototype.run = function()
    {
        // Add scripts with guarding namespace (selecting class)
        GM_addStyle(GM_getResourceText(`bootstrapcss`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));
        GM_addStyle(GM_getResourceText(`chargrid`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        // #####################################################################
        // Add parts of bootstrap for the modal pages (settings, etc.)
        if ($.fn.modal === undefined)
            $(`<script></script>`)
                .attr(`type`, `text/javascript`)
                .text(GM_getResourceText(`bootstrapjs`))
                .appendTo(`head`);
        // #####################################################################

        // Start page detection (and its callbacks once ready)
        this.wki.startInteraction.call(this.wki);
    };
    // #########################################################################
}
)();
// #############################################################################


// #############################################################################
// #############################################################################
var wk_niai = new WK_Niai();

wk_niai.init();
wk_niai.run();
// #############################################################################
// #############################################################################
