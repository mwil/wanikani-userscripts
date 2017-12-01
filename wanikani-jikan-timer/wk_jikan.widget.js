/* jshint esversion: 6 */

(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.updateWidget = function()
    {
        var reviews_now_time  = new Date();
        var date_elapsed_time = new Date(reviews_now_time - this.reviews_start_time);
        var fmt_elapsed_time = date_elapsed_time.toISOString().substr(11, 8);

        this.estimated_time = Math.max(0, this.estimated_time - 1000);
        var fmt_estimated_time = new Date(this.estimated_time).toISOString().substr(11, 8);

        $(`#jikan_elapsed`).text(` ${fmt_elapsed_time}`);
        $(`#jikan_estimate`).text(` ${fmt_estimated_time}`);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.initWidgetChart = function()
    {
        this.getTimes = function(db) {
            var result = [];

            [`rad`, `kan`, `voc`].forEach( function(type) {
                 Object.keys(db[type]).forEach( function(key) {
                    result = result.concat(db[type][key].timeMeaning);
                    result = result.concat(db[type][key].timeReading);
                 }, this);
            }, this);

            return result.sort((a,b) => (a-b));
        };

        var width = 6, height = 60;
        var nbars = 20;
        var maxTime = Math.max(20, d3.quantile(this.getTimes(this.measurement_db), 0.9)/1000 || 20);
        console.log("The q90 was", d3.quantile(this.getTimes(this.measurement_db), 0.9)/1000);

        // #####################################################################
        this.chart = d3.select("#jikan_chart")
                     .append("svg")
                     .attr("class", "chart")
                     .attr("width", width * nbars + 3)
                     .attr("height", height);
        // #####################################################################

        // #####################################################################
        var xScale = d3.scaleLinear()
                     .domain([0, 1])
                     .range([0, width]);

        var yScale = d3.scaleLinear()
                     .domain([0, maxTime])
                     .rangeRound([height, 0]);
        // #####################################################################

        // Underline all bars
        // #####################################################################
        this.chart.append("line")
                  .attr("transform", "translate(2,0)")
                  .attr("x1", 0)
                  .attr("x2", width * nbars)
                  .attr("y1", height-0.5)
                  .attr("y2", height-0.5)
                  .attr("stroke", "#000");
        // #####################################################################

        // #####################################################################
        // #####################################################################
        WK_Jikan.prototype.redrawWidgetChart = function()
        {
            // get the starting ID of the current session
            var start_id;

            if (this.session_db.sessions.length)
                start_id = this.session_db.sessions.slice(-1)[0].start_index +
                           this.session_db.sessions.slice(-1)[0].answer_cnt;
            else
                start_id = 0;

            var rect = this.chart.selectAll("rect")
                       .data(this.session_db.answers.slice(start_id).slice(-nbars),
                             (d) => d.index)
                       .attr("class", (d) => `answer-type ${d.type}`);

            // only shift elements in from the right when all 20 bars are there
            var xoffset = (this.session_db.answers.slice(start_id).length >= 20) ? 1 : 0;

            rect
            .enter()
                .insert("rect", "line")
                .attr("class", (d) => `answer-type ${d.type}`)
                .attr("transform", "translate(2,0)")
                .attr("x", (d,i) => xScale(i+xoffset) - 0.5)
                .attr("y", height)
                .attr("width", width)
                .attr("height", 0)
            .transition()
                .duration(1000)
                .attr("x", (d,i) => xScale(i) - 0.5)
                .attr("y", (d) => yScale(Math.min(maxTime, d.time)) - 0.5)
                .attr("height", (d) => height - yScale(Math.min(maxTime, d.time)));

            rect.transition()
                .duration(1000)
                .attr("x", (d,i) => xScale(i) - 0.5);

            rect
            .exit()
                .transition()
                .duration(1000)
                .attr("x", (d,i) => xScale(i - 1) - 0.5)
            .remove();
        };
        // #####################################################################
        // #####################################################################

        this.redrawWidgetChart();
    };
}
)();
// #############################################################################

