import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '이벤트 바인딩 실습예제1';
  btnLabel = '';
  clickHandler(event) {
    this.btnLabel = event.target.innerText;
  }
}
