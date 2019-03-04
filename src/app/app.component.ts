import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

   todoArrayFeatureFix=[]
   todoDesArrayFeatureFix=[]
   
   todoArrayIssues=[]
   todoDesArrayIssues=[]
   
   todoArrayNewFeatures=[]
   todoDesArrayNewFeatures=[]

    constructor(private appService: AppService) {} 
    
      ngOnInit() {
        this.appService.acc();
      }
      
   var cars = document.getElementById("cars");
var carSelected = cars.options[cars.selectedIndex].value;

getSelectedValue(){

}
   
   addTodo(value, des, type){
       if(type == "Issues")
       {
        this.todoArrayIssues.push(value)
        this.todoArrayIssues.push(des)
       }
       else if(type == "Feature Fix")
       {
        this.todoArrayFeatureFix.push(value)
        this.todoArrayFeatureFix.push(des)
       }
       else{
        this.todoArrayNewFeatures.push(value)
        this.todoArrayNewFeatures.push(des)
       }
  }
  
  deleteItem(todo){
   for(let i=0 ;i<= this.todoArrayIssues.length ;i++){
    if(todo== this.todoArrayIssues[i]){
     this.todoArrayIssues.splice(i,1)
    }
   }
   for(let i=0 ;i<= this.todoArrayFeatureFix.length ;i++){
    if(todo== this.todoArrayFeatureFix[i]){
     this.todoArrayFeatureFix.splice(i,1)
    }
   }
   for(let i=0 ;i<= this.todoArrayNewFeatures.length ;i++){
    if(todo== this.todoArrayNewFeatures[i]){
     this.todoArrayNewFeatures.splice(i,1)
    }
   }
  }
}
