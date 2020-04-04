import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TaskService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;
  constructor(
    private taskService: TaskService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    const id =+this.route.snapshot.params['id'];
    this.task = this.taskService.searchTaskById(id);
  }

  update(){
    if(this.formTask.valid){
      this.taskService.updateTask(this.task);
      this.router.navigate(['tasks']);
    }
    

  }
}
