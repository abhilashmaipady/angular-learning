import { Component, OnInit, Input, forwardRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import moment from 'moment';
import { IDatePickerConfig, ɵb as MomentUtil, DatePickerComponent } from 'ng2-date-picker';
import { DateService } from './date.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateComponent),
  multi: true
};

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DateComponent implements OnInit, ControlValueAccessor {

  @ViewChild('datepicker', { static: true }) datePicker: DatePickerComponent;

  tempValue: Date | Array<Date>;
  @Input() config: IDatePickerConfig;
  private date: moment.Moment | Array<moment.Moment>;
  private readonly datePickerConfig: IDatePickerConfig = {
    format: 'DD-MM-YYYY',
    allowMultiSelect: true
  }
  private readonly momentUtil = new MomentUtil();
  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;

  constructor(private dateService: DateService, private cdr: ChangeDetectorRef) {
    this.dateService.setDate([moment(new Date()), moment(new Date().setDate(15))]);
  }
  // From ControlValueAccessor interface
  writeValue(value: Date | Array<Date>) {
    if (value !== null || value !== undefined || value instanceof Array && value.length > 0) {
      this.date = this.convertDateToMoment(value);
      this.cdr.detectChanges();
    }

  }
  convertDateToMoment(value: Date | Array<Date>) {
    if (value instanceof Date) {
      return moment(value, this.datePickerConfig.format);
    } else if (value instanceof Array) {
      return value.map(d => this.convertDateToMoment(d));
    }
  }

  convertDateFromMoment(value: moment.Moment | Array<moment.Moment>) {
    if (value instanceof Array) {
      return value.map(ele => this.convertDateFromMoment(ele));
    } else {
      return value.toDate();
    }
  }

  readValue(value: moment.Moment) {
    this.trimArray(value);
    this.onChangeCallback(this.convertDateFromMoment(this.date));
  }
  // get accessor
  get value(): any {
    return this.tempValue;
  }

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.tempValue) {
      this.tempValue = v;
      this.onChangeCallback(v);
    }
  }
  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  ngOnInit() {
    this.config = {
      ...this.datePickerConfig,
      ...this.config
    };
    // this.dateService.date$.subscribe(date => {
    //   this.date = date;
    //   console.log(date);
    // });
  }
  trimArray(event) {
    if (this.date instanceof Array && this.date.length > 2) {
      this.date = this.date.slice(this.date.length - 2);
    }
  }
}
