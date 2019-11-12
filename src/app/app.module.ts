import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncToken } from './app.config';

import * as json from '../assets/test.json';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: IncToken,
      useValue: (json as any).default
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
