import { Component, Input, OnInit } from '@angular/core';
import { ValveService } from 'src/app/_services/valve.service';

@Component({
  selector: 'app-oviValve',
  templateUrl: './oviValve.component.html',
  styleUrls: ['./oviValve.component.scss']
})
export class OviValveComponent implements OnInit {
  @Input() hospitalId: string;

 

  constructor(private vs:ValveService) { }

  ngOnInit() {
 
  


  }

  

}
