import { Component, Inject } from '@angular/core';
import { IncToken } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(@Inject(IncToken) private test: any) {
    console.log(this.test);
  }
}
