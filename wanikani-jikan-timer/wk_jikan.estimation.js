/* jshint esversion: 6 */

// #############################################################################
(function()
{
    // #########################################################################
    WK_Jikan.prototype.newItemCallback = function(event)
    {
        this.estimated_time = this.getCompletionEstimate();
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.answeredCallback = function(event, qtype, item)
    {
        var timeDiff = new Date() - this.date_start_time;
        this.date_start_time = new Date();
        console.log("timediff is ", timeDiff);

        var type = this.wki.getItemType(item);
        console.log("got in answered callback", item);

        if (!(item.id in this.measurement_db[type]))
            this.measurement_db[type][item.id] = {"timeReading": [], "timeMeaning": []};

        if (qtype === `reading`)
            this.measurement_db[type][item.id].timeReading.push(timeDiff);
        else if (qtype === `meaning`)
            this.measurement_db[type][item.id].timeMeaning.push(timeDiff);

        console.log(this.measurement_db);

        // TODO: only write on finish?
        GM_setValue(`measurement_db`, JSON.stringify(this.measurement_db));
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
