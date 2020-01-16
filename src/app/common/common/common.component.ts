import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/sample/sample.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor(private sampleService: SampleService) {
    console.log('From common module: ' + sampleService.getData());
  }

  ngOnInit() {
  }

}
