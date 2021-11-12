import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="app-title">
      {{ title }}
    </h2>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDos List';
}
