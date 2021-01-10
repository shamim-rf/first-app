import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemService } from '../mock/menu-items';
import { CoreModule } from './../../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './../../pages/pages.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserAreaLayoutComponent } from './user-area-layout.component';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren:
      () => import('../../pages/user-mng/user-mng.module').then(m => m.UserMngModule)
  },
  {
    path: 'products',
    loadChildren:
      () => import('../../pages/product-mng/product-mng.module').then(m => m.ProductMngModule)
  },
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
  providers: []
})
export class UserAreaLayoutModule { }
