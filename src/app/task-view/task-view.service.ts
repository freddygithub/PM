import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskViewService {

   deviceObjects = [{name: 'Issue'}, {name: 'New Feature'}, {name: 'Feature Fix'}];
   selectedDeviceObj = this.deviceObjects[1];
   
   todoArray=[{name: "Fix That Bug", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", cat: this.selectedDeviceObj, date: "2019-01-07"},
   {name: "Fixing bug123", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", cat: this.deviceObjects[2], date: "2019-10-07"},
   {name: "fixingFeature123", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", cat: this.deviceObjects[2], date: "2019-12-07"}]
  
  constructor() { }
  
  setValueTodoArray(array){
    this.todoArray = array;
  }
  getValueTodoArray(){
    return this.todoArray;
  }
}
