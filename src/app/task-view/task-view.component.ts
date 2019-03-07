import { Component, OnInit } from '@angular/core';
import { TaskViewService } from './task-view.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers: [TaskViewService]
})
export class TaskViewComponent implements OnInit {

   selectedTitle = "";
   selectedDes = "";
   selectedCat = "";
   selectedDate = "";
   
   deviceObjects = [{name: 'Issue'}, {name: 'New Feature'}, {name: 'Feature Fix'}];
   selectedDeviceObj = this.deviceObjects[1];
   
   todoArray=[]
   
  constructor(private taskviewService: TaskViewService) { }

  ngOnInit() {
  this.todoArray = this.taskviewService.getValueTodoArray();
  }
      
  onChangeObj(newObj) {
    this.selectedDeviceObj = newObj;
    this.taskviewService.setValueTodoArray(this.todoArray);
  }
   
   selectedButton(value){
   this.selectedTitle = value.name
   this.selectedDes = value.des
   this.selectedCat = value.cat
   this.selectedDate = value.date
   }
   
   addTodo(value, des, date){
        this.todoArray.push({
        name: value,
        des: des,
        cat: this.selectedDeviceObj,
        date: date
        })
        
        this.taskviewService.setValueTodoArray(this.todoArray)
  }
  
  deleteItem(todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
     this.todoArray.splice(i,1)
    }
   }
  }
  
}