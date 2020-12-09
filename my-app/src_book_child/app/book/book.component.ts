import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() books: [];
  @Input() title: string;
  @Output() name = new EventEmitter();
  handler(name) {
    this.name.emit(name);
  }
  constructor() {}

  ngOnInit(): void {}
}
