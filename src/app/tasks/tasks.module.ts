import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTaskComponent } from './list/';
import { NewTaskComponent } from './new/';
import { UpdateTaskComponent } from './update/';



@NgModule({
  declarations: [ListTaskComponent, NewTaskComponent, UpdateTaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
