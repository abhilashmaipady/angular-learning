import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IDatePickerConfig } from 'ng2-date-picker';
@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  date: moment.Moment | Array<moment.Moment>;
  datePickerConfig: IDatePickerConfig = {
    format: 'DD-MM-YYYY',
    allowMultiSelect: true
  }
  constructor() { }

  ngOnInit() {
  }
  trimArray(event) {
    if (this.date instanceof Array && this.date.length > 2) {
      this.date = this.date.slice(this.date.length - 2);
    }
  }

}
