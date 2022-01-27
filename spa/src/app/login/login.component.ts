import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Route, Router } from '@angular/router';
import { Hospital } from '../_models/Hospital';
import { HospitalService } from '../_services/hospital.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/User';

import * as moment from 'moment';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    currentUser: User;
    currentHospital: Hospital;
    adminLogged: boolean;
    normalLogged: boolean;
    specialLogged: boolean;
    companyAdminLogged: boolean;
    companyHQLogged: boolean;
    loginFailed: boolean;
    Blogin = 1;
    HeaderText = 'Login';
   

    constructor(private auth: AuthService,
        private userService: UserService,
        private alertify: AlertifyService,
        private hospitalService: HospitalService,
        private router: Router) { }

    ngOnInit(): void {
        this.model.UserName = '';
        if(this.hasDST()){
            // find out if there is daylight saving time at the moment
           this.auth.changeDst('1');} else {this.auth.changeDst('0');}
    }

    hasDST(){ return moment([2017, 1, 1]).isDST() !== moment([2017, 7, 1]).isDST();}

    showPasswordChange(){this.Blogin = 2;}
    passwordDialoque() { if (this.Blogin === 1) return true; }
    showChangePasswordButton(){if(this.model.UserName !== '' && this.Blogin == 1){return true;}}

   
    changeHeaderText(evt: string){ this.HeaderText = evt;}
    passwordChanged(evt: string){
        this.model.password = evt;
        this.login();
    }

    login() {
        this.auth.login(this.model).subscribe(next => {
            // get user details
            this.userService.getUser(+this.auth.decodedToken.nameid)
                .subscribe((nex) => {
                    this.currentUser = nex;
                    this.auth.changeCurrentRole(this.currentUser.role); // record the role of this user
                    if(!this.currentUser.active){
                        this.alertify.error("This user is known but deactivated ...");
                        localStorage.removeItem('token');
                        this.router.navigate(['']);
                    } else {
                        this.auth.changeLtk(this.currentUser.ltk);
                        if(this.currentUser.role !== 'admin'){
                        // get the current hospital from the userdetails
                        this.hospitalService.getSpecificHospital(this.currentUser.hospital_id)
                            .subscribe((res: Hospital) => {
                                this.auth.changeCurrentHospital(res.hospitalName);
                            })
                        }
                            this.alertify.success('Logged in successfully');
                            this.loginFailed = false;
                        // go to the list of procedures
                            this.router.navigate(['/']);
                    }
                   
                })
        },
            error => {
                // say log in failed, show register button
                this.alertify.error(error);
                this.loginFailed = true;
            }
        );
    }

}
