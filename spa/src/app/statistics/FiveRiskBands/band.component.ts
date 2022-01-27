import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GraphService } from '../../_services/graph.service';
import { GraphModel } from '../../_models/GraphModel';

@Component({
    selector: 'app-band',
    templateUrl: './band.component.html',
    styleUrls: ['./band.component.scss']
})

export class BandComponent implements OnInit {
    @Input() euroModel: GraphModel;

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
        this.barChartData = [{ data: this.euroModel.dataYas, label: this.euroModel.caption }];
        this.barChartLabels = this.euroModel.dataXas;
    }
}
