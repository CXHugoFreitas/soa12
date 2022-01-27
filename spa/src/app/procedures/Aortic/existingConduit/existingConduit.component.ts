import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Valve } from 'src/app/_models/Valve';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ValveService } from 'src/app/_services/valve.service';

@Component({
  selector: 'app-existingConduit',
  templateUrl: './existingConduit.component.html',
  styleUrls: ['./existingConduit.component.css']
})
export class ExistingConduitComponent implements OnInit {
  @Input() pd:Valve;
  @Output() markAsDeleted = new EventEmitter<string>();
  valveDescription = "";
  edit = 0;

  constructor(private alertify: AlertifyService, private vs: ValveService) { }

  ngOnInit() {
    this.vs.getValveTypeDescription(this.pd.MODEL).subscribe((next)=>{
      this.valveDescription = next;
    });
  }

  showEditButton(){if(this.edit === 1){return true;}}

  editExistingConduit(){this.alertify.message("editing ...");}
  deleteExistingConduit(){
    this.vs.deleteValve(this.pd.Id).subscribe((next)=>{
     this.markAsDeleted.emit("1");
    }, (error)=>{this.alertify.error(error);})
    this.alertify.message("deleting ...");}

}
