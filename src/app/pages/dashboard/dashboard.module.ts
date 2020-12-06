import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const route: Routes = [
  {
    path: '', component: DashboardComponent
  }
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class DashboardModule { }
