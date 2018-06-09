/* jshint esversion: 6 */
/* jshint scripturl:true */

// WK Simulator

// #############################################################################
function WK_Sim()
{
    this.WK_GRAPH = JSON.parse(GM_getResourceText(`wk_graph`));

    this.STATS_LEVEL = {
        day: [],
        level: [],
        review_cnt: [0],
        queue_cnt: [],
        srs_level_cnt: [],
    };

    this.STATS_DAILY = {
        day: [],
        level: [],
        review_cnt: [0],
        queue_cnt: [],
        srs_level_cnt: [],
    };

    this.STATS_TOTAL = {
        review_cnt: 0,    // Number of reviews until everything burned
        review_60_cnt: 0  // Number of reviews needed to reach level 60 only
    };

    // Intervals that apply only to levels 1--2
    // https://community.wanikani.com/t/unofficial-faq/30750
    // Radicals have extra -2h for Apprentice 1! Adjustment in review routine.
    this.START_INTERVALS = [
        4,    // Apprentice 1
        4,    // Apprentice 2
        8,    // Apprentice 3
        23,   // Apprentice 4
        167,  // Guru 1
        335,  // Guru 2
        719,  // Master
        2879, // Enlightened
        0     // Burned
    ];

    // https://community.wanikani.com/t/srs-time-intervals-v670/18097/2
    // Wanikani's SRS intervals in hours; time spent on level
    this.LATER_INTERVALS = [
        4,    // Apprentice 1
        8,    // Apprentice 2
        23,   // Apprentice 3
        47,   // Apprentice 4
        167,  // Guru 1
        335,  // Guru 2
        719,  // Master
        2879, // Enlightened
        0     // Burned
    ];

    this.CORRECT_READ_P = 0.95;
    this.CORRECT_MEAN_P = 0.95;

    // Try to do this number of lessons per session (in one "lesson hour")
    this.LESSON_BATCH_SIZE = 200;
    this.LESSONS_TODAY = 0;

    this.LESSON_HOURS = new Set(Array(24).keys());
    this.REVIEW_HOURS = new Set(Array(24).keys());
    // this.REVIEW_HOURS = new Set([8, 20]);

    this.NOW_H = 0;
    this.WK_LEVEL = 1;

    this.INTERVALS = this.START_INTERVALS;

    this.R_QUEUE = [{"id": -1}];
    this.L_QUEUE = [];

    this.UNLOCKED = new Set();
    this.GURU_ED = new Set();
    this.BURNED = new Set();
    this.CURRENT_KANJI = new Set();

    // this set should only contain the guru'ed items of the current level!
    this.CURRENT_GURU = new Set();
}
// #############################################################################

// #############################################################################
(function()
{
    "use strict";

    // #########################################################################
    WK_Sim.prototype.performReviews = function()
    {
        let new_queue = [];

        // Perform all available reviews ...
        _.forEach(this.R_QUEUE, (subject) =>
            {
                // ignore the bootstrap item from the start queue
                if (subject.id < 0)
                    return;

                let new_subject = Object.assign({}, subject);

                // review time is in the future, skip
                if (new_subject.next_review_h > this.NOW_H)
                {
                    new_queue.push(new_subject);
                    return;
                }

                this.STATS_DAILY.review_cnt[this.STATS_DAILY.review_cnt.length-1] += 1;
                this.STATS_LEVEL.review_cnt[this.STATS_LEVEL.review_cnt.length-1] += 1;

                // we got a correct review?
                if (Math.random() <= this.CORRECT_MEAN_P &&
                    (subject.object === "radical" || Math.random() <= this.CORRECT_READ_P))
                {
                    new_subject.srs_level += 1;
                    new_subject.next_review_h = this.NOW_H + this.INTERVALS[new_subject.srs_level];

                    // Did we guru an item?
                    switch (new_subject.srs_level)
                    {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        case 4:
                            // Don't re-add already guru'ed kanji again
                            if (subject.level === this.WK_LEVEL &&
                                subject.object === "kanji")
                                this.CURRENT_GURU.add(new_subject.id);

                            this.GURU_ED.add(new_subject.id);

                            break;
                        case 5:
                        case 6:
                        case 7:
                            break;
                        default:
                            // burned levels
                            this.BURNED.add(new_subject.id);
                            return;
                    }
                }
                else
                {
                    new_subject.srs_level = Math.max(0, new_subject.srs_level-1);
                    new_subject.next_review_h = this.NOW_H + this.INTERVALS[new_subject.srs_level];

                    // Extra adjustment for the fast levels 1+2 radicals
                    if (new_subject.object === "radical" &&
                            this.WK_LEVEL < 3 &&
                            new_subject.srs_level === 0)
                        new_subject.next_review_h -= 2;

                    // console.log(`Error in review, new subject`, new_subject);
                }

                // console.log(`Pushing changed subject to queue`, new_subject);
                new_queue.push(new_subject);
            }
        );

        this.R_QUEUE = new_queue;
    };
    // #########################################################################

    // #########################################################################
    WK_Sim.prototype.performLessons = function()
    {
        let new_queue = [];

        _.forEach(this.L_QUEUE, (subject) =>
            {
                if (this.LESSONS_TODAY >= this.LESSON_BATCH_SIZE)
                {
                    new_queue.push(subject);
                    return;
                }

                subject.next_review_h = this.NOW_H + this.INTERVALS[0];
                this.R_QUEUE.push(subject);

                this.LESSONS_TODAY += 1;
            }
        );

        this.L_QUEUE = new_queue;
    };
    // #########################################################################

    // #########################################################################
    WK_Sim.prototype.unlockSubjects = function()
    {
        _.forEach(this.WK_GRAPH, (subjects_on_level, level) =>
            {
                if (this.WK_LEVEL < level)
                    return;

                _.forEach(subjects_on_level, (subject) =>
                    {
                        // We already have this subject in queue
                        if (this.UNLOCKED.has(subject.id))
                            return;

                        // Did we unlock all components already?
                        if (`component` in subject &&
                            subject.component.filter(x => !this.GURU_ED.has(x)).length)
                            return;

                        const new_item = {
                            "id": subject.id,
                            "level": subject.level,
                            "object": subject.object,
                            "srs_level": 0,
                            "next_review_h": this.NOW_H + this.INTERVALS[0]
                        };

                        this.L_QUEUE.push(new_item);
                        this.UNLOCKED.add(subject.id);
                    }
                );
            }
        );
    };
    // #########################################################################

    // #########################################################################
    WK_Sim.prototype.collectCurrentKanji = function()
    {
        this.CURRENT_KANJI.clear();

        _.forEach(this.WK_GRAPH, (subjects_on_level, level) =>
            {
                if (this.WK_LEVEL != level)
                    return;

                _.forEach(subjects_on_level, (subject) =>
                    {
                        if (subject.object !== "kanji")
                            return;

                        this.CURRENT_KANJI.add(subject.id);
                    }
                );
            }
        );
    };
    // #########################################################################

    // #########################################################################
    WK_Sim.prototype.checkLevelUp = function()
    {
        if (this.CURRENT_KANJI.size &&
           (this.CURRENT_GURU.size / this.CURRENT_KANJI.size) >= 0.9)
        {
            this.WK_LEVEL += 1;

            console.log(`LEVEL UP!!! NEW LEVEL IS`, this.WK_LEVEL,
                        `on day`, this.NOW_H/24);

            if (this.WK_LEVEL > 2)
                this.INTERVALS = this.LATER_INTERVALS;

            this.CURRENT_GURU.clear();

            this.collectCurrentKanji();

            // #################################################################
            this.STATS_LEVEL.day.push(Math.floor(this.NOW_H/24));
            this.STATS_LEVEL.level.push(this.WK_LEVEL-1);
            this.STATS_LEVEL.queue_cnt.push(this.R_QUEUE.length);
            this.STATS_LEVEL.review_cnt.push(0);

            this.stats_analyzeQueue(this.STATS_LEVEL);

            if (this.WK_LEVEL === 61)
            {
                this.STATS_TOTAL.review_60_cnt =
                    this.STATS_DAILY.review_cnt.reduce((acc, val) => acc+val);
            }
            // #################################################################
        }
    };
    // #########################################################################

    // #########################################################################
    WK_Sim.prototype.stats_analyzeQueue = function(target)
    {
        let result = {};

        for (let i = 0; i < this.INTERVALS.length; i++)
            result[i] = 0;

        _.forEach(this.R_QUEUE, (subject, id) =>
            {
                result[subject.srs_level] += 1;
            }
        );

        target.srs_level_cnt.push(result);
    };
    // #########################################################################

    // #########################################################################
    WK_Sim.prototype.run = function()
    {
        this.collectCurrentKanji();

        while (this.R_QUEUE.length)
        {
            // console.log(`STARTING NEW ROUND AT HOUR`, this.NOW_H,
            //             `with queue length`, this.R_QUEUE.length);

            if (this.REVIEW_HOURS.has(this.NOW_H%24))
            {
                this.performReviews();
                this.checkLevelUp();
                this.unlockSubjects();
            }

            if (this.LESSON_HOURS.has(this.NOW_H%24))
            {
                this.performLessons();
            }

            if (this.NOW_H && (this.NOW_H % 24) === 0)
            {
                this.LESSONS_TODAY = 0;

                // update daily stats ...
                this.STATS_DAILY.day.push(this.NOW_H/24);
                this.STATS_DAILY.level.push(this.WK_LEVEL);
                this.STATS_DAILY.queue_cnt.push(this.R_QUEUE.length);
                this.STATS_DAILY.review_cnt.push(0);

                this.stats_analyzeQueue(this.STATS_DAILY);
            }

            this.NOW_H += 1;
        }

        console.log(`Finished the simulation ...`);

        this.STATS_TOTAL.review_cnt =
            this.STATS_DAILY.review_cnt.reduce((acc, val) => acc+val);

        const $top = $(`<div></div>`)
                        .attr(`id`, `sim_summary`)
                        .addClass(`${GM_info.script.namespace} container`);

        $(`.container:eq(2)`).hide().after($top);

        $(`<div></div>`) .text(JSON.stringify(this.STATS_LEVEL))
            .prepend(`<h1>Per-Level Stats</h1>`).appendTo($top);
        $(`<div></div>`).text(JSON.stringify(this.STATS_DAILY))
            .prepend(`<h1>Daily Stats</h1>`).appendTo($top);
        $(`<div></div>`).text(JSON.stringify(this.STATS_TOTAL))
            .prepend(`<h1>Overall Stats</h1>`).appendTo($top);
    };
    // #########################################################################
}
)();
// #############################################################################

// #############################################################################
// #############################################################################
var wk_sim = new WK_Sim();

wk_sim.run();
// #############################################################################
// #############################################################################

