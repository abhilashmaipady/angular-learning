import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncToken } from './app.config';

import * as json from '../assets/test.json';
import { SharedComponent } from './shared/shared.component';
import { CommonItemsModule } from './common/common.module';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { FormsModule } from '@angular/forms';
import { DateComponent } from './date/date.component';
import { SlickGridComponent } from './slick-grid/slick-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { DateService } from './date/date.service';
import { SampleModule } from './sample/sample.module';
@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ChildOneComponent,
    ChildTwoComponent,
    DateComponent,
    SlickGridComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonItemsModule,
    DpDatePickerModule,
    AngularSlickgridModule.forRoot(),
    SampleModule.forRoot('xyz')
  ],
  providers: [
    {
      provide: IncToken,
      useValue: (json as any).default
    },
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
