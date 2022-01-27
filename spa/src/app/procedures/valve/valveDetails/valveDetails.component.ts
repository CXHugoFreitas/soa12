import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import { dropItem } from 'src/app/_models/dropItem';
import { hospitalValve } from 'src/app/_models/hospitalValve';
import { Valve } from 'src/app/_models/Valve';
import { valveSize } from 'src/app/_models/valveSize';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { PatientService } from 'src/app/_services/patient.service';
import { ProcedureService } from 'src/app/_services/procedure.service';
import { ValveService } from 'src/app/_services/valve.service';

@Component({
  selector: 'app-valveDetails',
  templateUrl: './valveDetails.component.html',
  styleUrls: ['./valveDetails.component.scss']
})
export class ValveDetailsComponent implements OnInit {

  @Input() hv: hospitalValve;
  @Input() pd: Valve;

  @Input() hospitalId: string;

  typeDescription = '';
  valveDescription = '';
  hospitalValves: Array<hospitalValve> = [];
  optionsTypes: Array<dropItem> = [];
  optionSizes: Array<valveSize> = [];
  serialNo = "";


  panel1 = 0;
  panel2 = 0;
  panel3 = 0;


  ppmAdvice = 0;
  valveSize = "Choose";
  adviceText = "Hier komt de advice text";

  constructor(
    private alertify: AlertifyService,
    private router: Router,
    private auth: AuthService,
    private proc: ProcedureService,
    private patient: PatientService,
    private vs: ValveService) { }

  ngOnInit() {

   this.loadDrops();
  }


  loadDrops() { this.optionsTypes.push({ value: 1, description: 'Biological' }, { value: 2, description: 'Mechanical' }); };
  showPanel_1() 
  { if (this.panel1 === 1 || this.pd.Implant_Position !== '') 
    {
      this.vs.getSpecificHospitalValve(this.pd.MODEL).subscribe((next) => {
         this.valveDescription = next.Description; });
      return true; 
    } 
};
  showPanel_2() { if (this.panel2 === 1 || this.pd.Implant_Position === '') { return true; } };
  showPanel_3() { if (this.panel3 === 1) { return true; } };
  showEoaAdvice() {
    if (this.hv.Position === 'Aortic') { if (this.ppmAdvice === 1) { return true; } } else { return false; }
  }
  getModelsInHospital() {
    this.vs.getHospitalValves(this.hv.Type, this.hv.Position).subscribe(
      (next) => { this.hospitalValves = next }, (error) => { this.alertify.error(error) })
  }

  deleteValve() {
    this.vs.deleteValve(this.pd.Id).subscribe((next) => {
      // route to the valve page
      this.alertify.message(next);
      this.pd.Implant_Position = "";
      this.pd.MODEL = "";
      this.pd.TYPE = "";
      this.pd.SIZE = "";
      this.pd.SERIAL_IMP = "";
      this.valveDescription = "";

      this.panel1 = 0; this.panel2 = 1; this.panel3 = 0;
    }, (error) => {this.alertify.error(error) })
  }

  findEOA() {
    if (this.hv.Position === 'Aortic') { // give only advice about aortic valves
      let procedureId = 0;
      let patientId = 0;
      let height = 0;
      let weight = 0;
      let eoa = 0;
      let eoai = 0;
      this.auth.currentProcedureId.subscribe((next) => {
        procedureId = +next;
        this.proc.getProcedure(procedureId).subscribe((next) => {
          patientId = next.patientId;
          this.patient.getPatientFromId(patientId).subscribe((next) => {
            height = next.height;
            weight = next.weight;
            this.vs.getPPM(this.pd.MODEL, this.valveSize, weight.toString(), height.toString()).subscribe((next) => {
              this.adviceText = "You can expect " + next.body + " PPM";
            }, (error) => { this.adviceText = error; })
          })
        })
      });

      this.alertify.message("Finding EOAi of valve " + this.pd.MODEL + "  with size " + this.valveSize);
      this.ppmAdvice = 1;

    }
  }

  implantValve() {

    // select if the valve data is complete and then save to the database
    if (this.pd.SERIAL_IMP !== "") {
      this.alertify.confirmExtended("Confirm", "You want to implant this valve ?", () => {
        // get a new valve from the api with this procedure_id and serial
        this.auth.currentProcedureId.subscribe((next) => {
          const procedure_id = +next;
          this.vs.addValveInProcedure(this.pd.SERIAL_IMP, procedure_id).subscribe((nex) => {
            nex.Combined = this.pd.Combined;
            nex.ProcedureType = this.pd.ProcedureType;
            nex.ProcedureAetiology = this.pd.ProcedureAetiology;
            nex.MODEL = this.hv.Code;
            nex.TYPE = this.hv.Type;
            nex.Implant_Position = this.hv.Position;
            nex.SIZE = this.valveSize;
            this.vs.saveValve(nex).subscribe((response) => {
                this.vs.getValveFromSerial(this.pd.SERIAL_IMP, procedure_id).subscribe((nex)=>{
                this.pd = nex;
              });
             
              this.panel1 = 1; this.panel2 = 0; this.panel3 = 0;
              
            }, (error) => {

              this.alertify.error(error)
            })


          });
        });




      }, () => { this.alertify.warning("Cancelled ...") });
    } else { this.alertify.warning("Please enter serial number of this valve ...") }
  }

  selectThisValve(code: string) {
    // copy the hospitalValve to pd, get the specific valve details first
    this.valveSize = '0';
    this.pd.SERIAL_IMP = "";
    this.pd.MODEL = code;

    this.vs.getSpecificHospitalValve(code).subscribe(
      (next) => {
        this.hv = next;
        this.valveDescription = next.Description;
        this.typeDescription = next.Type;

        this.vs.getValveCodeSizes(next.valveTypeId).subscribe((nex) => { this.optionSizes = nex; });
      },
      (error) => { this.alertify.error(error) })
    this.panel1 = 0; this.panel2 = 1; this.panel3 = 1;
    this.alertify.message("select this valve ...");
  }

}
