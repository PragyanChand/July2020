import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDetailComponent } from 'src/app/components/task-manager/task-detail/task-detail.component';
import { TaskManagerComponent } from 'src/app/components/task-manager/task-manager.component';
import { TaskFormComponent } from 'src/app/components/task-manager/task-form/task-form.component';
import { TaskListComponent } from 'src/app/components/task-manager/task-list/task-list.component';
import { TaskItemComponent } from 'src/app/components/task-manager/task-list/task-item/task-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskDetailComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskManagerComponent
  ]
})
export class TaskManagerModule { }
