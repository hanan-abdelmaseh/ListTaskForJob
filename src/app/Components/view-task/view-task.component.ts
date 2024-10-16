import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Models/task.model';
import { TasksService } from 'src/app/Services/tasks.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  taskId:number ;
  taskItem!:Task ;
constructor( private _taskService:TasksService,
  private _ActivatedRoute: ActivatedRoute
,private _Router:Router) {
  this.taskId = this._ActivatedRoute.snapshot.params['id'];

}
  ngOnInit(): void {
    this.getTaskById();
  }
  getTaskById(){
    this._taskService.getTaskByID(this.taskId).subscribe((res)=>{
      this.taskItem = res
      console.log(this.taskItem)
    })
  }
  goBack(){
    this._Router.navigateByUrl('/tasks')
  }
}
