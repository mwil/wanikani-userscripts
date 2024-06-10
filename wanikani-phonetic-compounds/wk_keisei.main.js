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
function initializeCustomIcons()
{
    "use strict";

    // Get the current version of the Custom Icons library that is assigned to the window
    const Icons = window.unsafeWindow?.Icons ?? window.Icons;

    // Add all but one of the icons we will be needing; circle-exclamation is more than a single path, so we will insert that manually
    // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
    // UIcons by Flaticon - https://www.flaticon.com/uicons
    Icons.addCustomIcons([
        [
            'eye',
            "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z",
            [576, 512]
        ],
        [
            'eye-slash',
            "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z",
            [640, 512]
        ],
        [
            'circle-o',
            "m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-16c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z",
            [24, 24]
        ],
        [
            'question',
            "M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
            [320, 512]
        ],
        [
            'triangle-warning',
            "M11,13V7c0-.55,.45-1,1-1s1,.45,1,1v6c0,.55-.45,1-1,1s-1-.45-1-1Zm1,2c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm11.58,4.88c-.7,1.35-2.17,2.12-4.01,2.12H4.44c-1.85,0-3.31-.77-4.01-2.12-.71-1.36-.51-3.1,.5-4.56L8.97,2.6c.71-1.02,1.83-1.6,3.03-1.6s2.32,.58,3,1.57l8.08,12.77c1.01,1.46,1.2,3.19,.49,4.54Zm-2.15-3.42s-.02-.02-.02-.04L13.34,3.67c-.29-.41-.79-.67-1.34-.67s-1.05,.26-1.36,.71L2.59,16.42c-.62,.88-.76,1.84-.4,2.53,.35,.68,1.15,1.05,2.24,1.05h15.12c1.09,0,1.89-.37,2.24-1.05,.36-.69,.22-1.65-.37-2.49Z",
        ],
        [
            'filter',
            "M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",
        ],
        [
            'quote-right',
            "M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z",
            [448, 512]
        ],
        [
            'thumbs-o-up',
            "M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z",
        ],
        [
            'square-caret-o-up',
            "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z",
            [448, 512]
        ],
        [
            'square-caret-o-down',
            "M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z",
            [448, 512]
        ],
    ]);

    // Add a custom icon that does not use only a single <path> element in the svg

    let customSVGSprites = document.getElementById("customSVGSprites__" + Icons.VERSION_NUM);
    if (!customSVGSprites) {
        console.error("There was an issue retrieving the Custom Icons script's SVG element.");
        return;
    }

    let idBase = "custom-icon-v" + Icons.VERSION_NUM + "__";
    let svgContent = `
    <path xmlns="http://www.w3.org/2000/svg" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z"/>
    <rect xmlns="http://www.w3.org/2000/svg" x="11" y="17" width="2" height="2" rx="1"/>`;
    customSVGSprites.innerHTML += `<symbol id="${idBase}circle-exclamation" viewbox="0 0 24 24">${svgContent}</symbol>`;
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

        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

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
            $(`#keisei_head_visibility`).find(`svg`).replaceWith(Icons.customIconTxt('eye-slash'));
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

        const Icons = window.unsafeWindow?.Icons ?? window.Icons;

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
                $(`#keisei_head_moreinfo`).html(Icons.customIconTxt('square-caret-o-up'));
            }
            else
            {
                $(`#keisei_more_fold`).hide();
                $(`#keisei_head_moreinfo`).html(Icons.customIconTxt('square-caret-o-down'));
            }
        }
        else
        {
            $(`#keisei_head_moreinfo`).addClass(`disabled`);
            $(`#keisei_head_moreinfo`).html(Icons.customIconTxt('square-caret-o-down'));
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
        
        initializeCustomIcons();

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
