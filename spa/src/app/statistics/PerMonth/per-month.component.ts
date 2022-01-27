import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { GraphService } from '../../_services/graph.service';
import { CasesPerMonthModel } from '../../_models/CasesPerMonthModel';
import { GraphModel } from 'src/app/_models/GraphModel';

@Component({
    selector: 'app-per-month',
    templateUrl: './per-month.component.html',
    styleUrls: ['./per-month.component.scss']
})

export class PerMonthComponent implements OnInit {
    @Input() PMModel: GraphModel;

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

    constructor(private graph: GraphService) { }

    ngOnInit() {
        this.barChartData = [{ data: this.PMModel.dataYas, label: this.PMModel.caption, backgroundColor: ['Blue'] }];
        this.barChartLabels = this.PMModel.dataXas;
    }
}
