import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: any = '';
  description: string = '';
  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
  }
  handleSubmit(){
    this.taskService.addTask(this.title, this.description);
  }

}
