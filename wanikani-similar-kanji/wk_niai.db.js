/* jshint esversion: 6 */

function NiaiDB()
{
    this.override_db = {};
}


// #############################################################################
(function() {
   "use strict";

    NiaiDB.prototype = {
        constructor: NiaiDB,

        init: function(override_db)
        {
            this.override_db = override_db;
        },

        isKanjiInWK: function(kanji)
        {
            return (this.lookup_db[kanji].level !== 99);
        },

        isKanjiInDB: function(kanji)
        {
            return (kanji in this.lookup_db);
        },

        isKanjiLocked: function(kanji, level)
        {
            return (this.lookup_db[kanji].level > level);
        },

        getInfo: function(kanji)
        {
            let info = this.lookup_db[kanji];

            info.readings = info[info.important_reading];

            return this.lookup_db[kanji];
        },

        getSimilar: function(kanji, level, db_names)
        {
            let similar_set = new Set();
            let similar_locked_set = new Set();

            db_names.forEach(
                function(db_name)
                {
                    if (!(kanji in this[db_name]))
                        return;

                    this[db_name][kanji].forEach(
                        function(sim_info)
                        {
                            if (sim_info.score > 0.3)
                            {
                                if (this.isKanjiLocked(sim_info.kan, level))
                                    similar_locked_set.add(sim_info.kan);
                                else
                                    similar_set.add(sim_info.kan);
                            }
                            else if (sim_info.score < 0)
                            {
                                // negative scores are used to delete unwanted
                                // kanji to make it consistent across all DBs
                                // including the user's local db.
                                similar_set.delete(sim_info.kan);
                                similar_locked_set.delete(sim_info.kan);
                            }
                        },
                        this
                    );
                },
                this
            );

            return [...similar_set, ...similar_locked_set];
        }
    };
}
());
// #############################################################################

// #############################################################################
NiaiDB.prototype.keisei_db      = JSON.parse(GM_getResourceText(`from_keisei`));
NiaiDB.prototype.old_script_db  = JSON.parse(GM_getResourceText(`old_script`));
NiaiDB.prototype.yl_radical_db  = JSON.parse(GM_getResourceText(`yl_radical`));
NiaiDB.prototype.stroke_dist_db = JSON.parse(GM_getResourceText(`stroke_dist`));
NiaiDB.prototype.manual_db      = JSON.parse(GM_getResourceText(`manual`));
NiaiDB.prototype.lookup_db      = JSON.parse(GM_getResourceText(`lookup`));
// #############################################################################
