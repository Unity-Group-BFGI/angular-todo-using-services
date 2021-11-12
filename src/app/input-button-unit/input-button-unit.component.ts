import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UrlWithStringQuery } from 'url';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <div class="row">
      <div class="col-12 mb-2">
        <input class="todo-input" #inputElementRef [value]="title" placeholder="todo title">
      </div>
      <div class="col-12 mb-2">
        <textarea class="todo-input" #textElementRef placeholder="Detail about todo" [value]="details"></textarea>
      </div>
        <button class="btn" (click)="submitBothValue(inputElementRef.value,textElementRef.value)">
          Save
        </button>
    </div>
  `,
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<{ title: string; details: string }> =
    new EventEmitter<{ title: string; details: string }>();

  title = 'Hello World';
  details = 'This is todo details';

  constructor() {}

  ngOnInit(): void {}

  submitBothValue(newTitle: string, newDetails: string): void {
    this.submit.emit({ title: newTitle, details: newDetails });
  }
}
