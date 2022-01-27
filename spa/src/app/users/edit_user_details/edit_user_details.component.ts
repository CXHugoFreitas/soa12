import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../_models/User';
import { YNModel } from '../../_models/YNModel';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { dropItem } from 'src/app/_models/dropItem';
import { DropdownService } from 'src/app/_services/dropdown.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  templateUrl: './edit_user_details.Component.html',
  styleUrls: ['./edit_user_details.component.scss']
})
export class EditUserDetailsComponent implements OnInit {
  user: User;
  yn: YNModel;
  currentLoggedInUser = 0;
  OptionCountries:Array<dropItem> = [];
  OptionRoles:Array<dropItem> = [];
  OptionHospitalsInCountry:Array<dropItem> = [];
  YN: Array<YNModel> = [{Id: 0, Text: 'Choose'}, {Id: 1, Text: 'No'}, {Id: 2, Text: 'Yes'} ];

  showDetailsVenster = false;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private drops: DropdownService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.getHospitalsForThisCountry();
    });
    //this.currentLoggedInUser = +this.authService.decodedToken.nameid;
    this.loadDrops();


  }

  saveUserDetails(){
    this.userService.updateUser(this.user.Id, this.user).subscribe((next)=>{
      this.alertify.message('Saving the user details');
      this.router.navigate(['/userList'])
    }, (error)=>{this.alertify.error(error);})
  }

  cancelDetails() {this.showDetailsVenster = false; }

  loadDrops(){
    let d = JSON.parse(localStorage.getItem('UserRoles'));
    if (d == null || d.length === 0) {
        this.drops.getRoles().subscribe((response) => {
            this.OptionRoles = response; localStorage.setItem('UserRoles', JSON.stringify(response));
        });
    } else {
        this.OptionRoles = JSON.parse(localStorage.getItem('UserRoles'));
    }
     d = JSON.parse(localStorage.getItem('UserCountries'));
    if (d == null || d.length === 0) {
        this.drops.getAllCountries().subscribe((response) => {
            this.OptionCountries = response; localStorage.setItem('UserCountries', JSON.stringify(response));
        });
    } else {
        this.OptionCountries = JSON.parse(localStorage.getItem('UserCountries'));
    }


  }

  getHospitalsForThisCountry(){
    this.drops.getAllHospitalsPerCountry(+this.user.country).subscribe((next)=>{
      this.OptionHospitalsInCountry = next;
    })
  }

  updatePhoto(photoUrl: string) {
    this.user.photoUrl = photoUrl;
  }

  deleteUser(){
    this.userService.deleteUser(this.user.Id).subscribe((next)=>{
      this.alertify.message(next.toString());
      this.router.navigate(['/configuration']);
    });
  }
}
