import {TasksComponent} from '../../app/tasks/tasks.component';

export interface TaskStyle {
  backgroundStyle?: {
    type: 'img' | 'color',
    bg: string,
  };
  titleStyle?: {
    type: 'img' | 'color',
    bg: string,
  };
}

// This will be the only object returned
export interface TaskListModel {
  taskCategories: CategoryLabel[];
  tasks: TaskModel[];
}

export interface CategoryLabel {
  category: string;
  label: string;
}

export interface CategoryTaskList {
  category: CategoryLabel;
  tasks: TaskModel[];
}

export const TaskTestCategoryList: CategoryLabel[] = [
  {category: 'open', label: 'Open'},
  {category: 'inProgress', label: 'In Progress'},
  {category: 'closed', label: 'Closed'},
  {category: 'waitingOnSomeone', label: 'Waiting on Someone'},
  {category: 'expired', label: 'Expired'}
];

export interface TaskModel {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  comments: TaskComment[];
  style: TaskStyle;
  lastUpdated: Date;
  createdDate: Date;
}

export interface TaskComment {
  comment: string;
  dateTime: Date;
  user: string;
  id: number;
}

export const TaskTestMainTaskList: TaskModel[] = [
  {
    category: 'open',
    title: 'First open task',
    subtitle: 'Talk to -blank-',
    description: 'This is the content of the first task.',
    comments: [
      {
        comment: 'This is a comment.',
        dateTime: new Date(),
        user: 'Ryan',
        id: 1
      }
    ],
    style: {},
    lastUpdated: new Date(),
    createdDate: new Date(new Date().getDate() - 5)
  },
  {
    category: 'inProgress',
    title: 'First in progress task',
    subtitle: 'Talk to -blank-',
    description: 'Second task, this one is in progress.',
    comments: [
      {
        comment: 'This is a comment.',
        dateTime: new Date(),
        user: 'Ryan',
        id: 1
      }
    ],
    style: {},
    lastUpdated: new Date(),
    createdDate: new Date(new Date().getDate() - 3)
  },
  {
    category: 'closed',
    title: 'First close task',
    subtitle: 'Talk to -blank-',
    description: 'This is the closed task, yeah, this one, closed.',
    comments: [
      {
        comment: 'This is a comment.',
        dateTime: new Date(),
        user: 'Ryan',
        id: 1
      }
    ],
    style: {},
    lastUpdated: new Date(),
    createdDate: new Date(new Date().getDate() - 9)
  },
  {
    category: 'waitingOnSomeone',
    title: 'Waiting on someone for this one.',
    subtitle: 'Talk to -blank-',
    description: 'This task needs ',
    comments: [
      {
        comment: 'This is a comment.',
        dateTime: new Date(),
        user: 'Ryan',
        id: 1
      }
    ],
    style: {},
    lastUpdated: new Date(),
    createdDate: new Date(new Date().getDate() - 5)
  },
];

export const TaskTestTaskListModel: TaskListModel = {
  taskCategories: TaskTestCategoryList,
  tasks: TaskTestMainTaskList
};

