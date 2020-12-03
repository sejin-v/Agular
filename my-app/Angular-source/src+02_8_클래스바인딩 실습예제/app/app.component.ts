import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '이벤트 바인딩 실습예제 3';
  data = '';
  keyupHandler(event) {
    this.data = event.target.value.length;
  }
}
