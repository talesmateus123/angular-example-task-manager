import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, FinishedTaskDirective } from './shared';
import { ListTaskComponent } from './list/';
import { NewTaskComponent } from './new/';
import { UpdateTaskComponent } from './update/';



@NgModule({
  declarations: [ListTaskComponent, NewTaskComponent, UpdateTaskComponent, FinishedTaskDirective],
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
