import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GraphModel } from '../../_models/GraphModel';

@Component({
    selector: 'app-age_graph',
    templateUrl: './age_graph.component.html',
    styleUrls: ['./age_graph.component.scss']
})

export class AgeGraphComponent implements OnInit {
    @Input() ageModel: GraphModel;
    public barChartData: ChartDataSets[];
    public barChartLabels: Label[];

    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];

    constructor() { }

    ngOnInit() {

        this.barChartData = [{ data: this.ageModel.dataYas, label: this.ageModel.caption, backgroundColor: ['Green'] }];
        // this.barChartData = [{ data: this.ageModel.dataYas, label: this.ageModel.caption }];
        this.barChartLabels = this.ageModel.dataXas;

    }

}
