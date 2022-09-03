import { Injectable } from '@angular/core';
import { TaskListModel, TaskTestTaskListModel } from '../../assets/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Promise<TaskListModel> {
    return Promise.resolve(TaskTestTaskListModel);
  }
}
