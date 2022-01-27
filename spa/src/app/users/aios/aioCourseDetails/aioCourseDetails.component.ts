import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/_models/Course';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-aioCourseDetails',
  templateUrl: './aioCourseDetails.component.html',
  styleUrls: ['./aioCourseDetails.component.css']
})
export class AioCourseDetailsComponent implements OnInit {
  @Input() course: Course;
  @Output() signalToParent =new EventEmitter<number>();
  constructor(private cs: CourseService) { }

  ngOnInit() {
  }

  removeCourse(){
    this.cs.removeCourse(this.course.id).subscribe((next)=>{
         this.signalToParent.emit(this.course.id);
    })
  };
  updateCourse(){
    this.cs.updateCourse(this.course).subscribe((next)=>{
         this.signalToParent.emit(1);
    })
  };
  Cancel(){this.signalToParent.emit(99999);}

}
