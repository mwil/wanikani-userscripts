/* jshint esversion: 6 */

// Wrapper object for Keisei database interactions
// #############################################################################
function KeiseiDB()
{
    this.KTypeEnum = Object.freeze({
        unknown:         0,
        hieroglyph:      1, // 象形: type of character representing pictures
        indicative:      2, // 指事: indicative (kanji whose shape is based on logical representation of an abstract idea)
        comp_indicative: 3, // 会意: kanji made up of meaningful parts (e.g. "mountain pass" is up + down + mountain)
        comp_phonetic:   4, // 形声: kanji in which one element suggests the meaning, the other the pronunciation
        derivative:      5, // 転注: applying an extended meaning to a kanji
        rebus:           6, // 仮借: borrowing a kanji with the same pronunciation to convey an unrelated term
        kokuji:          7, // kanji originating from Japan
        shinjitai:       8, // Character was simplified from a different form (seiji)
        unprocessed:     9  // not yet visited
        }
    );

    this.wkradical_to_phon = {};
}
// #############################################################################

// #############################################################################
(function() {
   "use strict";

    KeiseiDB.prototype = {
        constructor: KeiseiDB,

        // #####################################################################
        init: function()
        {
            this.genWKRadicalToPhon();
        },
        // #####################################################################

        // #####################################################################
        kdata: function(kanji)
        {
            return this.kanji_db[kanji];
        },
        // #####################################################################

        // #####################################################################
        checkKanji: function(kanji)
        {
            return Boolean(this.kanji_db && (kanji in this.kanji_db));
        },
        // #####################################################################
        // #####################################################################
        checkPhonetic: function(phon)
        {
            return Boolean(this.phonetic_db && (phon in this.phonetic_db));
        },
        // #####################################################################
        // #####################################################################
        checkRadical: function(phon)
        {
            return Boolean(this.phonetic_db && this.phonetic_db[phon][`wk-radical`]);
        },
        // #####################################################################
        // #####################################################################
        getKType: function(kanji)
        {
            return this.KTypeEnum[this.kanji_db[kanji].type];
        },
        // #####################################################################

        // #####################################################################
        getKItem: function(kanji)
        {
            if (kanji in this.kanji_db)
                return this.kanji_db[kanji];
            else
                return {};
        },
        // #####################################################################

        // #####################################################################
        getWKItem: function(kanji)
        {
            if (kanji in this.wk_kanji_db)
                return this.wk_kanji_db[kanji];
            else
                return {"level": "N/A"};
        },
        // #####################################################################

        // #####################################################################
        getKReadings: function(kanji)
        {
            let result = [];

            if (!(kanji in this.kanji_db))
                result = this.phonetic_db[kanji].readings;
            else
                result = this.kanji_db[kanji].readings;

            if (!result.length)
                return this.getWKOnyomi(kanji);
            else
                return result;
        },
        // #####################################################################
        // #####################################################################
        getKPhonetic: function(kanji)
        {
            if (kanji in this.kanji_db)
                return this.kanji_db[kanji].phonetic;
            else
                return null;
        },
        // #####################################################################

        // Phonetic DB functions

        // #####################################################################
        getPCompounds: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].compounds;
            else
            {
                GM_log(`The following phonetic is not in the DB!`, phon);
                return null;
            }
        },
        // #####################################################################
        // #####################################################################
        getPReadings: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].readings;
            else
                return [];
        },
        // #####################################################################

        // Sort the readings by their importance (main readings first, then the
        // readings that are at least possible, and finally readings unused in
        // jouyou. Also add styles that reflect their importance.
        // #####################################################################
        getPReadings_style: function(phon)
        {
            let result = [];
            const rnd_length = this.phonetic_db[phon].readings.length;

            if (phon in this.phonetic_db)
            {
                this.phonetic_db[phon].readings.forEach(
                    function(reading, i)
                    {
                        let rnd_count = 0;

                        [phon, ...this.phonetic_db[phon].compounds].forEach(
                            function(compound, j)
                            {
                                if (!(compound in this.kanji_db))
                                    return;

                                // Give a bonus to earlier readings in the phonetic's list
                                if (this.kanji_db[compound].readings[0] === reading)
                                    rnd_count += 10 + (rnd_length-i);
                                else if (this.kanji_db[compound].readings.includes(reading))
                                    rnd_count += 2 + (rnd_length-i);
                            },
                            this
                        );

                        if (!rnd_count)
                            result.push([rnd_count, `<span class="keisei_obscure_reading">${reading}</span>`]);
                        else if (rnd_count < 10)
                            result.push([rnd_count, `<span class="keisei_alternative_reading">${reading}</span>`]);
                        else
                            result.push([rnd_count, `<span class="keisei_main_reading">${reading}</span>`]);
                    },
                    this
                );
            }

            return result.sort((a,b)=>b[0]-a[0]).map((d)=>d[1]);
        },
        // #####################################################################
        // #####################################################################
        getPXRefs: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].xrefs;
            else
                return [];
        },
        // #####################################################################
        // #####################################################################
        getPNonCompounds: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].non_compounds;
            else
                return [];
        },
        // #####################################################################

        genWKRadicalToPhon: function()
        {
            Object.entries(this.phonetic_db).forEach(
                function([phon, data]) {
                    this.wkradical_to_phon[data[`wk-id`]] = phon;
                    this.wkradical_to_phon[phon] = phon;
                },
                this
            );
        },
        // #####################################################################
        mapWKRadicalToPhon: function(radical)
        {
            if (this.wkradical_to_phon && radical in this.wkradical_to_phon)
                return this.wkradical_to_phon[radical];
            else
                return null;
        },
        // #####################################################################
        getWKRadical: function(phon)
        {
            return this.phonetic_db[phon][`wk-radical`];
        },
        // #####################################################################
        getWKRadicalPP: function(phon)
        {
            if (this.phonetic_db && this.phonetic_db[phon][`wk-radical`])
                return _.startCase(this.phonetic_db[phon][`wk-radical`]);
            else
                return `*Not in WK!*`;
        },
        // #####################################################################

        // #####################################################################
        isKanjiInWK: function(kanji)
        {
            return Boolean(this.wk_kanji_db && (kanji in this.wk_kanji_db));
        },
        // #####################################################################

        // #####################################################################
        isFirstReadingInWK: function(kanji)
        {
            if (this.isKanjiInWK(kanji))
            {
                const onyomi = this.getWKOnyomi(kanji);

                return (onyomi.includes(this.getKReadings(kanji)[0]));
            }
            else
                return true;
        },
        // #####################################################################

        // Check if a kanji is considered obscure in regard to its phonetic,
        // ie, the kanji doesn't look like it has the phonetic at all.
        // #####################################################################
        isPObscure: function(kanji)
        {
            return Boolean(this.kanji_db && (`obscure` in this.kanji_db[kanji]));
        },
        // #####################################################################

        getWKOnyomi: function(kanji)
        {
            if (this.isKanjiInWK(kanji))
            {
                if (this.wk_kanji_db[kanji].onyomi !== null)
                    return _.map(this.wk_kanji_db[kanji].onyomi.split(`,`), _.trim);
                else
                    return [];
            }
            else
                return [`*DB Error*`];
        },
        // #####################################################################
        getWKKMeanings: function(kanji)
        {
            let result = [];

            if (this.isKanjiInWK(kanji))
                result = _.map(this.wk_kanji_db[kanji].meaning.split(`,`), _.trim);
            else
            {
                if (this.kanji_db[kanji] === undefined)
                {
                    console.log(`The kanji ${kanji} is not found in the DB!`);
                    result = [];
                }
                else
                    result = this.kanji_db[kanji].meanings;
            }

            return result.map(_.startCase);
        },
        // #####################################################################

        // #####################################################################
        deRendaku: function(reading)
        {
            let result = reading;

            const rendaku = `がぎぐげござじずぜぞだぢちづでどばびぶべぼぱぴぷぺぽ`;
            const vanilla = `かきくけこさしすせそたちしつてとはひふへほはひふへほ`;

            const pattern = _.zip(_.split(rendaku, ``), _.split(vanilla, ``));
            pattern.push([`じょ`, `よ`]);
            pattern.push([`じゃ`, `や`]);
            pattern.push([`じゅ`, `ゆ`]);

            _.forEach(pattern,
                ([from_kana, to_kana]) =>
                    result = result.replace(from_kana, to_kana)
            );

            return result;
        },
        // #####################################################################

        // #####################################################################
        // Support for additional pages listing all tone mark
        // #####################################################################

        // #####################################################################
        getPhoneticsByCompCount: function()
        {
            let result = new Map();

            _.forEach(this.phonetic_db,
                (p_item, phon) => {
                    const comp_len = p_item.compounds.length;

                    if (result.has(comp_len))
                        result.get(comp_len).push(phon);
                    else
                        result.set(comp_len, [phon]);
                }
            );

            result.forEach(
                (phons, count) => {
                    result.set(count, phons.sort(
                        (a,b)=>a.localeCompare(b, "ja-u-co-unihan")));
                }
            );

            return new Map([...result.entries()].sort((a,b)=>b[0]-a[0]));
        },
        // #####################################################################

        // #####################################################################
        getPhoneticsByHeader: function()
        {
            const initials_d = new Map([
                [`あ`, `あいうえお`],
                [`か`, `かきくけこがぎぐげご`],
                [`さ`, `さしすせそざじずぜぞ`],
                [`た`, `たちつてとだぢづでど`],
                [`な`, `なにぬねの`],
                [`は`, `はひふへほばびぶべぼ`],
                [`ま`, `まみむめも`],
                [`ら`, `らりるれろ`],
                [`や`, `やゆよ`],
                [`わ`, `わを`]
            ]);

            let result = new Map();

            initials_d.forEach(
                (subheaders, header) => {
                    result.set(header, new Map());

                    _.forEach(subheaders,
                        (subheader) => {
                            const sub_result = [];

                            _.forEach(this.phonetic_db,
                                (p_item, phon) => {
                                    if (!p_item.readings.length)
                                        return;

                                    if (subheader.match(p_item.readings[0][0]))
                                        sub_result.push([2*p_item.compounds.length +
                                                    (p_item["wk-radical"]?1:0),
                                                    phon]);
                                }
                            );

                            result.get(header).set(subheader,
                                                   sub_result
                                                    .sort((a,b)=>b[0]-a[0])
                                                    .map((d)=>d[1]));
                        }
                    );
                },
                this
            );

            return result;
        }
    };
    // #########################################################################
}
());
// #############################################################################

// #############################################################################
KeiseiDB.prototype.kanji_db    = JSON.parse(GM_getResourceText(`kanji_db`));
KeiseiDB.prototype.phonetic_db = JSON.parse(GM_getResourceText(`phonetic_db`));
KeiseiDB.prototype.wk_kanji_db = JSON.parse(GM_getResourceText(`wk_kanji_db`));
// #############################################################################
