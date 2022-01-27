import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { HospitalService } from 'src/app/_services/hospital.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-changePwd',
  templateUrl: './changePwd.component.html',
  styleUrls: ['./changePwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput: ElementRef;
  @Input() model: any = {};
  @Output() headertextChanged = new EventEmitter<string>();
  @Output() passwordChanged = new EventEmitter<string>();
  npw1 = '';
  npw2 = '';
  currentUser: User;
  wcred = 0;


  constructor(private alertify: AlertifyService,
    private auth: AuthService,
    private router: Router,
    private hospitalService: HospitalService,
    private userService: UserService) { }

  ngOnInit() { }

  checkLogin() {
    localStorage.removeItem('token');
    this.headertextChanged.emit('Changing the password for ' + this.model.UserName);
    this.auth.login(this.model).subscribe(next => {});
  }

  isLoggedIn() { return this.auth.loggedIn(); }

  Reveal() {
    if (this.passwordInput.nativeElement.type === "password") {
      this.passwordInput.nativeElement.type = "text";
    } else {
      this.passwordInput.nativeElement.type = "password";
    }
   }

  showWrongCredentials() { if (!this.isLoggedIn()) { return true; } }

  changePassword() {
    if (this.npw1 === '') { this.alertify.error('passwords can not be empty'); }
    else {
      if (this.npw1 !== this.npw2) {
        this.alertify.error('passwords are not equal');
        this.npw1 = '';
        this.npw2 = '';
      } else {
        this.model.password = this.npw1;
        this.auth.updatePassword(this.model).subscribe((next) => {
          this.passwordChanged.emit(this.npw1);
          this.alertify.message("Password changed ...");


        })
      }
    }
  }

}
