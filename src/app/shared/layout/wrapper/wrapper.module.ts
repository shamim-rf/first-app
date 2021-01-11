import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { UserAreaLayoutModule } from '../user-area-layout.module';
import { UserAreaLayoutComponent } from '../user-area-layout.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@angular/flex-layout';

const routes = [
  { path: '', component: UserAreaLayoutComponent }
];

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    RouterModule.forChild(routes),
    UserAreaLayoutModule,
    CommonModule,
    CoreModule,
  ]
})
export class WrapperModule {
 }
