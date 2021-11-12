import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item" (contextmenu)="completeTodo($event)">
      <div class="col-12" (click)="toggleExpand($event)">
        {{ item.title }} 
        <span class="">
          <span class="plus fr">+</span>
          <span class="minus fr">-</span>
        </span>
      </div>
      <div class="details-box col-12">
          <table class="table-res">
            <thead>
              <tr>
                  <th>Title</th>
                  <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{item.title}}</td>
                <td>{{item.details}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() {}

  ngOnInit(): void {}

  completeTodo(event): void {
    event.preventDefault();
    event.target.classList.toggle('completed');
  }
  toggleExpand(event): void {
    let target = event.target;
    let parent = target.parentElement;
    parent.classList.toggle('expand');
  }
}
