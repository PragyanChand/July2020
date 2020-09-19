import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  constructor(private taskservice: TaskserviceService) { 

  }

  ngOnInit() {
     this.taskservice.getTask().subscribe((data)=>{
      this.taskList = data;
    });
  }
  


}
