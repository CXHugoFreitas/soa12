import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {  }

  linkToCSD() { window.location.href = "https://csd-website.azurewebsites.net"; }

  showContact(){this.route.navigate(['/contact']);}

}
