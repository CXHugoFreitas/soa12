import { Component, OnInit } from '@angular/core';
import { dropItem } from '../_models/dropItem';
import { AuthService } from '../_services/auth.service';
import { DropdownService } from '../_services/dropdown.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { GraphService } from '../_services/graph.service';
import { GraphModel } from '../_models/GraphModel';
import { CasesPerMonthModel } from '../_models/CasesPerMonthModel';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
    hospitals: Array<dropItem> = [];
    selectedHospital = 0;
    AllButton = '0';
    showGraphNo = 1;
    vladModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };
    cmModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };
    ageModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };
    perYearModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };
    perMonthModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };
    euroModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };
    PMModel: CasesPerMonthModel;
    PYModel: GraphModel = { dataXas: [], dataYas: [], caption: "" };

    constructor(private drop: DropdownService,
        private route: ActivatedRoute,
        private graph: GraphService,
        private auth: AuthService,
        private alertify: AlertifyService) { }

    ngOnInit() {

        this.drop.getHospitals(+this.auth.decodedToken.nameid).subscribe(response => {
            this.hospitals = response;
            this.hospitals.unshift({ value: 0, description: 'All hospitals' });
        }, (error) => { console.log(error); });
        this.getAG();
    }


    getVL() {
        this.vladModel = { dataXas: [], dataYas: [], caption: "" };
        this.graph.getVlad(+this.auth.decodedToken.nameid, this.selectedHospital).subscribe(
            (next) => {
                this.vladModel = next; this.showGraphNo = 1;
            });
    }
    getCM() {
        this.cmModel = { dataXas: [], dataYas: [], caption: "" };
        this.graph.getCM(+this.auth.decodedToken.nameid, this.selectedHospital).subscribe(
            (next) => {
                this.cmModel = next; this.showGraphNo = 2;
            });
    }
    getAG() {
        this.ageModel = { dataXas: [], dataYas: [], caption: "" };
        this.graph.getAge(+this.auth.decodedToken.nameid, this.selectedHospital).subscribe(
            (next) => {
                this.ageModel = next; this.showGraphNo = 3;
            });
    }
    getEU() {
        this.euroModel = { dataXas: [], dataYas: [], caption: "" };
        this.graph.getBand(+this.auth.decodedToken.nameid, this.selectedHospital).subscribe(
            (next) => {
                this.euroModel = next; this.showGraphNo = 4;
            });
    }
    getPY() {
        this.PYModel = { dataXas: [], dataYas: [], caption: "" };
        this.graph.getPY(+this.auth.decodedToken.nameid, this.selectedHospital).subscribe(
            (next) => {
                this.PYModel = next; this.showGraphNo = 5;
            });
    }
    getPM() {
        this.PMModel = { dataXas: [], dataYas: [], caption: "" };
        this.graph.getPM(+this.auth.decodedToken.nameid, this.selectedHospital).subscribe(
            (next) => {
                this.PMModel = next; this.showGraphNo = 6;
            });
    }
}
