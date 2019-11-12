import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { TabsComponent } from './component/tabs/tabs.component';
import { TabComponent } from './component/tabs/tab/tab.component';


@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }
