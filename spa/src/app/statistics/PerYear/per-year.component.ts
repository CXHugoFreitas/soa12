import { Component, OnInit, Input } from '@angular/core';
import { GraphModel } from '../../_models/GraphModel';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { GraphService } from '../../_services/graph.service';

@Component({
    selector: 'app-per-year',
    templateUrl: './per-year.component.html',
    styleUrls: ['./per-year.component.scss']
})

export class PerYearComponent implements OnInit {
    @Input() PYModel: GraphModel;

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
    constructor(private graph: GraphService) {

    }

    ngOnInit() {

        this.barChartData = [{ data: this.PYModel.dataYas, label: this.PYModel.caption }];
        this.barChartLabels = this.PYModel.dataXas;
    }
}
