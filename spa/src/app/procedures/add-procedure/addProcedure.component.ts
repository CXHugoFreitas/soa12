import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureDetails } from '../../_models/procedureDetails';
import { ProcedureService } from '../../_services/procedure.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { dropItem } from 'src/app/_models/dropItem';
import { HospitalService } from 'src/app/_services/hospital.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/User';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-addProcedure',
    templateUrl: './addProcedure.component.html'
})
export class AddProcedureComponent implements OnInit {
    saveToDB: number;
    selectedProcedureNo = 0;
    showPatientDetails = 0;
    sequence = '0';
    selectedPatientNo = 0;
    selectedRef = 0;
    addResult = 0;
    db = 1;
    refphysicians: Array<dropItem> = [];
    currentUser: User;

    procedure: ProcedureDetails = {
        procedureId: 0, description: '', dateOfSurgery: new Date(), hospital: 0, patientId: 0, fdType: 0,
        sequence: '', refPhys: '', selectedSurgeon: 0, selectedResponsibleSurgeon: 0,selectedAnaesthesist: 0, selectedAssistant: 0, selectedPerfusionist: 0,
        selectedNurse1: 0, selectedNurse2: 0, surgeryBeforeNextWorkingDay: false, selectedTiming: 0,
        selectedUrgentTiming: 0, selectedEmergencyTiming: 0, selectedStartHr: 0, selectedStartMin: 0, selectedStopHr: 0,
        selectedStopMin: 0, totalTime: 0, selectedInotropes: 0, selectedPacemaker: 0, selectedPericard: 0,
        selectedPleura: 0, comment1: '', comment2: '', comment3: ''
    };

    doINeedTimeOut = 'No';

    constructor(private router: Router,
        private hospitalservice: HospitalService,
        private userservice: UserService,
        private proc: ProcedureService,
        private auth: AuthService,
        private alertify: AlertifyService) { }

    ngOnInit() {
       
    }

    loadDrops(){

    }

    setProcedureNo(pid: number) {// receives the selected procedure id which is fdType
        this.selectedProcedureNo = pid;
    }

    setPatientNo(pan: number) {// receives the selected patient id which is patientId
        // if this selectedPatientNo !== 0 then show the procedure add page
        this.selectedPatientNo = pan;
        this.sequence = '1';
    }

    setSelectedRefPhys(pan: number){
        this.selectedRef = pan;
    }

    routeToProcedureDetails() {

        /* if (this.doINeedTimeOut === 'Yes') {
          this.alertify.warning('You already added this procedure');
          this.doINeedTimeOut = 'No';
          this.router.navigate(['/procedureDetails', this.addResult]);
        }; */


        this.procedure.fdType = this.selectedProcedureNo;
        this.procedure.sequence = this.sequence;
        this.procedure.refPhys = this.selectedRef.toString();
        this.procedure.patientId = this.selectedPatientNo;
        this.procedure.selectedSurgeon = this.auth.decodedToken.nameid;
        this.procedure.selectedAnaesthesist = 0;
        this.procedure.selectedAssistant = 0;
        this.procedure.selectedPerfusionist = 0;
        this.procedure.selectedNurse1 = 0;
        this.procedure.selectedNurse2 = 0;


        this.proc.addProcedure(this.procedure, this.auth.decodedToken.nameid, this.selectedPatientNo).subscribe(response => {
            this.addResult = response.procedureId;
            this.alertify.message('New procedure added');
            this.doINeedTimeOut = 'Yes';
            this.auth.changeCurrentProcedure(this.addResult.toString());
            this.router.navigate(['/procedureDetails']);
            //this.router.navigate(['/procedureDetails', this.addResult]);
        });
    }

    // see if both the procedure_id and patient_id are present
    showSaveButton() { if (this.selectedPatientNo === 0 || this.selectedProcedureNo === 0) { return false; } else { return true; } }
    showProcedure() { if (this.selectedPatientNo === 0) { return false; } else { return true; } }
    // tslint:disable-next-line:max-line-length
    showPatient() { if (this.showPatientDetails === 1) { if (this.selectedPatientNo === 0) { return true; } else { return false; } } else { return false; } }
    patientGoClicked() { if (this.showPatientDetails === 1) { this.showPatientDetails = 0; } else { this.showPatientDetails = 1; } }


}
