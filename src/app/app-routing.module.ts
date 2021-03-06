import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SlickGridComponent } from './slick-grid/slick-grid.component';
import { SampleModule } from './sample/sample.module';
import { CommonComponent } from './common/common/common.component';


const routes: Route[] = [
  { path: '', component: SlickGridComponent },
  { path: 'common', component: CommonComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) },
  { path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule) }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
