import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { IDatePickerConfig, ɵb as MomentUtil } from 'ng2-date-picker';
import { DateService } from './date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  private date: moment.Moment | Array<moment.Moment>;
  private readonly datePickerConfig: IDatePickerConfig = {
    format: 'DD-MM-YYYY',
    allowMultiSelect: true
  }
  private readonly momentUtil = new MomentUtil();
  constructor(private dateService: DateService) {
    this.dateService.setDate([moment(new Date()), moment(new Date().setDate(15))]);
  }

  ngOnInit() {
    this.dateService.date$.subscribe(date => {
      this.date = date;
      console.log(date);
    })
  }
  trimArray(event) {
    if (this.date instanceof Array && this.date.length > 2) {
      this.date = this.date.slice(this.date.length - 2);
    }
  }
}
