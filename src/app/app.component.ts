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
   
   public showTimeline:boolean = true;
   public showTask:boolean = false;
   
   deviceObjects = [{name: 'Issue'}, {name: 'New Feature'}, {name: 'Feature Fix'}];
   selectedDeviceObj = this.deviceObjects[1];

    constructor(private appService: AppService) {} 
    
      ngOnInit() {
      }
      
      onChangeObj(newObj) {
        this.selectedDeviceObj = newObj;
      }
   
   addTodo(value, des){
        
       if(this.selectedDeviceObj == this.deviceObjects[0])
       {
        this.todoArrayIssues.push(value)
        this.todoArrayIssues.push(des)
       }
       else if(this.selectedDeviceObj == this.deviceObjects[1])
       {
        this.todoArrayFeatureFix.push(value)
        this.todoArrayFeatureFix.push(des)
       }
       else{
        this.todoArrayNewFeatures.push(value)
        this.todoArrayNewFeatures.push(des)
       }
       
       this.appService.cls();
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
  
   public toggleTask(): void { 
     this.showTask = !this.showTask; 
     this.showTimeline = false;
   }
   
   public toggleTimeline(): void { 
     this.showTimeline = !this.showTimeline;
     this.showTask = false; 
   }

}
