import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/_models/Course';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-aioCourseCard',
  templateUrl: './aioCourseCard.component.html',
  styleUrls: ['./aioCourseCard.component.css']
})
export class AioCourseCardComponent implements OnInit {
  @Input() course: Course;
  @Output() updateIdToParent = new EventEmitter<number>();
 
  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }

  showCourseDetails(){
    this.updateIdToParent.emit(this.course.id);
   
  }
}
