import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { SampleRoutingModule } from './sample-routing.module';
import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    CdkStepperModule
  ]
})
export class SampleModule { }
