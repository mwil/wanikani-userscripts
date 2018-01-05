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

        hasRelated: function(character, settings)
        {
            if (this.doushi_db && character in this.doushi_db)
                return (this.getRelated(character, settings).length > 0);
            else
                return false;
        },

        getRelated: function(character, settings)
        {
            let related = [];

            if (settings.with_same_kanji)
                related = related.concat(this.doushi_db[character].same_kanji);

            if (settings.with_same_kana)
                related = related.concat(this.doushi_db[character].same_kana);

            if (settings.with_same_stem)
                related = related.concat(this.doushi_db[character].same_stem);

            if (settings.with_same_meaning)
                related = related.concat(this.doushi_db[character].same_meaning);

            if (settings.with_conjugated)
                related = related.concat(this.doushi_db[character].conjugated);

            return related;
        },

        getWKInfo: function(character)
        {
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
