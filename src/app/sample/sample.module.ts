import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { SampleRoutingModule } from './sample-routing.module';
import { StepperComponent } from './stepper/stepper.component';
import { SampleService } from './sample.service';
import { SAMPLE_TOKEN } from './sample.config';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [StepperComponent, SampleComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    CdkStepperModule
  ]
})
export class SampleModule {
  static forRoot(data: string): ModuleWithProviders<SampleModule> {
    return {
      ngModule: SampleModule,
      providers: [
        {
          provide: SAMPLE_TOKEN,
          useValue: data
        },
        SampleService
      ]
    };
  }
}
