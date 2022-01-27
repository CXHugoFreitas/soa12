import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-aios-list',
  templateUrl: './aios-list.component.html',
  styleUrls: ['./aios-list.component.css']
})
export class AiosListComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  currentHospital = "";

  constructor(private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    this.auth.currentHospital.subscribe((next)=>{this.currentHospital = next});
    this.route.data.subscribe(data => {
      this.users = data.aiosList.result;
      this.pagination = data.aiosList.pagination;
    });
  }
}
