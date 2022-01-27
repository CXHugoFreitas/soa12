import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { dropItem } from 'src/app/_models/dropItem';
import { Hospital } from 'src/app/_models/Hospital';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { HospitalService } from 'src/app/_services/hospital.service';

@Component({
  selector: 'app-hospitalDetails',
  templateUrl: './hospitalDetails.component.html',
  styleUrls: ['./hospitalDetails.component.scss']
})
export class HospitalDetailsComponent implements OnInit {
  @Input() hospital: Hospital;
  @Output() leave = new EventEmitter<string>();

  currentHospitalNo = 0;

  details = 1;
  employees = 0;
  reports = 0;
  refPhys = 0;


  selectedHospital = '';

  selectedChapter = 'HospitalDetails';
  listOfChapters: Array<dropItem> = [
    { value: 1, description: "HospitalDetails" },
    { value: 2, description: "Employees" },
    { value: 3, description: "RefPhys" }];


  constructor(private route: Router,
    private auth: AuthService,
     private alertify: AlertifyService,
      private hos: HospitalService) { }

  ngOnInit() {
    this.auth.currentHospital.subscribe((next)=>{this.currentHospitalNo = +next;})
  }

  Cancel() { this.leave.emit('2'); }

  Go() { }

  deleteHospital() {
    this.hos.deleteHospital(this.hospital.hospitalNo).subscribe((next) => {
      this.alertify.message("Hospital removed");
    }, (error) => {
      this.alertify.message(error)
    },
      () => {
        this.leave.emit('22');
      });
  }

  selectChapter() {
    switch (this.selectedChapter) {
      case 'HospitalDetails': this.details = 1; this.employees = 0; this.reports = 0; this.refPhys = 0; break;
      case 'Employees': this.details = 0; this.employees = 1; this.reports = 0; this.refPhys = 0; break;
      case 'RefPhys': this.details = 0; this.employees = 0; this.reports = 0; this.refPhys = 1; break;
    }
  }

  showDetails() { if (this.details === 1) { return true; } }
  showRefPhys() { if (this.refPhys === 1) { return true; } }
  showEmployees() { if (this.employees === 1) { return true; } }



}
