import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskManagerComponent } from './task-manager.component';

const routes: Routes = [
  {path:'task', component: TaskManagerComponent},
  {path:'task/:id/:name', component: TaskDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TaskManagerRoutingModule { }
