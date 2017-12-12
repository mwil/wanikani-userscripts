/* jshint esversion: 6 */

// #############################################################################
function DoushiDB()
{
}
// #############################################################################

// #############################################################################
(function() {
   "use strict";

    DoushiDB.prototype = {
        constructor: DoushiDB,

        init: function() {},

        isVerb: function(subject)
        {
            return Boolean(this.wk_verbs_db && subject in this.wk_verbs_db);
        },

        hasRelated: function(character)
        {
            if (this.doushi_db && character in this.doushi_db)
                return (this.getRelated(character).length > 0);
            else
                return false;
        },

        getRelated: function(character)
        {
            var related = [
                ...this.doushi_db[character].same_kanji,
                ...this.doushi_db[character].same_kana,
                ...this.doushi_db[character].same_meaning
            ];

            return related;
        },

        getWKInfo: function(character)
        {
            console.log("looking for", character);
            console.log("in db", this.wk_verbs_db[character]);

            if (this.wk_verbs_db && character in this.wk_verbs_db)
                return this.wk_verbs_db[character];
            else
                return {};
        }
    };
}
());
// #############################################################################

DoushiDB.prototype.doushi_db   = JSON.parse(GM_getResourceText(`doushi_db`));
DoushiDB.prototype.wk_verbs_db = JSON.parse(GM_getResourceText(`wk_verbs_db`));
