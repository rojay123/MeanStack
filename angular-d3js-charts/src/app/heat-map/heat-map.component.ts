import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { VpnDataService } from '../services/vpn-data.service';
declare var datatrans :any;

//import * as data from '.assets/data/trans.js' 
declare var CalHeatMap: any;
@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
   width = 900;
    height = 105;
  data: any = null;
  percent:any;
  day: any;
  week:any;
  cellSize = 12;
  format:any;
  week_days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor(private dataService: VpnDataService) {
   
  }

   numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
};

monthPath(t0) {
  let day;
  var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0);
   var d0 = +this.day(t0), w0 = +this.week(t0);
     var d1 = +this.day(t1), w1 = +this.week(t1);
  return "M" + (w0 + 1) *this.cellSize + "," + d0 * this.cellSize
      + "H" + w0 * this.cellSize + "V" + 7 *this. cellSize
      + "H" + w1 * this.cellSize + "V" + (d1 + 1) * this.cellSize
      + "H" + (w1 + 1) * this.cellSize + "V" + 0
      + "H" + (w0 + 1) *this. cellSize + "Z";
}
  ngOnInit() { 
    
   // cellSize = 12; // cell size
  
	
this.day = d3.timeFormat("%w");
this.week = d3.timeFormat("%U");
this.percent = d3.format(".1%");
this.format = d3.timeFormat("%Y%m%d");
var	parseDate = d3.timeFormat("%Y%m%d");
var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("#calender-map").selectAll("svg")
    .data(d3.range(2011, 2015))
  .enter().append("svg")
    .attr("width", '100%')
    .attr("data-height", '0.5678')
    .attr("viewBox",'0 0 900 105')
    .attr("class", "RdYlGn")
  .append("g")
    .attr("transform", "translate(" + ((this.width - this.cellSize * 53) / 2) + "," + (this.height - this.cellSize * 7 - 1) + ")");


    svg.append("text")
    .attr("transform", "translate(-38," + this.cellSize * 3.5 + ")rotate(-90)")
    .style("text-anchor", "middle")
    .text(function(d) { console.log(d); return d; });

    for (var i=0; i<7; i++)
{    
svg.append("text")
    .attr("transform", "translate(-5," + this.cellSize*(i+1) + ")")
    .style("text-anchor", "end")
    .attr("dy", "-.25em")
    .text(d => {  return this.week_days[i];}); 
 }
 var rect = svg.selectAll(".day")
 .data(function(d) {  console.log(d); return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
.enter()
.append("rect")
 .attr("class", "day")
 .attr("width", this.cellSize)
 .attr("height", this.cellSize)
 .attr("x", d=> { return this.week(d) * this.cellSize; })
 .attr("y", d => { return this.day(d) * this.cellSize; })
 .attr("fill",'#fff')
 .datum(this.format);

var legend = svg.selectAll(".legend")
   .data(this.month)
 .enter().append("g")
   .attr("class", "legend")
   .attr("transform", (d, i) => { return "translate(" + (((i+1) * 50)+8) + ",0)"; });

legend.append("text")
.attr("class", (d,i) => { return this.month[i] })
.style("text-anchor", "end")
.attr("dy", "-.25em")
.text((d,i)=>{ return this.month[i] });

svg.selectAll(".month")
 .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
.enter().append("path")
 .attr("class", "month")
 .attr("id", (d,i) => { return this.month[i] })
 .attr("d", this.monthPath);

//  datatrans.forEach(function(d) {
//   //console.log(d);
//  });

 //d3.json("./assets/data/data.csv", function(error, csv) {});

 
//  d3.csv("data.csv", function(error, csv) {

//   csv.forEach(function(d) {
//     d.Comparison_Type = parseInt(d.Comparison_Type);
//   });

//  var Comparison_Type_Max = d3.max(csv, function(d) { return d.Comparison_Type; });
 
//   var data = d3.nest()
//     .key(function(d) { return d.Date; })
//     .rollup(function(d) { return  Math.sqrt(d[0].Comparison_Type / Comparison_Type_Max); })
//     .map(csv);
	
//   rect.filter(function(d) { return d in data; })
//       .attr("fill", function(d) { return color(data[d]); })
// 	  .attr("data-title", function(d) { return "value : "+Math.round(data[d]*100)});   
// 	$("rect").tooltip({container: 'body', html: true, placement:'top'}); 
// });
// var color = d3.scaleLinear().range(['white', '#002b53'])
//     .domain([0, 1])
//   }
  
 
  // ngOnInit() {
  //   var json_url = "https://raw.githubusercontent.com/kylesb/static/master/JSON/running_log.json";
  //   // declare object variable
  //   var ob = {};
  //   console.log('jsonurl', json_url);
  //   var dt = new Date();
  //   // d3.json(json_url, (error,data) => {

  //   // });
  //   var cal = new CalHeatMap();
  //   cal.init({
  //     data: "https://raw.githubusercontent.com/kylesb/static/master/JSON/running_log.json",
	// dataType: "json",
  //     itemSelector: "#cal-heatmap",
  //     domain: "week",
  //     subDomain: "x_day",
  //     highlight: ["now", dt],
  //     // data: heatmap_data,
  //     // domain: "day",  
  //     colLimit: 24,
  //     range: 1,
  //     displayLegend: false,
  //     cellSize: 25,
  //     cellPadding: 5,
  //     domainGutter: 20,
  //     domainMargin: [0, 0, 0, 0],
  //     domainLabelFormat: "",
  //     subDomainTextFormat: null,
  //     label: { position: "top", height: 5 },
  //     legend: [10, 20, 30, 40],
  //     legendCellSize: 0,
  //     legendCellPadding: 0,
  //     legendMargin: [0, 0, 0, 0],
  //     legendColors: ["#efefef", "steelblue"]
  //    // graphHeightOffset: 16,
  //    // domainDynamicDimension: false,
  //   });


  }


}
