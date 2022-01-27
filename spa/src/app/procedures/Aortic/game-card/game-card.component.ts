import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from 'src/app/_models/CardData';
import { hospitalValve } from 'src/app/_models/hospitalValve';
import { Valve } from 'src/app/_models/Valve';
import { valveSize } from 'src/app/_models/valveSize';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AorticSurgeryService } from 'src/app/_services/aorticsurgery.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ValveService } from 'src/app/_services/valve.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({ transform: 'none' })),
      state('flipped', style({ transform: 'rotateY(180deg)' })),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('200ms')])
    ])
  ]
})

export class GameCardComponent implements OnInit {
  @Input() OAC: Array<hospitalValve>;
  @Input() currentHospital: string;
  @Output() tell = new EventEmitter<Valve>();
 
  conduitDescription = '';
  optionConduitSizes: Array<valveSize> = [];
  currentProcedureId = 0;
  hv: hospitalValve = {
    HospitalNo: 0,
    codeId: 0,
    Code: "",
    valveTypeId: 0,
    Description: "",
    Position: "Aortic",
    Size: 0,
    soort: 1,
    Type: "",
  };
  pd: Valve = {
    Id: 0, Implant_Position: '', IMPLANT: '', EXPLANT: '', SIZE: '', TYPE: '', SIZE_EXP: '',
    TYPE_EXP: 0, ProcedureType: 0, ProcedureAetiology: 0, MODEL: '', MODEL_EXP: '', SERIAL_IMP: '',
    SERIAL_EXP: '', RING_USED: '', REPAIR_TYPE: '', Memo: '', Combined: 0, procedure_id: 0
  };

  constructor(
    private alertify: AlertifyService,
    private vs: ValveService,
    private auth: AuthService,
    private aorticService: AorticSurgeryService) { }

  ngOnInit() {
    this.auth.currentProcedureId.subscribe((next) => { this.currentProcedureId = +next });

  }

  data: CardData = {
    imageId: "",
    state: "default"
  };

  getThisConduit(x: any) {
    // add a new record
    this.vs.addValvedConduitInProcedure(this.currentProcedureId).subscribe((next) => {
      this.pd = next;
    })

    //So the conduitType is chosen, now add a hospitalValve from the conduit type
    const index = this.OAC.findIndex(a => a.valveTypeId === x);
    this.hv = this.OAC[index];
    // show card to enter details mn serial no and save this ring
    this.pd.SERIAL_IMP = '';
    this.pd.MODEL = this.hv.Code;
    this.pd.TYPE = this.hv.Type;
    this.vs.getValveCodeSizes(x).subscribe((next) => { this.optionConduitSizes = next; });

    this.cardClicked();
  }

  saveConduitDetails() {


    this.pd.TYPE = this.hv.Type;
    this.pd.MODEL = this.hv.Code;
    
    this.vs.saveValvedConduit(this.pd).subscribe((next) => {
      
      this.tell.emit(this.pd);
       
    
    },
      (error) => { this.alertify.error(error); }, () => {
        this.alertify.message("Conduit uploaded ...");
      })
    this.cardClicked();
  }
  CancelConduitDetails(){
    this.pd.SERIAL_IMP = "";
    this.pd.SIZE = "";
    this.cardClicked();
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}


