
/* jshint esversion: 6 */

(function()
{
    "use strict";

    // #########################################################################
    WK_Jikan.prototype.drawSummaryChart = function()
    {
        // #####################################################################
        this.chart = d3.select("#jikan_last_session_chart")
                       .append("svg:svg")
                       .attr("class", "chart");
        // #####################################################################

        var width = $(`#jikan_last_session_chart`).width();
        var h = 128;
        var nbars = this.session_measurements.length;
        var barWidth = Math.floor(Math.min(64, Math.max(6, (width-40)/nbars))); // 16
        var maxTime = 20;

        //responsive SVG needs these 2 attributes and no width and height attr
        // https://stackoverflow.com/a/25978286/2699475
        this.chart.attr("viewBox", `0 0 ${width} ${h+16}`)
                  .attr("preserveAspectRatio", "none")
                  // keep the height
                  // https://stackoverflow.com/a/27894310/2699475
                  .attr("width", "100%")
                  .attr("height", h)
                  //class to make it responsive
                  .classed("svg-content-responsive", true);

        // #####################################################################
        var xScale = d3.scaleLinear()
                    .domain([0, nbars])
                    .range([0, barWidth*nbars]);

        var yScale = d3.scaleLinear()
                    .domain([0, maxTime])
                    .rangeRound([h, 0]);

        var xAxis = d3.axisBottom(xScale).ticks(0);
        var yAxis = d3.axisLeft(yScale).ticks(5, "s");
        // #####################################################################

        // Tooltip code: http://bl.ocks.org/Caged/6476579
        // #####################################################################
        var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                    return `<span>
                                <strong>Item:</strong>
                                <span>${d.item.rad||d.item.kan||d.item.voc}</span><br>
                                <strong>Time:</strong>
                                <span style='color:red'> ${d.time}s</span>
                            </span>`;
                });

        this.chart.call(tip);
        // #####################################################################

        // #####################################################################
        this.chart.selectAll("rect")
                .data(this.session_measurements)
            .enter().append("svg:rect")
                .attr("class", "bar")
                .attr("transform", "translate(42,8)")
                .attr("x", function(d, i) { return xScale(i) - 0.5; })
                .attr("y", function(d) { return yScale(d.time) - 0.5; })
                .attr("width", barWidth)
                .attr("height", function(d) { return h - yScale(d.time); })
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);
        // #####################################################################

        this.chart.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(40, ${h+8})`)
                .call(xAxis);

        this.chart.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(40, 8)")
                .call(yAxis);

        this.chart.selectAll("rect").on("click", function(a){
            if (`rad` in a.item)
                window.open(`/radicals/${a.item.rad}`, "_blank");
            else if (`kan` in a.item)
                window.open(`/kanji/${a.item.kan}`, "_blank");
            else if (`voc` in a.item)
                window.open(`/vocabulary/${a.item.voc}`, "_blank");
        });
    };
}
)();
// #############################################################################
