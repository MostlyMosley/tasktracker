import { Component, OnInit } from '@angular/core';
import {CategoryLabel, CategoryTaskList, TaskListModel, TaskModel} from '../../assets/models/task.model';
import {TaskService} from '../services/task.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'tt-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: BehaviorSubject<CategoryTaskList[]> = new BehaviorSubject<CategoryTaskList[]>([]);

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().then((taskLists) => {
      this.taskList.next(taskLists.taskCategories.map((cat) => {
        return {category: cat, tasks: taskLists.tasks.filter((task) => task.category === cat.category)};
      }));
    });
  }

}
