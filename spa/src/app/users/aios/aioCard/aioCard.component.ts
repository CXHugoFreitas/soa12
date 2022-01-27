import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-aioCard',
  templateUrl: './aioCard.component.html',
  styleUrls: ['./aioCard.component.css']
})
export class AioCardComponent implements OnInit {

  @Input() user: User;

  constructor(private alertify: AlertifyService, 
    private router: Router, 
    private auth: AuthService) { }

  ngOnInit() { }

  sendEmail() { this.alertify.message('Send email to this person');}

  showDetails(){this.router.navigate(['userDetails/' + this.user.Id])}

  goProcedures(){
    this.auth.changeCurrentAio(this.user.UserName);
    this.router.navigate(['aioProcedures/' + this.user.Id])}
  
  goCourses(){
    this.auth.changeCurrentAio(this.user.UserName);
    this.router.navigate(['aioCourses/' + this.user.Id])}

  goEpas(){
    this.auth.changeCurrentAio(this.user.UserName);
    this.router.navigate(['aioEpas/' + this.user.Id])}



}
