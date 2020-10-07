import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  today = new Date();
  otherDay = new Date();
  date: Date | Array<Date> = [this.today, this.otherDay];
  constructor() {
    this.otherDay.setDate(25);
  }

  ngOnInit() {
  }
  onChange(event) {
    console.log(event);
  }

}
