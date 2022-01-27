import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GraphService } from '../../_services/graph.service';
import { GraphModel } from '../../_models/GraphModel';

@Component({
    selector: 'app-casemix',
    templateUrl: './casemix.component.html',
    styleUrls: ['./casemix.component.scss']
})

export class CasemixComponent implements OnInit {
    @Input() caseMixModel: GraphModel;

    public barChartData: ChartDataSets[];
    public barChartLabels: Label[];
   


   // test: Array<number> = [12, 10, 1, 81, 56, 55, 40, 87];
    // testLabel: Array<string> = ['eenheel lang verhaal komt hier', 'en hier dus eigenlijk ook', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90'];

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

    //public barChartData: ChartDataSets[] = [
    //    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    //];

    constructor(private graph:GraphService) { }

    ngOnInit() {
        this.barChartData = [{ data: this.caseMixModel.dataYas, label: this.caseMixModel.caption}];
        this.barChartLabels = this.caseMixModel.dataXas;
    }

}
