/* jshint esversion: 6 */

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.newItemCallback = function(event)
    {
        this.date_start_time = new Date();
        this.estimated_time = this.getCompletionEstimateDB();

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.answeredCallback = function(event, wasWrong, qtype, item)
    {
        var timeDiff = new Date() - this.date_start_time;
        var type = this.wki.getItemType(item);

        var meas = {
            "item": item,
            "timeReading": [],
            "timeMeaning": [],
        };

        var sess_meas = {
            "index": this.session_measurements.length+1,
            "item": item,
            "type": type,
            "qtype": qtype,
            "wasWrong": wasWrong,
            "time": timeDiff/1000
        };

        if (item.id in this.measurement_db[type])
            meas = this.measurement_db[type][item.id];
        else
            this.measurement_db[type][item.id] = meas;

        if (qtype === `reading`)
            meas.timeReading.push(timeDiff);
        else if (qtype === `meaning`)
            meas.timeMeaning.push(timeDiff);

        console.log(this.measurement_db);

        // TODO: only write on finish?
        GM_setValue(`measurement_db`, JSON.stringify(this.measurement_db));

        this.session_measurements.push(sess_meas);
        GM_setValue(`last_session_measurements`, JSON.stringify(this.session_measurements));
        this.redrawWidgetChart();

        return false;
    };
    // #########################################################################

    WK_Jikan.prototype.getCompletionEstimateDB = function()
    {
        var activeQueue = $.jStorage.get(`activeQueue`);
        var reviewQueue = $.jStorage.get(`reviewQueue`);

        var estimated_time = 0;

        var meaning_est = {"rad": [], "kan": [], "voc": []};
        var reading_est = {"rad": [], "kan": [], "voc": []};

        var db = this.measurement_db;

        [`rad`, `kan`, `voc`].forEach( function(type) {
                Object.keys(db[type]).forEach( function(key) {
                    meaning_est[type] = meaning_est[type].concat(db[type][key].timeMeaning);
                    reading_est[type] = reading_est[type].concat(db[type][key].timeReading);
                }, this);
        }, this);

        // TODO: did we previously answered reading or meaning?
        [activeQueue, reviewQueue].forEach( function(queue) {
            queue.forEach( function(item) {
                if (`voc` in item)
                {
                    if (!$.jStorage.get(`v${item.id}`))
                        estimated_time += d3.mean(meaning_est[`voc`]) || 10000;

                    estimated_time += d3.mean(reading_est[`voc`]) || 10000;
                }
                else if (`kan` in item)
                {
                    if (!$.jStorage.get(`k${item.id}`))
                        estimated_time += d3.mean(meaning_est[`kan`]) || 10000;

                    estimated_time += d3.mean(reading_est[`kan`]) || 10000;
                }
                else if (`rad` in item)
                {
                    estimated_time += d3.mean(meaning_est[`rad`]) || 10000;
                }
            }, this);
        }, this);

        return estimated_time;
    };
    // #########################################################################
    // #########################################################################
    // The estimate depends on:
    // -- elements in the activaQueue (up to 10 items)
    // -- elements in the reviewQueue (the rest)
    // -- elements could be answered partially ({r,k,v}+id in jStorage)
    WK_Jikan.prototype.getCompletionEstimate = function()
    {
        var activeQueue = $.jStorage.get(`activeQueue`);
        var reviewQueue = $.jStorage.get(`reviewQueue`);

        var estimated_time = 0;

        [activeQueue, reviewQueue].forEach( function(queue) {
            queue.forEach( function(item) {
                if (`voc` in item)
                {
                    if (!$.jStorage.get(`v${item.id}`))
                        estimated_time += 10000;

                    estimated_time += 10000;
                }
                else if (`kan` in item)
                {
                    if (!$.jStorage.get(`k${item.id}`))
                        estimated_time += 10000;

                    estimated_time += 10000;
                }
                else if (`rad` in item)
                {
                    estimated_time += 10000;
                }
            }, this);
        }, this);

        return estimated_time;
    };
    // #########################################################################

}
)();
// #############################################################################
