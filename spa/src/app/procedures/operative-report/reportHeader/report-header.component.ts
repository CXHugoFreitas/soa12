import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { reportHeader } from 'src/app/_models/reportHeader';
import { UserService } from 'src/app/_services/user.service';
import { ProcedureService } from 'src/app/_services/procedure.service';
import { PatientService } from 'src/app/_services/patient.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
    selector: 'app-report-header',
    templateUrl: './report-header.component.html',
    styleUrls: ['./report-header.component.scss']
})

export class ReportHeaderComponent {
    @Input() rh: reportHeader;
    @Output() sendMessage = new EventEmitter();
    @Output() sendHeader: EventEmitter<reportHeader> = new EventEmitter<reportHeader>();
    header31 = 'Hospital number';
    header32 = 'Patient name:';
    header33 = 'Preop diagnosis';
    header34 = 'Clinical Unit: Cardiac Services';

    constructor(private userservice: UserService,
        private proceduredetails: ProcedureService,
        private alertify: AlertifyService,
        private patientService: PatientService,
        private auth: AuthService,
        private router: Router) { }

    // OperativeDetails() { this.router.navigate(['/procedureDetails/' + this.rh.Id]); }
    Clear() { this.sendMessage.emit(1); }
    Email() {
        // see if the privacy data are filled
        if (this.isPrivacyFilled()) {
            this.sendMessage.emit(2);
        } else { this.alertify.error('Please complete patient details, otherwise the report makes no sense ...') }
    }
    SaveAndPrint() {
        // see if the privacy data are filled
        if (this.isPrivacyFilled()) {
            this.sendHeader.emit(this.rh);
        } else { this.alertify.error('Please complete patient details, otherwise the report makes no sense ...') }
    }
    SaveSuggestion() { this.sendMessage.emit(4); }

    isPrivacyFilled(): boolean {
        
        let result = false;
        if (this.rh.hospital_number !== "Hospital No:"
         && this.rh.patient_name !== null 
         && this.rh.diagnosis !== "") { result = true; }
        return result;
    }

}

