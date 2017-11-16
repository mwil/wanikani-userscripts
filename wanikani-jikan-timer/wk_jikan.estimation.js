/* jshint esversion: 6 */

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.newItemCallback = function(event)
    {
        this.date_start_time = new Date();
        this.estimated_time = this.getCompletionEstimate();

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.answeredCallback = function(event, qtype, item)
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
