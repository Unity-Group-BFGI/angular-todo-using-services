import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[] = [
    { title: 'install NodeJS', details: 'details about node js' },
    { title: 'install Angular CLI', details: ' details about angular cli' },
    { title: 'create new app', details: 'details about create new app' },
  ];

  constructor() {}

  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
