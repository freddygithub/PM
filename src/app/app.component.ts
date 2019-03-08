import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
   
   public showTimeline:boolean = true;
   public showTask:boolean = false;
   public showProject:boolean = false;

    constructor(private appService: AppService) {} 

   public toggleTask(): void { 
     this.showTask = !this.showTask; 
     this.showTimeline = false;
     this.showProject = false;
   }
   
   public toggleTimeline(): void { 
     this.showTimeline = !this.showTimeline;
     this.showTask = false; 
     this.showProject = false;
   }
   public toggleProject(): void { 
     this.showProject = !this.showProject;
     this.showTimeline = false; 
     this.showTask = false;
   }

}
