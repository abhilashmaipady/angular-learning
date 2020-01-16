import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy/lazy.component';
import { SampleModule } from '../sample/sample.module';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SampleModule
  ]
})
export class LazyModule { }
