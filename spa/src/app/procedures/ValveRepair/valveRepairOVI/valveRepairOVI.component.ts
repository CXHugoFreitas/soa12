import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Valve } from 'src/app/_models/Valve';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-valveRepairOVI',
  templateUrl: './valveRepairOVI.component.html',
  styleUrls: ['./valveRepairOVI.component.scss']
})
export class ValveRepairOVIComponent implements OnInit {
  @Input() pd: Valve;
  @Output() add = new EventEmitter<Valve>();
  currentHospital = "";

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.currentHospital.subscribe((next)=>{this.currentHospital = next});

  }

  showMVP() { if (this.pd.Implant_Position === 'Mitral') { return true; } }
  showTVP() { if (this.pd.Implant_Position === 'Tricuspid') { return true; } }

  saveRing(){
    this.add.emit(this.pd);
  }

}
