/* jshint esversion: 6 */


function WKKanjiDB()
{
}

(function() {
   "use strict";

    WKKanjiDB.prototype = {
        // #####################################################################
        init: function() {},
        // #####################################################################

        // #####################################################################
        upper: function(string)
        {
            var tmp = string.split(" ");
            var result = [];

            for (var i = 0; i < tmp.length; i++)
                result.push(tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1));

            return result.join(" ");
        },
        // #####################################################################


        // #####################################################################
        checkKanji: function(kanji)
        {
            return this.wk_kanji_db && (kanji in this.wk_kanji_db);
        },
        // #####################################################################

        // #####################################################################
        // TODO: correctly upper meanings with multiple words
        getKMeaning: function(kanji)
        {
            if (this.checkKanji(kanji))
            {
                return this.wk_kanji_db[kanji].meaning.split(",").map(this.upper);
            }
            else
                return ["*Not in WK!*"];
        }
        // #####################################################################
    };
}());

WKKanjiDB.prototype.wk_kanji_db = JSON.parse(GM_getResourceText("wk_kanji"));
