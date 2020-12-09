import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component } from '@angular/core';
import { ResolveStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  guess = 0; //예측값
  original; //정답
  devitation; //ㅈㅓㅇ답 -예측값
  ngOftries; //시도횟수
  constructor() {
    this.original = Math.floor(Math.random() * 10 + 1);
    console.log(this.original);
    this.devitation = 0;
    this.ngOftries = 0;
  }
  ok(num) {
    this.guess = num;
    this.devitation = this.original - this.guess;
    this.ngOftries = this.ngOftries + 1;
  }
  restart() {
    this.guess = 0; //예측값
    this.devitation = 0;
    this.ngOftries = 0;
    this.original = Math.floor(Math.random() * 10 + 1);
    console.log(this.original);
  }
}
