import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks : Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listTasks();
  }

  listTasks():Task[]{
    return this.taskService.listTasks();
  }

  delete($event: any, task: Task): void{
    if(confirm('Do you really want to delete a task "'+task.name+'"?')){
      this.taskService.removeTask(task.id);
      this.tasks = this.taskService.listTasks();
    }
  }

  changeStatus(task: Task){
    if(confirm('Do you really want to change the task "'+task.name+'" status?')){
      this.taskService.changeStatus(task.id);
      this.tasks = this.taskService.listTasks();
    }
  }

}
