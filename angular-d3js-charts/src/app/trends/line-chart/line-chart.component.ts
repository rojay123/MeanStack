import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { VpnDataService } from '../../services/vpn-data.service';

const Stocks = [


{date: new Date("2010-01-27"), value: 207.88},
{date: new Date("2010-01-28"), value: 199.29},
{date: new Date("2010-01-29"), value: 192.06},
{date: new Date("2010-02-01"), value: 194.73},
{date: new Date("2010-02-02"), value: 195.86},
{date: new Date("2010-02-03"), value: 199.23},
{date: new Date("2010-02-04"), value: 192.05},
{date: new Date("2010-02-05"), value: 195.46},
{date: new Date("2010-02-08"), value: 194.12},
{date: new Date("2010-02-09"), value: 196.19},
{date: new Date("2010-02-10"), value: 195.12},
{date: new Date("2010-02-11"), value: 198.67},
{date: new Date("2010-02-12"), value: 200.38},
{date: new Date("2010-02-15"), value: 200.38},
{date: new Date("2010-02-16"), value: 203.40},
{date: new Date("2010-02-17"), value: 202.55},
{date: new Date("2010-02-18"), value: 202.93},
{date: new Date("2010-02-19"), value: 201.67},
{date: new Date("2010-02-22"), value: 200.42},
{date: new Date("2010-02-23"), value: 197.06},
{date: new Date("2010-02-24"), value: 200.66},
{date: new Date("2010-02-25"), value: 202.00},
{date: new Date("2010-02-26"), value: 204.62},
{date: new Date("2010-03-01"), value: 208.99},
{date: new Date("2010-03-02"), value: 208.85}
];

@Component({
  selector: 'app-line-chart',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <svg width="800" height="400"></svg>
  `
})
export class LineChartComponent implements OnInit {
  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Line Chart';

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  constructor(private dataService: VpnDataService) {
    this.width = 800 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {

    this.dataService.getLineData().subscribe(data => {
      let obj = [];

      for (let i = 0; i < data.length; i++) {
        obj[i] = data[i]['activities'];
      }
      console.log('obj', obj);

        //this.initAxis();
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(obj, (d) => d.size ));
    this.y.domain(d3Array.extent(obj, (d) => d.size ));
    //this.drawAxis();
    this.svg.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + this.height + ")")
          .call(d3Axis.axisBottom(this.x));

    this.svg.append("g")
          .attr("class", "axis axis--y")
          .call(d3Axis.axisLeft(this.y))
          .append("text")
          .attr("class", "axis-title")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Price ($)");
   // this.drawLine();
   this.line = d3Shape.line()
                       .x( (d: any) => this.x(d.size) )
                       .y( (d: any) => this.y(d.size) );

    this.svg.append("path")
            .datum(obj)
            .attr("class", "line")
            .attr("d", this.line);
    });
    this.initSvg();
  
  }

  private initSvg() {
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

}
