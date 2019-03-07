import { Component, OnInit } from '@angular/core';
import { TaskViewService } from '../task-view/task-view.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [TaskViewService]
})
export class TimelineComponent implements OnInit {
  
  todoArray=[]
  
  constructor(private taskviewService: TaskViewService) { }

  ngOnInit() {
  this.todoArray = this.taskviewService.getValueTodoArray();
  }

}
