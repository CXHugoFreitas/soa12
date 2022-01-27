import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/_models/pagination';
import { Procedure } from 'src/app/_models/Procedure';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-aioProcedures',
  templateUrl: './aioProcedures.component.html',
  styleUrls: ['./aioProcedures.component.scss']
})
export class AioProceduresComponent implements OnInit {
  procedures:Array<Procedure> = [];
  pagination: Pagination;
  constructor(private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      debugger;
      this.procedures = data.aiosList.result;
      this.pagination = data.aiosList.pagination;
    })
  }

  testNav(id: number) {
    this.alertify.message("showing details:" + id);
  }

}
