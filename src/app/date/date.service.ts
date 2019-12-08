import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private readonly dateSubejct = new BehaviorSubject<moment.Moment[]>(null);
  date$: Observable<moment.Moment[]> = this.dateSubejct.asObservable();
  constructor() { }
  setDate(arr: moment.Moment[]) {
    this.dateSubejct.next(arr);
  }
}
