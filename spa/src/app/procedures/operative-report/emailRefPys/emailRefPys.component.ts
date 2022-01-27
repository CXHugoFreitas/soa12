import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailModel } from 'src/app/_models/EmailModel';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { RefPhysService } from 'src/app/_services/ref-phys.service';

@Component({
  selector: 'app-emailRefPys',
  templateUrl: './emailRefPys.component.html',
  styleUrls: ['./emailRefPys.component.scss']
})
export class EmailRefPysComponent implements OnInit {
  @Input() email: EmailModel;
  @Output() sendCancel = new EventEmitter<string>();

  editPanel = 0;

  constructor(private refPhys: RefPhysService, private alertify: AlertifyService,) { }

  ngOnInit() {
  }

  editText(){
    this.editPanel = 1;

  }

  Cancel(){this.sendCancel.emit('1');}
  showEditPanel(){ if(this.editPanel === 1){return true;}}
  Send(){
    //send the email to the email service
    this.refPhys.sendEmail(this.email).subscribe((nex) => {
      this.alertify.message(nex);
      this.sendCancel.emit('1');
    },
    (error)=>{this.alertify.message('Sending email failed ...' + error);});
  }

}
