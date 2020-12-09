import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  best_item = 'orange';
  items = {
    apple: '사과',
    melon: '멜론',
    orange: '오렌지',
  };
}
