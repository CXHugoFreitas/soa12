import { Component, Input, OnInit } from '@angular/core';
import { Epa } from 'src/app/_models/Epa';

@Component({
  selector: 'app-aioEpaCard',
  templateUrl: './aioEpaCard.component.html',
  styleUrls: ['./aioEpaCard.component.css']
})
export class AioEpaCardComponent implements OnInit {
  @Input() card: Epa;
 
  constructor() { }

  ngOnInit() {
  }

  addEpa(){}

}
