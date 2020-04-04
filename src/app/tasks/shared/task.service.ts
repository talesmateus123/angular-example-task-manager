import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  /**
   * This method is responsible for getting all tasks stored in 'localStorage'
   * @returns Task[]
   */
  listTasks():Task[]{
    const tasks = localStorage['tasks'];
    // If there are tasks, return the tasks converted to JSON, if not, return empty list
    return tasks ? JSON.parse(tasks) : [];
  }
  
  /**
   * This method is responsible for storing a new task in 'localStorage'
   * @param Task task 
   */
  newTask(task: Task):void{
    const tasks = this.listTasks();
    // Get a unique task ID
    task.id = new Date().getTime();
    tasks.push(task);
    // Convert tasks to string and stores in 'localStorage'
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * This method is responsible for searching tasks in 'localStorage' by ID, and return them
   * @param number id
   */
  searchTaskById(id: number):Task{
    const tasks:Task[] = this.listTasks();
    // Iterate each task and check that the ID is the same as the required ID. Then, it returns the corresponding task.
    return tasks.find(task => task.id ===id);
  }

  /**
   * This method is responsible for updating a inserted task
   * @param Task task 
   */
  updateTask(task: Task):void{
    const tasks:Task[] = this.listTasks();
    tasks.forEach((obj, index, objs) => {
      if(task.id === obj.id){
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * This method is responsible for removing the task by a inserted ID from 'localStorage' list.
   * @param number id 
   */
  removeTask(id: number):void{
    let tasks:Task[] = this.listTasks();
    // Return all tasks where the ID be different to inserted ID
    tasks = tasks.filter(task => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * This method is responsible for changing the 'status' of a task by inserted ID.
   * @param number id 
   */
  changeStatus(id: number):void{
    const tasks:Task[] = this.listTasks();
    tasks.forEach((obj, index, objs) => {
      if(id === obj.id){
        objs[index].finished = !obj.finished;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

}
