import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { TaskDetailComponent } from 'src/app/components/task-manager/task-detail/task-detail.component';
import { TaskManagerComponent } from 'src/app/components/task-manager/task-manager.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'task', component: TaskManagerComponent},
  {path:'task/:id/:name', component: TaskDetailComponent},
  {path:'**', component: RegisterComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
