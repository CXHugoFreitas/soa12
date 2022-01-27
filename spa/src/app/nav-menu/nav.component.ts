import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../_models/User';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string = '';
  isLoggedIn = false;

  constructor(
    public auth: AuthService, 
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
   if(this.username == ''){
   }
  }

  loggedIn(){if(this.isLoggedIn) return true;}

  login(){this.auth.login(this.model).subscribe((next)=>{
    this.username = this.model.username;
    this.isLoggedIn = true;
    console.log(next); }, error => {this.alertify.error(error)})}

  logout(){ 
    this.model.username = "";
    this.model.password = "";
    this.isLoggedIn = false;
    this.auth.logOut(); }

}
