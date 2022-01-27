import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-pwp-chart',
  templateUrl: './pwp-chart.component.html',
  styleUrls: ['./pwp-chart.component.css']
})
export class PwpChartComponent implements OnInit {

@Input() dataYas:Array<number>;
@Input() dataXas:Array<string>;
@Input() dataLabel:string;
@ViewChild('chart') myChart: Chart;


  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,1,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.lineChartData = [  { data: this.dataYas, label: this.dataLabel }, ];
    this.lineChartLabels = this.dataXas;
   
  }
}
