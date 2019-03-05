import { Component, OnInit } from '@angular/core';
import { TaskViewService } from './task-view.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers: [TaskViewService]
})
export class TaskViewComponent implements OnInit {

  constructor(private taskviewService: TaskViewService) { }

  ngOnInit() {
  this.taskviewService.acc();
  }

}