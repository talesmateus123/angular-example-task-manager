import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TaskService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @ViewChild('formTask') formTask:NgForm;
  task:Task;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  /**
   * Validate if there are validation errors, save Task using TaskService and navigate to '/tasks'
   */
  saveTask():void{
    // Validate validation errors
    if(this.formTask.form.valid){
      this.taskService.newTask(this.task);
      this.router.navigate(["/tasks"]);
    }
    
  }

}
