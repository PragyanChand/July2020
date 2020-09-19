import { Injectable } from '@angular/core';
import { Task } from 'src/app/model/task';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  tasks: Task[] = [

    new Task ( 1,'Task1','Angular'),
    new Task ( 2,'Task2','Angular'),
    new Task ( 3,'Task3','Angular')
  ];
  constructor(private http: HttpClient) {}
  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:3000/task').pipe(retry(1),catchError(this.handleError), catchError(this.handleError));
    //return await this.http.get<Task[]>('http://localhost:3000/task').toPromise();
  }/*
   getTask(){
    const promise = this.http.get('http://localhost:3000/task').toPromise();
    promise.then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
    return promise;
  }
  async getTask() {
    return await this.http.get<Task[]>('http://localhost:3000/task').toPromise();
}*/
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
  }
  getTaskDetail(id){
    let a = this.tasks.filter(i=>i.id===id);
    return a[0];
    /*for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id === id){
        return this.tasks[i];
      }
    }*/
  }
  handleError(error: HttpErrorResponse){
    console.log("Oops something went wrong");
    return throwError(error);
    /*if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    //return throwError('Something bad happened; please try again later.');
    */
    }
    testMethod(){
      console.log("Executing");
      return false;
    }
}
