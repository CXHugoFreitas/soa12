import { Component, OnInit } from '@angular/core';
import { ProcedureDetails } from 'src/app/_models/procedureDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcedureService } from 'src/app/_services/procedure.service';
import { CandA } from 'src/app/_models/CandA';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.css']
})
export class ProcedureDetailsComponent implements OnInit {
  id = 0;
  destinationUrl = 'detailsMain'; // the first in the variable list of pages, and depending on the type of surgery
  procedureDescription = '';
  currentHospitalName = '';

  cap: CandA;
  // tslint:disable-next-line:variable-name
  button_1 = 'button 1'; button_2 = 'button 2'; button_3 = 'button 3';
  // tslint:disable-next-line:variable-name
  button_4 = 'button 4'; button_5 = 'button 5'; button_6 = 'button 6';
  // tslint:disable-next-line:variable-name
  button_7 = ''; button_8 = '';


  // tslint:disable-next-line:variable-name
  action_1 = '/about'; action_2 = '/home'; action_3 = '/users';
  // tslint:disable-next-line:variable-name
  action_4 = '/about'; action_5 = '/home'; action_6 = '/users';
  // tslint:disable-next-line:variable-name
  action_7 = ''; action_8 = '';

  procedureDetails: ProcedureDetails;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private procedureService: ProcedureService) { }

  ngOnInit(): void {
    // get the id from the BehaviorSubject

    this.auth.currentProcedureId.subscribe((res) => {
      this.id = +res;
      this.auth.currentHospital.subscribe((next) => { this.currentHospitalName = next; });


      this.procedureService.getProcedure(this.id).subscribe((result) => {
        this.procedureDescription = result.description;

        this.procedureService.getButtonsAndCaptions(result.fdType).subscribe(response => {

          this.cap = response;

          this.button_1 = this.cap.button_caption[0];
          this.button_2 = this.cap.button_caption[1];
          this.button_3 = this.cap.button_caption[2];
          this.button_4 = this.cap.button_caption[3];
          this.button_5 = this.cap.button_caption[4];
          this.button_6 = this.cap.button_caption[5];
          this.button_7 = this.cap.button_caption[6];
          this.button_8 = this.cap.button_caption[7];



        }, error => { this.alertify.error(error + ' van mijn'); });
      })
    });

    this.goToDestination(this.destinationUrl);

  }

  goToDestination(d: string) {
    switch (d) {

      case 'avr': {
        // save this information to the BehaviorSubject, so the valve page can re-arrange itself
        this.auth.changeSoortOperatie('avr');
        this.destinationUrl = 'valve';
        break;
      };
      case 'mvr': {
        // save this information to the BehaviorSubject, so the valve page can re-arrange itself
        this.auth.changeSoortOperatie('mvr');
        this.destinationUrl = 'valve';
        break;
      };
      case 'tvr': {
        // save this information to the BehaviorSubject, so the valve page can re-arrange itself
        this.auth.changeSoortOperatie('tvr');
        this.destinationUrl = 'valve';
        break;
      };
      case 'mvp': {
        // save this information to the BehaviorSubject, so the valve page can re-arrange itself
        this.auth.changeSoortOperatie('mvp');
        this.destinationUrl = 'valverepair';
        break;
      };
      case 'tvp': {
        // save this information to the BehaviorSubject, so the valve page can re-arrange itself
        this.auth.changeSoortOperatie('tvp');
        this.destinationUrl = 'valverepair';
        break;
      };
      default: { this.destinationUrl = d; break;}
    }

    this.alertify.message(this.destinationUrl);
    this.router.navigate(['/procedureDetails', { outlets: { details: [this.destinationUrl, this.id] } }]);
  }
  goDelete(){
    this.alertify.confirm('Are you sure yoy want to delete this procedure', () => {
      this.procedureService.deleteProcedure(this.id.toString()).subscribe(
        (next)=>{
          this.alertify.success('Procedure deleted');
          this.router.navigate(['/procedures']);

        },
        (error)=>{this.alertify.error(error)})
      return true;
    });

  }

}
