import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Epa } from 'src/app/_models/Epa';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-aioEpa',
  templateUrl: './aioEpa.component.html',
  styleUrls: ['./aioEpa.component.scss']
})
export class AioEpaComponent implements OnInit {
  listOfCards: Array<Epa> = [];
  Title = "";
  constructor(private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.listOfCards = data.aiosListEpa;
      this.auth.Aio.subscribe((next) => {
        this.Title = next + 's Entrusted Professional Activities (EPA)';
      })
    });
  }

}
