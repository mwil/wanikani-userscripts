/* jshint esversion: 6 */

// #############################################################################
(function()
{
    "use strict";

    var answer_cnt = 0;

    // #########################################################################
    var addTime = function(obj, time, type)
    {
        if (type === `reading`)
            obj.timeReading.push(time);
        else if (type === `meaning`)
            obj.timeMeaning.push(time);
    };
    // #########################################################################


    // #########################################################################
    WK_Jikan.prototype.newItemCallback = function(event)
    {
        this.answer_start_time = event.timeStamp;
        this.estimated_time = this.getCompletionEstimateDB();

        return false;
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.answeredCallback = function(event, wasWrong, qtype, item)
    {
        var timeDiff = event.timeStamp - this.answer_start_time;
        var type = this.wki.getItemType(item);

        var answer = new SessionAnswer(this.session_db[`answers`].length, item, type, qtype, wasWrong, timeDiff/1000);

        if (!(item.id in this.measurement_db[type]))
            this.measurement_db[type][item.id] = new ItemMeasurements(item);

        addTime(this.measurement_db[type][item.id], timeDiff, qtype);

        console.log(this.measurement_db);

        answer_cnt++;
        this.session_db[`answers`].push(answer);

        GM_setValue(`measurement_db`, JSON.stringify(this.measurement_db));
        GM_setValue(`session_db`, JSON.stringify(this.session_db));

        this.redrawWidgetChart();

        return false;
    };
    // #########################################################################

    // Append a session summary only if we answered some questions
    // #########################################################################
    WK_Jikan.prototype.sessionFinishedCallback = function()
    {
        var reviews_now_time  = new Date();
        var elapsed_time = reviews_now_time - this.reviews_start_time;

        if (answer_cnt > 0)
            this.session_db.sessions.push(
                new Session(this.session_db.answers.length - answer_cnt,
                            this.reviews_start_time.getTime(),
                            reviews_now_time.getTime(),
                            elapsed_time,
                            answer_cnt,
                            this.initial_estimate
                )
            );

        GM_setValue(`session_db`, JSON.stringify(this.session_db));

        return false;
    };
    // #########################################################################

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

                    if (`type` !== `rad`)
                        reading_est[type] = reading_est[type].concat(db[type][key].timeReading);
                }, this);
        }, this);

        // TODO: did we previously answered reading or meaning?
        [activeQueue, reviewQueue].forEach( function(queue) {
            queue.forEach( function(item) {
                var type;

                if (`rad` in item)
                    type = `rad`;
                else if (`kan` in item)
                    type = `kan`;
                else if (`voc` in item)
                    type = `voc`;
                else
                    return;

                var sId = `${type[0]}${item.id}`;
                var sItem = $.jStorage.get(sId);

                if (!sItem || !(`rc` in sItem))
                    estimated_time += d3.mean(reading_est[type]) || 10000;
                if (!sItem || !(`mc` in sItem))
                    estimated_time += d3.mean(meaning_est[type]) || 10000;
            }, this);
        }, this);

        return estimated_time;
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
function SessionAnswer(index, item, type, qtype, wasWrong, timeDiff)
{
    this.index = index;
    this.item = item;
    this.type = type;
    this.qtype = qtype;
    this.wasWrong = wasWrong;
    this.time = timeDiff;
}
// #############################################################################

// #############################################################################
function ItemMeasurements(item)
{
    this.item = item;
    this.timeReading = [];
    this.timeMeaning = [];
}
// #############################################################################

// #############################################################################
function Session(index, start_date, end_date, elapsed_time, answer_cnt, estimate)
{
    this.start_index = index;
    this.start_time = start_date;
    this.end_time = end_date;
    this.elapsed_time = elapsed_time;
    this.answer_cnt = answer_cnt;
    this.estimate = estimate;
}
// #############################################################################

