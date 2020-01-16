import { Component, Inject } from '@angular/core';
import { IncToken } from './app.config';
import { SampleService } from './sample/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(@Inject(IncToken) private test: any, private sampleService: SampleService) {
    console.log('From app module: ' + sampleService.getData());
  }
}
