import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/Services/tasks.service';
import { ChangeStatusComponent } from '../change-status/change-status.component';
import { Task } from 'src/app/Models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent  implements OnInit{
  
  displayedColumns: string[] = ['Name', 'Status', 'creationDate','Action'];
  dataSource = [];
  taskList :Task[] =[];

  constructor(private _TasksService:TasksService ,  public dialog: MatDialog){}

  ngOnInit(): void {
   this.getAllTasks();
  }

  getAllTasks(){
     this._TasksService.getAllTasks().subscribe((response)=>{
      
     this.taskList = response ;
     console.log(this.taskList)
     });
  }

  openChangeStatusDialog(taskData:Task){
    const dialogRef = this.dialog.open(ChangeStatusComponent, {
      data : taskData,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
    console.log(result);
      
    this.toggleStatus(result.id);
      }
      
   })
  }


 

  toggleStatus(id: number){
    this._TasksService.onTogglecompletaion(id).subscribe({
      next: (res: any) => {  
        console.log(res) 
      }, error: () => {
       
      },
      complete: ()=>{
        
        this.getAllTasks();
      }
    });
  }

}
