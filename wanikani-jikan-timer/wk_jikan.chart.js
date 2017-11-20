/* jshint esversion: 6 */

// Zoom code (v3!)
// http://bl.ocks.org/nicolashery/9627333

(function()
{
    "use strict";

    var margin = {top: 10, right: 10, bottom: 20, left: 40};
    var height = 128 - margin.top - margin.bottom;
    var barWidth = 12; //Math.floor(Math.min(64, Math.max(3, (width)/nbars)));
    var scrollableWidth = 100*barWidth;
    var maxTime = 20;

    var xScale = d3.scaleLinear().range([0, scrollableWidth]);
    var yScale = d3.scaleLinear().domain([0, maxTime]).rangeRound([height, 0]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale).ticks(5);

    // Tooltip code: http://bl.ocks.org/Caged/6476579
    // #####################################################################
    var tip = d3.tip()
            .attr('class', `${GM_info.script.namespace} d3-tip`)
            .offset([-10, 0])
            .html(function(d) {
                return `<span>
                            <strong>Item:</strong>
                            <span>${d.item.rad||d.item.kan||d.item.voc}</span><br>
                            <strong class="capitalize">Q: ${d.qtype}</strong><br>
                            <span>${d.wasWrong?"Wrong Answer":"Correct Answer"}</span><br>
                            <strong>Time:</strong>
                            <span style='color:red'> ${d.time}s</span>
                        </span>`;
            });
    // // #####################################################################


    var svg;
    var scrollable;
    var zoom;

    function updateScales(start, end)
    {
        xScale.domain([start, end]);
    }

    function drawAxis()
    {
        svg.select('.xaxis').call(xAxis);
        svg.select('.yaxis').call(yAxis);
    }

    function drawFill()
    {
        var g = scrollable.selectAll('g.fill-group')
            .data(['1'])
            .enter()
                .append('g')
                .attr('class', 'fill-group');

        var fill = g.selectAll('.fill').data(['1']);

        fill.enter().append('rect')
            .attr('class', 'fill')
            .attr('width', scrollableWidth)
            .attr('height', height);
    }

    function drawBars(data)
    {
        var g = scrollable.selectAll('g.data-bars')
            .data(['1'])
            .enter()
                .append('g')
                .attr('class', 'data-bars');

        // #####################################################################
        var data_bar = g.selectAll(".data-bar")
                        .data(data)
                        .enter()
                            .append("rect")
                            .attr("class", (d) => `data-bar ${d.type}`);

        data_bar.attr("x", (d,i) => xScale(i) - 0.5)
                .attr("y", (d) => yScale(Math.min(maxTime, d.time)) - 0.5)
                .attr("width", barWidth)
                .attr("height", (d) => height - yScale(Math.min(maxTime, d.time)))
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);

        data_bar.selectAll(".data-bar").exit().remove();

        // this.svg.selectAll("rect").on("click", function(a) {
            // if (`rad` in a.item)
                // window.open(`/radicals/${a.item.rad}`, "_blank");
            // else if (`kan` in a.item)
                // window.open(`/kanji/${a.item.kan}`, "_blank");
            // else if (`voc` in a.item)
                // window.open(`/vocabulary/${a.item.voc}`, "_blank");
        // });
        // #####################################################################
    }

    function onZoom(d)
    {
        d3.event.transform.x = Math.min(0, d3.event.transform.x);
        d3.event.transform.y = 0;

        // create new scale ojects based on event
        var new_xScale = d3.event.transform.rescaleX(xScale);

        // update axes
        svg.select('.xaxis').call(xAxis.scale(new_xScale));

        var transform = d3.event.transform;
        scrollable.selectAll('g.data-bars').attr(`transform`, d3.event.transform);
    }

    // #########################################################################
    WK_Jikan.prototype.createSummaryChart = function(selector)
    {
        var width = $(selector).width() - margin.left - margin.right;

        var maxTime = Math.max(20, d3.quantile(this.session_db.answers.map(a=>a.time).sort((a,b) => (a-b)), 0.95) || 0);
        var barWidth = 12; // Math.floor(Math.min(64, Math.max(3, (width)/nbars)));

        zoom = d3.zoom()
                    .scaleExtent([1, 1]) // Only allow translations
                    .on('zoom', onZoom);

        // #####################################################################
        svg = d3.select(selector)
                        .append("svg")
                            .attr("class", "chart")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                            .attr(`class`, `zoomer`)
                            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                            // Important to listen for "zoom" events on a fixed element,
                            // else you get a jitter/shake effect
                            // http://stackoverflow.com/questions/12674872/d3-force-layout-making-pan-on-drag-zoom-smoother
                            .call(zoom);

        svg.append('clipPath')
                    .attr('id', 'clip')
                .append('rect')
                    .attr('x', 0)
                    // Stretch to cover x axis
                    .attr('y', -margin.top)
                    .attr('width', width)
                    .attr('height', height + margin.bottom + margin.top);

        svg
        .append('g')
            .attr('class', 'yaxis')
            .attr('transform', 'translate(0,0)');

        var scrollableViewBox = svg
                                .append('g')
                                    .attr('clip-path', 'url(#clip)');

        scrollable = scrollableViewBox
                            .append('g')
                                .attr('width', scrollableWidth)
                                .attr('class', 'scrollable');

        scrollable
            .append('g')
                .attr('class', 'xaxis')
                .attr('transform', `translate(0,${height})`);

        svg.call(tip);

        $(window).resize(this.resizeSummaryChart.bind(this));
        // #####################################################################
    };
    // #########################################################################

    WK_Jikan.prototype.resizeSummaryChart = function()
    {
        var width = $(`#jikan_session_chart`).width() - margin.left - margin.right;

        d3.select(`.chart`).attr(`width`, width + margin.left + margin.right);
        d3.select(`#clip`).selectAll(`rect`).attr(`width`, width);
    };

    // #########################################################################
    WK_Jikan.prototype.drawSummaryChart = function()
    {
        updateScales(0, 100);
        drawAxis();
        drawFill();
        drawBars(this.session_db.answers);
    };
    // #########################################################################
}
)();
// #############################################################################
