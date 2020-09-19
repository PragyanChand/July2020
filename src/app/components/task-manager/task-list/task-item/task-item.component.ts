import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
  }
  handleDelete(){
    this.taskService.deleteTask(this.task.id);
  }
  getColor(title) { 
    switch (title) {
      case 'Task1':
        return 'green';
      case 'Task2':
        return 'blue';
      case 'Task3':
        return 'red';
      case 'Task4':
        return 'yellow';
      case 'Task5':
        return 'cyan';
    }
  }
}
