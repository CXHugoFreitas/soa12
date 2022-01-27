import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { dropItem } from '../_models/dropItem';
import { Hospital } from '../_models/Hospital';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { DropdownService } from '../_services/dropdown.service';
import { HospitalService } from '../_services/hospital.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  hospitals: Array<Hospital> = [];
  countries: Array<dropItem> = [];
  hospitalNoToAdd = "";
  hospital: Hospital = {
    hospitalName: '',
    selected_hospital_name: '',
    hospitalNo: '',
    description: '',
    imageUrl: '',
    city: '',
    address: '',
    country: 0,
    telephone: '',
    OpReportDetails1: '',
    OpReportDetails2: '',
    OpReportDetails3: '',
    OpReportDetails4: '',
    OpReportDetails5: '',
    OpReportDetails6: '',
    OpReportDetails7: '',
    OpReportDetails8: '',
    OpReportDetails9: ''
  };

  list = 1;
  addHo = 0;
  details = 0;

  selectedCountry = 0;


  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private hos: HospitalService,
    private alertify: AlertifyService,
    private drops: DropdownService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.hospitals = data.hospitalList;
      this.drops.getAllCountries().subscribe((next) => {
        this.countries = next;
        this.selectedCountry = next[0].value;
        this.hos.getHospitalsInCountry(this.selectedCountry).subscribe((next) => {
          this.hospitals = next;
         })
      });
    });
  }
  addHospital() { 
    this.hospitalNoToAdd = prompt("Please enter unique hospital number", "");
    if(this.selectedCountry !== 0 && this.hospitalNoToAdd !== ""){
      
    this.hos.addHospital(this.selectedCountry, +this.hospitalNoToAdd).subscribe(
        (next)=>{
          this.hospital = next;
          this.alertify.message("add Hospital");
          this.list = 0;
          this.details = 0;
          this.addHo = 1;}, (error)=>{this.alertify.error(error)}, ()=>{}) 
    }
  }

  countryChanged() {
    this.hos.getHospitalsInCountry(this.selectedCountry).subscribe((next) => {

      this.hospitals = next;
      this.alertify.message("changed Country");

    })




  }

  signalFromList(t: any) {
      // get the details and put them in hospital
      this.alertify.message("hospital number = " + t);
      this.hos.getSpecificHospital(t).subscribe((next)=>{
        this.hospital = next;
        // set this hospital no in the authservice
        this.auth.changeCurrentHospital(this.hospital.hospitalNo);
       });
      this.list = 0;
      this.addHo = 0;
      this.details = 1;
  }

  signalFromDetails(t: any) { 
    if(t == '22')// a hospital was removed
    { // get the new hospital list
      this.hos.getHospitalsInCountry(this.selectedCountry).subscribe((next) => {
        this.hospitals = next;
       })
    }
    this.list = 1;
    this.addHo = 0;
    this.details = 0;}

  signalAddHospital(t: any) {
    // get the new hospital list
    this.hos.getHospitalsInCountry(this.selectedCountry).subscribe((next) => {
     this.hospitals = next;
    })
    this.list = 1;
    this.addHo = 0;
    this.details = 0;}

  showList() { if (this.list === 1) { return true; } }
  showAddHospital() { if (this.addHo === 1) { return true; } }
  showDetails() { if (this.details === 1) { return true; } }

}
