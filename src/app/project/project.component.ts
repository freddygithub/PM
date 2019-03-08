import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 
   todoArray=[{name: "Project management website", des: "the text on the description of the tasks are to small and make the main page look weird without a lot  of text.", date: "2019-01-07"},
   {name: "Mirror", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", date: "2019-10-07"},
   {name: "Bike", des: "the text on the description of the tasks are to small and make the main page look weird without a lot of text.", date: "2019-12-07"}]

  constructor() { }

  ngOnInit() {
  }

}
