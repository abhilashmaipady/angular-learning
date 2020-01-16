import { Injectable, Inject } from '@angular/core';
import { SAMPLE_TOKEN } from './sample.config';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private data: string;
  constructor(@Inject(SAMPLE_TOKEN) temp: string) {
    this.data = temp;
    console.log(this.data);
  }
  getData() {
    return this.data;
  }
}
