import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService  {

  // url :string = 'http://localhost:3000/data'
  constructor(private _HttpClient:HttpClient) { }

  getAllTasks() :Observable<Task[]>{
  return this._HttpClient.get<Task[]>('data');
  }
 
  getTaskByID(id:number):Observable<Task>{
    return this._HttpClient.get<Task>(`data/${id}`);
  }
  onTogglecompletaion(id:number, data:Task):Observable<any>{
    return this._HttpClient.put(`data/${id}`,data);
  }

}
