/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
function WK_Keisei()
{
    this.kdb = null;

    this.currentSubject = null;

    this.settings = {
        "debug": false,
        "minify": false,
        "fullinfo": false,
        "fuzzykana": false,
        "withbeta": false,
        "onlywk": true
    };
}
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    // Callback for WK Item Info Injector, this is called directly at the
    // beginning when the required WK content is available.
    //
    // Note: on the reviews and lessons page we inject some styles lifted from
    // WK to include the nice 'character grids', this might cause some ugly
    // interactions with these pages (seems fine though)!
    // #########################################################################
    WK_Keisei.prototype.injectKeiseiSection = function(injectorState)
    {
        // #####################################################################
        const subject = {rad: null, kan: null, voc: null};

        this.log(`Injecting phonetic section (callback works).`);

        if (injectorState.type === `radical`) {
            subject.rad = injectorState.characters || injectorState.id;
            subject.phon = this.kdb.mapWKRadicalToPhon(subject.rad);
        } else {
            subject.kan = injectorState.characters;
            subject.phon = this.kdb.getKPhonetic(subject.kan) || subject.kan;
        }

        this.currentSubject = subject;
        this.log(`Working with the following input:`, subject);
        // #####################################################################

        // #####################################################################
        let keiseiSection = this.createKeiseiSection()[0].children;

        // const appender = (injectorState.on === 'itemPage' ? injectorState.injector.append : injectorState.injector.appendSubsection); // if h2 for itemPage
        let section = injectorState.injector.appendSubsection([...keiseiSection[0].childNodes], [keiseiSection[1], keiseiSection[2]], {injectImmediately: true});
        if (!section) return;
        section.classList.add(GM_info.script.namespace, `col1`);
        section.id = `keisei_section`;
        // #####################################################################

        this.populateKeiseiSection(subject);

        // #####################################################################

        if (injectorState.on === `review` ||
            injectorState.on === `lesson`)
            $(`.keisei_kanji_link`).attr(`target`, `_blank`);

        $(`li.notInWK a`).attr(`target`, `_blank`);

        // #####################################################################
        $(`#keisei_head_visibility`)
            .on(`click`, this.toggleMainFold.bind(this));
        $(`.${GM_info.script.namespace} .item-badge`)
            .on(`click`, this.toggleBadgeMarker.bind(this));
        // #####################################################################

        if (this.settings.minify)
        {
            $(`#keisei_main_fold`).hide();
            $(`#keisei_head_visibility i`).attr(`class`, `fa fa-eye-slash`);
        }

        // #####################################################################
        if (subject.kan) {
            $('#keisei_head_kanji_form').css('display', 'flex');
            $('#keisei_head_kanji_form input').val(subject.kan);
        } else {
            $('#keisei_head_kanji_form').css('display', 'none');
            $('#keisei_head_kanji_form input').val('');
        }
        // #####################################################################
    };
    // #########################################################################

    // Fill the various field in the section, depending on the information in
    // the kanji and phonetic databases.
    // #########################################################################
    WK_Keisei.prototype.populateKeiseiSection = function(subject)
    {
        // Cleanup in case of repopulation
        $(`#keisei_explanation`).empty();
        $(`#keisei_main_phonetic_grid`).empty();

        // #####################################################################
        if (subject.rad)
            if (subject.phon)
            {
                // Radical subject with a phonetic association
                $(`#keisei_explanation`).append(
                    this.explanation_radical(subject,
                                             this.kdb.getPReadings_style(subject.phon)));
                this.populateCharGrid(`#keisei_main_phonetic_grid`, subject);
            }
            else
            {
                // Radical subject, but not a phonetic mark
                $(`#keisei_explanation`).append(
                    this.explanation_non_radical(subject));
                return;
            }
        // #####################################################################
        else
        {
            if (subject.kan && !this.kdb.checkKanji(subject.kan))
            {
                // Something is wrong, not a kanji or not in DB!
                $(`#keisei_explanation`).append(
                    this.explanation_missing(subject));
                return;
            }
            else if (!subject.phon && !this.kdb.checkKanji(subject.kan))
            {
                // Kanji present, but not found in the DB.
                // TODO: looks a bit obsolete ...
                $(`#keisei_explanation`).append(
                    this.error_msg(subject,
                        `The requested information is not in the Keisei database!`));
                return;
            }

            // The kanji could be a phonetic element itself, show full info ...
            else if (this.kdb.checkPhonetic(subject.kan))
            {
                $(`#keisei_explanation`).append(
                    this.explanation_pmark(subject, this.kdb.getPReadings_style(subject.kan)));

                // v1.1.1 Fixed bug where kanji that are phonetic marks but also have their own phonetic mark
                if (subject.kan !== subject.phon)
                {
                    this.log(`Phonetic hierarchy detected, adjusting the phonetic mark from ${subject.phon} to ${subject.kan}.`);
                    subject.base_phon = subject.phon;
                    subject.phon = subject.kan;
                }

                this.populateCharGrid(`#keisei_main_phonetic_grid`, subject);
            }
            else
            {
                switch (this.kdb.getKType(subject.kan))
                {
                    case this.kdb.KTypeEnum.unprocessed:
                        $(`#keisei_explanation`).append(
                            this.explanation_unprocessed(subject));
                        return;
                    case this.kdb.KTypeEnum.unknown:
                        $(`#keisei_explanation`).append(
                            this.explanation_unknown(subject));
                        break;
                    case this.kdb.KTypeEnum.hieroglyph:
                    case this.kdb.KTypeEnum.indicative:
                    case this.kdb.KTypeEnum.comp_indicative:
                    case this.kdb.KTypeEnum.derivative:
                    case this.kdb.KTypeEnum.rebus:
                    case this.kdb.KTypeEnum.kokuji:
                    case this.kdb.KTypeEnum.shinjitai:
                        $(`#keisei_explanation`).append(
                            this.explanation_other(subject));
                        break;
                    case this.kdb.KTypeEnum.comp_phonetic:
                        if (!subject.phon)
                        {
                            $(`#keisei_explanation`).append(
                                this.error_msg(subject,
                                    `The phonetic element of this kanji was not in the database (or even no db)!`));
                            return;
                        }

                        $(`#keisei_explanation`).append(
                            this.explanation_phonetic(
                                subject,
                                this.kdb.getKItem(subject.kan).semantic,
                                this.kdb.getPReadings_style(subject.phon)));

                        this.populateCharGrid(`#keisei_main_phonetic_grid`, subject);

                        break;
                    default:
                        $(`#keisei_explanation`).append(
                            this.error_msg(subject, `The requested kanji is not in the database (or typo in DB)!`));
                        return;
                }
            }
        }
        // #####################################################################

        // Maybe we have additional information to display, add an additional fold
        if (this.kdb.getPXRefs(subject.phon).length ||
            this.kdb.getPNonCompounds(subject.phon).length)
        {
            $(`#keisei_main_fold`).append(this.createMoreInfoFold());
            this.populateMoreInfoFold(subject);

            if (this.settings.fullinfo)
            {
                $(`#keisei_more_fold`).show();
                $(`#keisei_head_moreinfo i`).attr(`class`, `fa fa-caret-square-o-up`);
            }
            else
            {
                $(`#keisei_more_fold`).hide();
                $(`#keisei_head_moreinfo i`).attr(`class`, `fa fa-caret-square-o-down`);
            }
        }
        else
        {
            $(`#keisei_head_moreinfo`).addClass(`disabled`);
            $(`#keisei_head_moreinfo i`).attr(`class`, `fa fa-caret-square-o-down`);
        }
    };
    // #########################################################################

    // Create character items for all compounds, sort them, and add them all.
    // #########################################################################
    WK_Keisei.prototype.populateCharGrid = function(selector, subject)
    {
        let char_list = [];
        // arrays used for sorting the 4 categories, append to front/back at each
        let char_list_lo = [];
        let char_list_hi = [];

        let head_list = [];

        $(selector).empty();

        if (!this.kdb.checkPhonetic(subject.phon))
        {
            GM_log(`The following phonetic was not found in the database`,
                   subject.phon);
            return;
        }

        // #####################################################################
        this.kdb.getPCompounds(subject.phon).forEach(
            function(kanji, i)
            {
                let badges = [`item-badge`, `recently-unlocked-badge`];

                if (!kanji || (this.settings.onlywk && !this.kdb.isKanjiInWK(kanji)))
                    return;

                let kReadings_deRen =
                    _.map(this.kdb.getKReadings(kanji), this.kdb.deRendaku);
                let pReadings_deRen =
                    _.map(this.kdb.getPReadings(subject.phon), this.kdb.deRendaku);

                let common_readings_deRen = new Set(
                    _.intersection(kReadings_deRen, pReadings_deRen));

                const common_readings = new Set(
                    _.intersection(
                        this.kdb.getKReadings(kanji),
                        this.kdb.getPReadings(subject.phon)));

                if (!this.settings.fuzzykana)
                {
                    kReadings_deRen = this.kdb.getKReadings(kanji);
                    pReadings_deRen = this.kdb.getPReadings(subject.phon);

                    common_readings_deRen = common_readings;
                }

                const cur_compound_li = {
                    "kanji":    kanji,
                    "readings": this.kdb.getKReadings(kanji),
                    "meanings": this.kdb.getWKKMeanings(kanji),
                    "wk_level": this.kdb.getWKItem(kanji).level,
                    "notInWK":  this.kdb.isKanjiInWK(kanji) ? `` : `notInWK`,
                    "href":     this.kdb.isKanjiInWK(kanji) ?
                                    `/kanji/${kanji}` :
                                    `${this.settings.lookup}${kanji}`,
                    "kanji_id": `kanji-${kanji}`,
                    "rnd_style": this.kdb.isFirstReadingInWK(kanji) ?
                                    `` :
                                    `keisei_style_reading_notInWK`
                };

                // Add a marker when the matching *improved*, either by
                // * more common readings, or
                // * less readings that only vary by dakuten versions
                if (common_readings_deRen &&
                    (common_readings_deRen.size > common_readings.size ||
                     kReadings_deRen.length > new Set(kReadings_deRen).size))
                    badges.push(`badge-rendaku`);

                if (new Set(kReadings_deRen).size === common_readings_deRen.size)
                {
                    badges.push(`badge-perfect`);
                    char_list_hi.unshift(cur_compound_li);

                    if (kanji === subject.kan)
                        $(`#keisei_explanation_quality`).html(
                            this.pmark_perfect(subject));
                }
                else if (!common_readings_deRen.size)
                {
                    badges.push(`badge-low`);
                    char_list_lo.push(cur_compound_li);

                    if (kanji === subject.kan)
                        $(`#keisei_explanation_quality`).html(
                            this.pmark_low(subject));
                }
                else
                {
                    // The first reading of this kanji at least appears somewhere
                    if (pReadings_deRen.indexOf(kReadings_deRen[0]) !== -1)
                    {
                        badges.push(`badge-high`);
                        char_list_hi.push(cur_compound_li);

                        if (kanji === subject.kan)
                            $(`#keisei_explanation_quality`).html(
                                this.pmark_high(subject));
                    }
                    else
                    {
                        badges.push(`badge-middle`);
                        char_list_lo.unshift(cur_compound_li);

                        if (kanji === subject.kan)
                            $(`#keisei_explanation_quality`).html(
                                this.pmark_middle(subject));
                    }
                }

                // mimic XOR to override already marked ones
                // https://stackoverflow.com/a/4540443/2699475
                if ((kanji in this.override_db &&
                        this.override_db[kanji].marked) != this.kdb.isPObscure(kanji))
                    badges.push(`badge-marked`);

                cur_compound_li.badge = badges.join(` `);
            },
            this
        );
        // #####################################################################

        // #####################################################################
        // Push green phonetic character
        head_list.push({
            "kanji":    subject.phon,
            "readings": this.kdb.getKReadings(subject.phon),
            "meanings": [`Phonetic`],
            "wk_level": "N/A",
            "kanji_id": `phonetic-1`
        });

        // If available, push blue WK Radical
        if (this.kdb.checkRadical(subject.phon))
            head_list.push({
                "kanji":    subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meanings": [this.kdb.getWKRadicalPP(subject.phon)],
                "wk_level": "N/A",
                "href":     `/radicals/${this.kdb.getWKRadical(subject.phon)}`,
                "kanji_id": `radical-1`
            });
        else
            head_list.push({
                "kanji":    `&nbsp;`,
                "readings": [`&nbsp;`],
                "meanings": [`&nbsp;`],
                "wk_level": "N/A",
                "kanji_id": `radical-1`
            });

        // If phonetic is also kanji in WK, push it!
        if (this.kdb.checkKanji(subject.phon))
            head_list.push({
                "kanji":    subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meanings": this.kdb.getWKKMeanings(subject.phon),
                "wk_level": this.kdb.getWKItem(subject.phon).level,
                "notInWK":  this.kdb.isKanjiInWK(subject.phon) ? `` : `notInWK`,
                "href":     this.kdb.isKanjiInWK(subject.phon) ?
                                `/kanji/${subject.phon}` :
                                `${this.settings.lookup}${subject.phon}`,
                "kanji_id": `kanji-1`,
                "rnd_style": this.kdb.isFirstReadingInWK(subject.phon) ?
                                `` :
                                `keisei_style_reading_notInWK`
            });

        const $grid_head = $(`<ul></ul>`)
                           .addClass(`keisei_phongrid_header`)
                           .addClass(`single-character-grid`)
                           .appendTo(selector);

        $grid_head.html(head_list.map(this.gen_item_chargrid).join(``));

        const $grid_comp = $(`<ul></ul>`)
                           .addClass(`keisei_phongrid_compounds`)
                           .addClass(`single-character-grid`)
                           .appendTo(selector);

        // Push sorted list of all phonetic compounds
        char_list = [...char_list_hi, ...char_list_lo];

        $grid_comp.html(char_list.map(this.gen_item_chargrid).join(``));
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.populateMoreInfoFold = function(subject)
    {
        // #####################################################################
        // Append all cross-referenced phonetic marks (for example compounds that
        // are phonetic marks on their own), 0, ..., n
        this.kdb.getPXRefs(subject.phon).forEach(
            function(curPhon, i)
            {
                $(`#keisei_more_fold`).append(
                    $(`<span></span>`)
                        .attr(`id`, `keisei_more_expl_${i}`));

                if (`base_phon` in subject && subject.base_phon === curPhon)
                    $(`#keisei_more_expl_${i}`).append(
                        this.explanation_phonetic(
                            subject,
                            this.kdb.getKItem(subject.kan).semantic,
                            this.kdb.getPReadings_style(curPhon)));
                else
                    $(`#keisei_more_expl_${i}`).append(
                        this.explanation_xref(curPhon, this.kdb.getPReadings_style(curPhon)));

                const $gridx = $(`<div></div>`)
                               .attr(`id`, `keisei_xref_grid_${i}`)
                               .addClass(`keisei_phonetic_grid`)
                               .appendTo(`#keisei_more_fold`);

                this.populateCharGrid(`#keisei_xref_grid_${i}`,
                                      {"kan": subject.kan, "phon": curPhon});
            },
            this
        );
        // #####################################################################

        // #####################################################################
        // Append kanji that include the phonetic mark but are not considered to be compounds
        if (this.kdb.getPNonCompounds(subject.phon).length)
        {
            $(`#keisei_more_fold`).append(
                $(`<span></span>`)
                    .attr(`id`, `keisei_more_non_comp`));

            $(`#keisei_more_non_comp`).append(this.explanation_non_compound(subject));

            const $gridn = $(`<ul></ul>`)
                           .attr(`id`, `keisei_non_comp_grid`)
                           .addClass(`keisei_phonetic_grid`)
                           .addClass(`single-character-grid`)
                           .appendTo(`#keisei_more_fold`);

            let char_list = [];

            char_list.push({
                "kanji":    subject.phon,
                "readings": this.kdb.getKReadings(subject.phon),
                "meanings": [`Non-Phonetic`],
                "wk_level": this.kdb.getWKItem(subject.phon).level,
                "kanji_id": `nonphonetic-1`
            });

            this.kdb.getPNonCompounds(subject.phon).forEach(
                function(curKanji, i)
                {
                    char_list.push({
                        "kanji":    curKanji,
                        "readings": this.kdb.getKReadings(curKanji),
                        "meanings": this.kdb.getWKKMeanings(curKanji),
                        "wk_level": this.kdb.getWKItem(curKanji).level,
                        "notInWK":  this.kdb.isKanjiInWK(curKanji) ? `` : `notInWK`,
                        "href":     this.kdb.isKanjiInWK(curKanji) ?
                                        `/kanji/${curKanji}` :
                                        `${this.settings.lookup}${curKanji}`,
                        "kanji_id": `kanji-${curKanji}`,
                        "rnd_style": this.kdb.isFirstReadingInWK(curKanji) ?
                                        `` :
                                        `keisei_style_reading_notInWK`
                    });
                },
                this
            );

            $(`#keisei_non_comp_grid`).html(
                char_list.map(this.gen_item_chargrid).join(``));
        }
        // #####################################################################
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.init = function()
    {
        GM_addStyle(GM_getResourceText(`keisei_style`)
                        .replace(/wk_namespace/g, GM_info.script.namespace));

        // Recover the settings from GM value storage, or use defaults
        // _.forEach(this.settings, (is_set, setting) => {
        //     this.settings[setting] = GM_getValue(setting, this.settings[setting]);
        // });
        //

        if (!GM_getValue("lookup")) {
            GM_setValue("lookup", "https://jisho.org/search/%23kanji%20");
        }

        this.settings.debug     = GM_getValue("debug")     || false;
        this.settings.minify    = GM_getValue("minify")    || false;
        this.settings.fullinfo  = GM_getValue("fullinfo")  || false;
        this.settings.fuzzykana = GM_getValue("fuzzykana") || false;
        this.settings.withbeta  = GM_getValue("withbeta")  || false;
        this.settings.onlywk    = GM_getValue("onlywk")    || false;
        this.settings.lookup    = GM_getValue("lookup");

        this.override_db = JSON.parse(GM_getValue("override_db") || "{}");

        this.log = this.settings.debug ?
            function(msg, ...args) {
                GM_log(`${GM_info.script.namespace}:`, msg, ...args);
            } :
            function() {};

        this.log(`The active settings are`, this.settings);

        this.kdb = new KeiseiDB();
        this.kdb.init();

        this.log(`The script element is:`, GM_info);
        this.log(`The override db is`, this.override_db);

        // #####################################################################
        // Main hook, WK Item Info Injector will kick off this script once the
        // page is ready and we can access the subject of the page.
        let wkItemInfo = (window.unsafeWindow || window).wkItemInfo;
        if (wkItemInfo) {
            wkItemInfo.forType(`kanji`).under(`reading`).spoiling(`meaning,reading`).notifyWhenVisible(this.injectKeiseiSection.bind(this));
            wkItemInfo.forType(`radical`).under(`meaning`).notifyWhenVisible(this.injectKeiseiSection.bind(this));
        }
        // #####################################################################
    };
    // #########################################################################

    // Just do it!
    // #########################################################################
    WK_Keisei.prototype.run = function()
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

        if (this.settings.withbeta)
            this.addNavItem();
    };
    // #########################################################################
}
)();
// #############################################################################


// #############################################################################
// #############################################################################
let promise = typeof wkof !== `undefined` ? (wkof.include(`Jquery`), wkof.ready(`Jquery`)) : new Promise(r => r());

promise.then(() => {
    const wk_keisei = new WK_Keisei();

    wk_keisei.init();
    wk_keisei.run();
});
// #############################################################################
// #############################################################################
