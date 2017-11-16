/* jshint esversion: 6 */

(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.updateWidget = function()
    {
        var date_reviews_end  = new Date();
        var date_elapsed_time = new Date(date_reviews_end - this.date_reviews_start);
        var fmt_elapsed_time = date_elapsed_time.toISOString().substr(11, 8);

        this.estimated_time = Math.max(0, this.estimated_time - 1000);
        var fmt_estimated_time = new Date(this.estimated_time).toISOString().substr(11, 8);

        $(`#jikan_elapsed`).text(` ${fmt_elapsed_time}`);
        $(`#jikan_estimate`).text(` ${fmt_estimated_time}`);

        GM_setValue(`reviews_fmt_elapsed_time`, fmt_elapsed_time);
    };
    // #########################################################################

    // #########################################################################
    WK_Jikan.prototype.initWidgetChart = function()
    {
        var w = 6, h = 60;
        var nbars = 20;
        var maxTime = 20;

        // #####################################################################
        this.chart = d3.select("#jikan_chart")
                     .append("svg:svg")
                     .attr("class", "chart")
                     .attr("width", w * nbars + 3)
                     .attr("height", h);
        // #####################################################################

        // #####################################################################
        var xScale = d3.scaleLinear()
                     .domain([0, 1])
                     .range([0, w]);

        var yScale = d3.scaleLinear()
                     .domain([0, maxTime])
                     .rangeRound([h, 0]);
        // #####################################################################

        // #####################################################################
        this.chart.selectAll("rect")
                  .data(this.session_measurements)
              .enter().append("svg:rect")
                  .attr("transform", "translate(2,0)")
                  .attr("x", function(d, i) { return xScale(i) - 0.5; })
                  .attr("y", function(d) { return yScale(d.time) - 0.5; })
                  .attr("width", w)
                  .attr("height", function(d) { return h - yScale(d.time); });
        // #####################################################################

        // Underline all bars
        // #####################################################################
        this.chart.append("svg:line")
                  .attr("x1", 0)
                  .attr("x2", w * nbars)
                  .attr("y1", h-0.5)
                  .attr("y2", h-0.5)
                  .attr("stroke", "#000");
        // #####################################################################

        // #####################################################################
        // #####################################################################
        WK_Jikan.prototype.redrawChart = function()
        {
            var rect = this.chart.selectAll("rect")
                    .data(this.session_measurements.slice(-nbars), function(d) { return d.index; });

            rect.enter().insert("svg:rect", "line")
                .attr("transform", "translate(2,0)")
                .attr("x", function(d, i) { return xScale(i+1) - 0.5; })
                .attr("y", h)
                .attr("width", w)
                .attr("height", 0)
            .transition()
                .duration(1000)
                .attr("x", function(d, i) { return xScale(i) - 0.5; })
                .attr("y", function(d) { return yScale(d.time) - 0.5; })
                .attr("height", function(d) { return h - yScale(d.time); });

            rect.transition()
                .duration(1000)
                .attr("x", function(d, i) { return xScale(i) - 0.5; })
                .attr("width", w);

            rect.exit().transition()
                .duration(1000)
                .attr("x", function(d, i) { return xScale(i - 1) - 0.5; })
            .remove();
        };
        // #####################################################################
        // #####################################################################
    };
}
)();
// #############################################################################

