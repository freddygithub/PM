import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { TaskViewComponent } from './task-view/task-view.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    TimelineComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export interface Task {

    id: string;

    description: string;

}
