/**
 * This module is responsible for set up the routes from TaskModule
 */
import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { NewTaskComponent } from './new';

export const TaskRoutes: Routes = [
  { path: 'tasks', redirectTo: 'tasks/list' },
  { path: 'tasks/list', component: ListTaskComponent },
  { path: 'tasks/new', component: NewTaskComponent },
];
