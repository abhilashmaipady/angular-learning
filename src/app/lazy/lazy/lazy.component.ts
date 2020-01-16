import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/sample/sample.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private sampleService: SampleService) {
    console.log('From lazy module: ' + sampleService.getData());
  }

  ngOnInit() {
  }

}
