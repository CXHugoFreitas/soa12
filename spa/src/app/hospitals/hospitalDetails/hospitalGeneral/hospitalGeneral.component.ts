import { Component, Input, OnInit } from '@angular/core';
import { Hospital } from 'src/app/_models/Hospital';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { HospitalService } from 'src/app/_services/hospital.service';

@Component({
  selector: 'app-hospitalGeneral',
  templateUrl: './hospitalGeneral.component.html',
  styleUrls: ['./hospitalGeneral.component.scss']
})
export class HospitalGeneralComponent implements OnInit {
  @Input() currentHospital: number;
  pd: Hospital = {
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
 
  constructor(private hospitalservice: HospitalService, 
    private auth:AuthService,
    private alertify:AlertifyService) { }

  ngOnInit() {
    this.auth.currentHospital.subscribe((next)=>{
      this.currentHospital = +next;
      this.hospitalservice.getSpecificHospital(this.currentHospital).subscribe((next)=>{
        this.pd = next;
        })
    })
    
  }

  save(){this.hospitalservice.saveHospital(this.pd).subscribe((next)=>{
    this.alertify.message("Saving hospital ...")
  })}

}
