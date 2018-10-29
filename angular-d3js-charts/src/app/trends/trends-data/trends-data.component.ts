import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
@Component({
  selector: 'app-trends-data',
  templateUrl: './trends-data.component.html',
  styleUrls: ['./trends-data.component.css']
})
export class TrendsDataComponent implements OnInit {

  constructor() {
    console.log('trends');
   }
   ngOnInit() {}
  /*ngOnInit() {
    var margin = { top: 50, right: 0, bottom: 100, left: 100 },
          width = 960 - margin.left - margin.right,
          height = 430 - margin.top - margin.bottom,
          gridSize = Math.floor(width / 24),
          legendElementWidth = gridSize*2,
          buckets = 6,
    			colors = [ "#1a9850", "#66bd63", "#a6d96a", "#d9ef8b", "#ffffbf", "#fee08b", "#fdae61","#f46d43", "#d73027"],
         // colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"], // alternatively colorbrewer.YlGnBu[9]
          days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
          times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];
console.log(d3.json);

d3.dsv(",", "/assets/data/heatmap-data.csv", (d) => {
  
  return {
    date: d.date, // convert "Year" column to Date
    bucket: d.bucket,
    count: d.count,
    length: +d.Length // convert "Length" column to number
  };
}).then(function(data) {
  // var colorScale = d3.scaleQuantize()
  // .domain([buckets - 1, 100])
  // .range([1, 2, 4]);
console.log(data);
  let colorScale = d3.scaleQuantile()
  .domain([0, buckets - 1,24])
  .range([1,2,3]);
  
  let svg1 = d3.select("#chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var dayLabels = svg1.selectAll(".dayLabel")
.data(days)
.enter().append("text")
  .text(function (d) { return d; })
  .attr("x", 0)
  .attr("y", function (d, i) { return i * gridSize; })
  .style("text-anchor", "end")
  .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
  .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

  var timeLabels = svg1.selectAll(".timeLabel")
  .data(times)
  .enter().append("text")
    .text(function(d) { return d; })
    .attr("x", function(d, i) { return i * gridSize; })
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + gridSize / 2 + ", -6)")
    .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

    var heatMap = svg1.selectAll(".hour")
              .data(data)
              .enter().append("rect")
              .attr("x", (d: any) => { return (d.bucket - 1) * gridSize; })
              .attr("y", (d: any) =>{ return (d.count - 1) * gridSize; })
              .attr("rx", 4)
              .attr("ry", 4)
              .attr("class", "hour bordered")
              .attr("width", gridSize)
              .attr("height", gridSize)
              .style("fill", colors[0]);

              heatMap.transition().duration(1000)
              .style("fill", function(d:any) { return colorScale(d.count); });

          heatMap.append("title").text(function(d: any) { return d.bucket; });
           
          var legend = svg1.selectAll(".legend")
            //  .data([0].concat(colorScale.quantiles()), (d) => { return d; })
              .enter().append("g")
              .attr("class", "legend");

          legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });

          legend.append("text")
            .attr("class", "mono")
            .text(function(d) { return "≥ " + Math.round(d); })
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height + gridSize);

});



    console.log('init');
  }*/

}
