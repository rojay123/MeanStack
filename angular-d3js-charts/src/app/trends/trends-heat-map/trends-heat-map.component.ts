import { Component, OnInit } from '@angular/core';
declare var multi:any;

@Component({
  selector: 'app-trends-heat-map',
  templateUrl: './trends-heat-map.component.html',
  styleUrls: ['./trends-heat-map.component.css']
})
export class TrendsHeatMapComponent implements OnInit {

 
  single: any[];
  multi: any[];

  view: any[] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Hours';
  showYAxisLabel = true;
  yAxisLabel = 'Day';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {multi})   
  }
  

  ngOnInit() {
  }

}
