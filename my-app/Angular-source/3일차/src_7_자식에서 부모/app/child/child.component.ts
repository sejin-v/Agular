import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() customEvent = new EventEmitter();

  send(name) {
    this.customEvent.emit(name); //부모에게 데이터 전달
  }
  constructor() {}

  ngOnInit(): void {}
}
