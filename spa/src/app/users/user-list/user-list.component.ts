import { Component, OnInit, Input } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagination, PaginatedResult } from '../../_models/pagination';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { dropItem } from 'src/app/_models/dropItem';
import { HospitalService } from 'src/app/_services/hospital.service';
import { Hospital } from 'src/app/_models/Hospital';
import { DropdownService } from 'src/app/_services/dropdown.service';



@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  selectedHospital='';
  Hospitals:Array<dropItem> = [];

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private drops: DropdownService,
    private router: Router,
    private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit() {

   this.route.data.subscribe(data => {
    
      this.users = data.userList.result;
      this.pagination = data.userList.pagination;
    });
    this.loadDrops();
  }
  loadDrops() {
    const d = JSON.parse(localStorage.getItem('Hospitals'));
    if (d == null || d.length === 0) {
      this.drops.getAllHospitals().subscribe((response) => {
          this.Hospitals = response; localStorage.setItem('Hospitals', JSON.stringify(response));
      });
  } else {
      this.Hospitals = JSON.parse(localStorage.getItem('Hospitals'));
  }
  }

  pageChanged(event: any): void{
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage)
    .subscribe((res: PaginatedResult<User[]>) => {
      this.users = res.result;
      this.pagination = res.pagination;
    }, error => console.log(error));

  }

  hospitalChanged(){
     this.userService.getUsersByHospital(this.selectedHospital,1,10).subscribe((next)=>{
     this.users = next.result;
     this.pagination = next.pagination;
   }) 
    this.alertify.message("hospitalNo is " + this.selectedHospital)}

  addUser(){
    this.userService.addUser('joopie').subscribe((next)=>{ this.loadUsers(); },
    (error)=>{this.alertify.error(error);})

  }

  

  showAIOS(){
    this.alertify.message("seaching for aios");
    this.userService.getAiosByHospital(this.selectedHospital,1,10).subscribe((next)=>{
      debugger;
      this.users = next.result});
}
  showSurgeons(){
    this.alertify.message("seaching for surgeons");
    this.userService.getSurgeonsByHospital(this.selectedHospital,1,10).subscribe((next)=>{
      debugger;
      this.users = next.result});
  }
  showChefs(){
    this.alertify.message("seaching for chefs");
    this.userService.getChefsByHospital(this.selectedHospital,1,10).subscribe((next)=>{
      debugger;
      this.users = next.result});
  }





}
