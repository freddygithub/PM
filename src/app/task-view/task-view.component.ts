import { Component, OnInit } from '@angular/core';
import { TaskViewService } from './task-view.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers: [TaskViewService]
})
export class TaskViewComponent implements OnInit {

   selectedTitle = "Task Name";
   selectedTitleDes = "This is the task description";
   
   todoArray=[]
   todoDesArray=[]
   todoCatArray=[]
   
   deviceObjects = [{name: 'Issue'}, {name: 'New Feature'}, {name: 'Feature Fix'}];
   selectedDeviceObj = this.deviceObjects[1];
   
  constructor(private taskviewService: TaskViewService) { }

  ngOnInit() {
  this.todoArray = this.taskviewService.getValueTodoArray()
  }
      
  onChangeObj(newObj) {
    this.selectedDeviceObj = newObj;
  }
   
   addTodo(value, des){
        this.todoArray.push(value)
        this.todoDesArray.push(des)
        this.todoCatArray.push(this.selectedDeviceObj)
        
        this.taskviewService.setValueTodoArray(this.todoArray)
        this.taskviewService.setValueTodoDesArray(this.todoDesArray)
        this.taskviewService.setValueTodoCatArray(this.todoCatArray)
  }
  
  deleteItem(todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
     this.todoArray.splice(i,1)
     this.todoDesArray.splice(i,1)
     this.todoCatArray.splice(i,1)
    }
   }
  }
  
}