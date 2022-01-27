import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { GraphService } from '../../_services/graph.service';

@Component({
  selector: 'app-pap-chart',
  templateUrl: './pap-chart.component.html',
  styleUrls: ['./pap-chart.component.css']
})
export class PapChartComponent implements OnInit {

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
      backgroundColor: 'rgba(255,2,0,0.3)',
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
