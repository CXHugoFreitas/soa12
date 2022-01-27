import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from '../../_models/User';


@Component({
  selector: 'app-user-card',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  constructor(private alertify: AlertifyService, private router: Router) { }

  ngOnInit() { }

  sendEmail() { this.alertify.message('Send email to this person');}

  showDetails(){this.router.navigate(['userDetails/' + this.user.Id])}


}
