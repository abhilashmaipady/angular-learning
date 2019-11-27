import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent extends CdkStepper implements OnInit {

  constructor(dir: Directionality, changeDetector: ChangeDetectorRef) {
    super(dir, changeDetector);
  }

  ngOnInit() {
  }

}
