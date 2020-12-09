import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'class 바인딩';
  flag = false;
  handleEvent(bool: boolean) {
    this.flag = bool;
  }
}
