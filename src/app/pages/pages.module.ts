import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { UserComponent } from './user-mng/user.component';
import { RoleComponent } from './role-mng/role.component';
import { UserService } from '../shared/services/user.service';
import { ActivityComponent } from './activity-mng/activity.component';
import { ProductMngComponent } from './product-mng/product-mng.component';
import { UserDetailComponent } from './user-mng/user-detail/user-detail.component';
import { UserPersonalInfoComponent } from './user-mng/user-detail/user-personal-info/user-personal-info.component';
import { UserPictureComponent } from './user-mng/user-detail/user-picture/user-picture.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    ProductMngComponent,
    RoleComponent,
    ActivityComponent,
    UserPersonalInfoComponent,
    UserPictureComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  providers: [UserService]
})
export class PagesModule { }
