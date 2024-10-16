import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { ViewTaskComponent } from './Components/view-task/view-task.component';

const routes: Routes = [
  { path:'' , component: TaskListComponent} ,
  { path:'tasks' , component: TaskListComponent} ,
  {path:'view/:id/:mood' , component:ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
