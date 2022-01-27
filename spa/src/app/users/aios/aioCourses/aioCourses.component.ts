import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/Course';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-aioCourses',
  templateUrl: './aioCourses.component.html',
  styleUrls: ['./aioCourses.component.scss']
})
export class AioCoursesComponent implements OnInit {
  listOfCourses:Array<Course> = [];
  list = 1;
  chef = 0;
  itemDetails: Course = {
    id:0,
    active:'',
    level:0,
    description:'',
    title:'',
    diploma:'',
    location:'',
    courseDate:null,
    endDate:null,
    price:0,
    userId:0
  };
  Title = "";
  constructor(private route: ActivatedRoute, 
    private auth:AuthService, 
    private cs: CourseService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.listOfCourses = data.aiosListCourse;
      this.auth.Aio.subscribe((next)=>{
        this.Title = "List of courses attended by " + next
      })
      this.auth.Role.subscribe((next)=>{if(next === 'Chef'){this.chef = 1;}}) // hide the add button for the chef
    });
  }
  showList(){if(this.list === 1){return true;} else {return false;}}
  hideChef(){if(this.chef === 0){return true;} else {return false;}}
  addCourse(){
    this.alertify.message("Adding course");
    this.cs.createCourse(this.itemDetails).subscribe((next)=>{
      this.itemDetails = next;
      this.list = 0;
    });
  
  };
  showDetails(id: number){
      // is called when the aioCourseCard returns with the requested id
     // find the course in the list
     let selectedCourseIndex = this.listOfCourses.findIndex(x => x.id === id);
     this.itemDetails = this.listOfCourses[selectedCourseIndex];
     // show the details page
     this.list = 0;

  }
  backFromDetails(id:number){
    // remove this id from the current list
     if(id === 99999){this.list = 1;} /// cancelled
     else{
      let selectedCourseIndex = this.listOfCourses.findIndex(x => x.id === id);
      this.listOfCourses.splice(selectedCourseIndex,1);
      // show the list page
      this.list = 1;
     }
    
  }
}
