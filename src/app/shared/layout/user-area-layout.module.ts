import { CoreModule } from './../../core/core.module';
import { ProductMngComponent } from './../../pages/product-mng/product-mng.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemService } from '../mock/menu-items';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './../../pages/pages.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from '../../pages/user-mng/user.component';
import { UserAreaLayoutComponent } from './user-area-layout.component';
import { UserDetailComponent } from '../../pages/user-mng/user-detail/user-detail.component';

export const routes: Routes = [
  {
    path: 'users', component: UserComponent,
  },
  {
    path: 'products', component: ProductMngComponent
  }
];

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, UserAreaLayoutComponent],
  imports: [
    CommonModule,
    PagesModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [HeaderComponent, SidebarComponent, UserAreaLayoutComponent],
  providers: [MenuItemService]
})
export class UserAreaLayoutModule { }
