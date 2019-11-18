import { Component, OnInit, QueryList, ContentChildren, AfterViewInit, TemplateRef, ContentChild } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit, AfterViewInit {

  // @ContentChild(TemplateRef, { static: true }) templateRef: TemplateRef<TabComponent>;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tabs.forEach(tab => console.log(tab.content));
  }

}
