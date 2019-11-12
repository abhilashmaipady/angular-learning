import { Component, OnInit, QueryList, ContentChildren, AfterViewInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
