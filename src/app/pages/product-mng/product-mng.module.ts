import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductMngComponent } from './product-mng.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
export const routes: Routes = [
  {
    path: '', component: ProductMngComponent
  },
  {
    path: 'add', component: ProductCrudComponent
  }
];


@NgModule({
  declarations: [ProductMngComponent , ProductCrudComponent ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductMngModule { }
