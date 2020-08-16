import { Injectable } from '@angular/core';
import { Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  tasks: Task[] = [

    new Task ( 1,'Task1','Angular'),
    new Task ( 2,'Task2','Angular'),
    new Task ( 3,'Task3','Angular')
  ];
  constructor() {}
  getTask(){
    return this.tasks;
  }
  addTask(title, description){
    const newTask = new Task(
      this.tasks.length + 1, title, description
    )
    this.tasks.push(newTask);
  }
  deleteTask(id){
    for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id === id){
        this.tasks.splice(i,1);
      }
    }
    let a = this.tasks.filter(i=>i.id===id);
    console.log(a);
  }
}
