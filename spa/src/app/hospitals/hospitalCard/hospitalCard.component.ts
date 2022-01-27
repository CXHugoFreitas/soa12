import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hospital } from 'src/app/_models/Hospital';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-hospitalCard',
  templateUrl: './hospitalCard.component.html',
  styleUrls: ['./hospitalCard.component.scss']
})
export class HospitalCardComponent implements OnInit {
  @Input() hospital: Hospital;
  @Output() leave = new EventEmitter<string>();

  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }

  showDetails(){
    this.leave.emit(this.hospital.hospitalNo);
     
  }

}
