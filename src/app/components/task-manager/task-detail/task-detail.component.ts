import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ActivatedRoute } from '@angular/router';
import { TaskserviceService } from 'src/app/services/taskservice.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = null;
  constructor(
    private taskService: TaskserviceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    this.task = this.taskService.getTaskDetail(parseInt(this.route.snapshot.params.id));
  }

}
