import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/_models/Hospital';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { HospitalService } from 'src/app/_services/hospital.service';

@Component({
  selector: 'app-addHospitalDetails',
  templateUrl: './addHospitalDetails.component.html',
  styleUrls: ['./addHospitalDetails.component.scss']
})
export class AddHospitalDetailsComponent implements OnInit {
  @Input() hospital: Hospital;
  @Output() leave = new EventEmitter<string>();
  
  constructor(private hos: HospitalService, private alertify: AlertifyService) { }

  ngOnInit() {    
  }
  updatePhoto(photoUrl: string) { this.hospital.imageUrl = photoUrl;}

  close(){
    // update the hospital
    this.hos.saveHospital(this.hospital).subscribe((next)=>{
      this.leave.emit('3');
    }, (error)=>{this.alertify.error(error)})


    
   
  }
}
