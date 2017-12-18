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
        unprocessed:     8  // not yet visited
        }
    );

    this.wkradical_to_phon = {};
}
// #############################################################################

// #############################################################################
(function() {
   "use strict";

    // #####################################################################
    const upperAll = function(string, delim=` `)
    {
        const tmp = string.split(delim);
        let words = [];

        for (let i = 0; i < tmp.length; i++)
            words.push(tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1));

        let result = words.join(` `);

        if (result.length > 15)
            return result.slice(0, 12) + `...`;
        else
            return result;
    };
    // #####################################################################


    KeiseiDB.prototype = {
        constructor: KeiseiDB,

        // #####################################################################
        init: function()
        {
            this.genWKRadicalToPhon();
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
            Object.keys(this.phonetic_db).forEach(
                function(phon) {
                    const data = this.phonetic_db[phon];

                    this.wkradical_to_phon[data[`wk-radical`]] = phon;
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
                return upperAll(this.phonetic_db[phon][`wk-radical`], `-`);
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
                return this.wk_kanji_db[kanji].onyomi.split(`,`);
            else
                return [`*DB Error*`];
        },
        // #####################################################################
        // TODO: correctly upper meanings with multiple words
        getWKKMeaning: function(kanji)
        {
            if (this.isKanjiInWK(kanji))
                return this.wk_kanji_db[kanji].meaning.split(`,`).map((s) => upperAll(s, ` `));
            else
                return this.kanji_db[kanji].meaning.map((s) => upperAll(s, ` `));
        }
        // #####################################################################
    };
}
());
// #############################################################################

// #############################################################################
KeiseiDB.prototype.kanji_db    = JSON.parse(GM_getResourceText(`kanji_db`));
KeiseiDB.prototype.phonetic_db = JSON.parse(GM_getResourceText(`phonetic_db`));
KeiseiDB.prototype.wk_kanji_db = JSON.parse(GM_getResourceText(`wk_kanji_db`));
// #############################################################################
