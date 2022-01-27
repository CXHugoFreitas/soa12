import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dropItem } from 'src/app/_models/dropItem';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { DropdownService } from 'src/app/_services/dropdown.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  selectedTopic = 0;
  selectedUser = 0;
  Topics:Array<dropItem> = [];

  constructor(
    private alertify: AlertifyService, 
    private drop: DropdownService, 
    private route: Router, 
    private auth: AuthService) { }

  ngOnInit() {
    this.drop.getCareerTopics().subscribe((next)=>{this.Topics = next});
    this.selectedUser = this.auth.decodedToken.nameid;
    

  }
 
  selectTopic(){
    this.alertify.error("Not implemented, yet ...")
    /* if(this.selectedTopic != 0){
      switch(this.selectedTopic){
        case 1: this.route.navigate(['/aioEpas/' + this.selectedUser]);break;
        case 2: this.route.navigate(['/aioCourses/' + this.selectedUser]);break;
        case 3: this.route.navigate(['/articles/' + this.selectedUser]);break;
        case 4: this.route.navigate(['/posters/' + this.selectedUser]);break;
        case 5: this.route.navigate(['/presentations/' + this.selectedUser]);break;
      }
    } else {this.alertify.error("Please select an item first ...")}
 */  }

  showEpa(){this.selectedTopic = 1; this.selectTopic();}
  showCourses(){this.selectedTopic = 2; this.selectTopic();}
  showArticles(){this.selectedTopic = 3; this.selectTopic();}
  showPosters(){this.selectedTopic = 4; this.selectTopic();}
  showPresentations(){this.selectedTopic = 5; this.selectTopic();}

  

 

}
