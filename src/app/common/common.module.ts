import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { TabsComponent } from './component/tabs/tabs.component';
import { TabComponent } from './component/tabs/tab/tab.component';
import { TabDirective } from './component/tabs/tab/tab.directive';


@NgModule({
  declarations: [TabsComponent, TabComponent, TabDirective],
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  exports: [
    TabsComponent, TabComponent, TabDirective
  ]
})
export class CommonItemsModule { }
