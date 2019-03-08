import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 
   selectedTitle = "";
   selectedDes = "";
   selectedCat = "";
   selectedDate = "";
   
   deviceObjects = [{name: 'Issue'}, {name: 'New Feature'}, {name: 'Feature Fix'}];
   selectedDeviceObj = this.deviceObjects[1];
   
   todoArray=[{name: "Project management website", des: "the text on the description of the tasks are to small and make the main page look weird without a lot  of text.", date: "2019-01-07"},
   {name: "Mirror", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", date: "2019-10-07"},
   {name: "Bike", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", date: "2019-12-07"}]

  constructor() { }

  ngOnInit() {
  }
  
  onChangeObj(newObj) {
    this.selectedDeviceObj = newObj;
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
        date: date
        })
  }
  
  deleteItem(todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
     this.todoArray.splice(i,1)
    }
   }
  }
   
}