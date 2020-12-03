import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template reference variable #var 실습';
  flag = false; //전체선택 checkbox 상태값설정
  callPhone(phone: number): void {
    console.log(phone);
  }
  change(fruit: string): void {
    console.log(fruit);
  }
  check(chk: boolean) {
    console.log(chk);
    this.flag = chk;
  }
}
