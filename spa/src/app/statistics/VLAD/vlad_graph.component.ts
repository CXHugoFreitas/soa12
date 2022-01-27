import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { GraphService } from '../../_services/graph.service';
import { AlertifyService } from '../../_services/alertify.service';
import { GraphModel } from '../../_models/GraphModel';

@Component({
    selector: 'app-vlad_graph',
    templateUrl: './vlad_graph.component.html',
    styleUrls: ['./vlad_graph.component.scss']
})
export class VladGraphComponent implements OnInit {
    @Input() vladModel: GraphModel;
    @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

   
    public lineChartData: ChartDataSets[];
    public lineChartLabels: Label[];
    dataYas: Array<number> = [];

    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        responsive: true,
        // legend: {
        //    position: 'bottom'
        // },
        scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
                {
                    id: 'y-axis-0',
                    position: 'left',
                },
                {
                    id: 'y-axis-1',
                    position: 'right',
                    gridLines: {
                        color: 'rgba(255,0,0,0.3)',
                    },
                    ticks: {
                        fontColor: 'red',
                    }
                }
            ]
        },
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: 'March',
                    borderColor: 'orange',
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        fontColor: 'orange',
                        content: 'LineAnno'
                    }
                },
            ],
        },
    };
    public lineChartColors: Color[] = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // red
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [pluginAnnotations];


    constructor(private graphService: GraphService, private alertify: AlertifyService) { }

    ngOnInit() {
        this.vladModel = this.vladModel;
        this.lineChartData = [{ data: this.vladModel.dataYas, label: this.vladModel.caption, lineTension: 0 }];
        this.lineChartLabels = this.vladModel.dataXas;
    };


}
