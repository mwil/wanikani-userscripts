/* jshint esversion: 6 */


function WKKanjiDB()
{
}

(function() {
   "use strict";

    WKKanjiDB.prototype = {
        constructor: WKKanjiDB,

        // #####################################################################
        init: function() {},
        // #####################################################################

        // #####################################################################
        upper: function(string)
        {
            var tmp = string.split(` `);
            var result = [];

            for (var i = 0; i < tmp.length; i++)
                result.push(tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1));

            result = result.join(` `);

            if (result.length > 12)
                return result.slice(0, 9) + `...`;
            else
                return result;
        },
        // #####################################################################


        // #####################################################################
        isKanjiInWK: function(kanji)
        {
            return this.wk_kanji_db && (kanji in this.wk_kanji_db);
        },
        // #####################################################################

        getOnyomi: function(kanji)
        {
            if (this.isKanjiInWK(kanji))
                return this.wk_kanji_db[kanji].onyomi.split(`,`);
            else
                return [`*DB Error*`];
        },
        // #####################################################################
        // TODO: correctly upper meanings with multiple words
        getKMeaning: function(kanji)
        {
            if (this.isKanjiInWK(kanji))
            {
                return this.wk_kanji_db[kanji].meaning.split(`,`).map(this.upper);
            }
            else
                return [`*Not in WK!*`];
        }
        // #####################################################################
    };
}());

WKKanjiDB.prototype.wk_kanji_db = JSON.parse(GM_getResourceText(`wk_kanji`));
