import { Component, OnInit, Input, TemplateRef, ViewChild, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit, AfterViewInit {

  @Input() tabId !: string;
  @Input() tabHeader !: string;
  @ViewChild('templateRef', { static: true }) content: TemplateRef<any>;
  constructor(private changeDetector: ChangeDetectorRef) {
    // console.log(elementRef);
    // this.content = viewContainerRef.element;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }

}
