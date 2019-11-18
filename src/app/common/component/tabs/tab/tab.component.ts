import { Component, OnInit, Input, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {

  @Input() tabId !: string;
  @Input() tabHeader !: string;
  content: any;
  constructor(private viewContainerRef: ViewContainerRef) {
    // console.log(elementRef);
    this.content = viewContainerRef.element;
  }

  ngOnInit() {
  }

}
