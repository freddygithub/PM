import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskViewService {

  todoArray=["working"]
  todoDesArray=[]
  todoCatArray=[]
  todoDateArray=[]
  
  constructor() { }
  
  setValueTodoArray(array){
    this.todoArray = array;
  }
   setValueTodoDesArray(array){
    this.todoDesArray = array;
  }
   setValueTodoCatArray(array){
    this.todoCatArray = array;
  }
   setValueTodoDateArray(array){
    this.todoDateArray = array;
  }
  getValueTodoArray(){
    return this.todoArray;
  }
  getValueTodoDesArray(){
    return this.todoDesArray;
  }
   getValueTodoCatArray(){
    return this.todoCatArray;
  }
   getValueTodoDateArray(){
    return this.todoDateArray;
  }
}
