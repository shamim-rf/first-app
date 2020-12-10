import { UserDetailComponent } from './../../pages/user-mng/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemService } from '../mock/menu-items';
import { CoreModule } from './../../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './../../pages/pages.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from '../../pages/user-mng/user.component';
import { RoleComponent } from './../../pages/role-mng/role.component';
import { UserAreaLayoutComponent } from './user-area-layout.component';
import { ActivityComponent } from './../../pages/activity-mng/activity.component';
import { ProductMngComponent } from './../../pages/product-mng/product-mng.component';

export const routes: Routes = [
  {
    path: 'users', component: UserComponent,
  },
  {
    path: 'users/:add', component: UserDetailComponent,
  },
  {
    path: 'role', component: RoleComponent,
  },
  {
    path: 'activity', component: ActivityComponent,
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
