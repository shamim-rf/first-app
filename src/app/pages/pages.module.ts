import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user-mng/user.component';
import { UserDetailComponent } from './user-mng/user-detail/user-detail.component';
import { ProductMngComponent } from './product-mng/product-mng.component';
import { UserService } from '../shared/services/user.service';
import { RoleComponent } from './role-mng/role.component';
import { ActivityComponent } from './activity-mng/activity.component';

@NgModule({
  declarations: [UserComponent, UserDetailComponent, ProductMngComponent, RoleComponent, ActivityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule,
    NgxSpinnerModule,
  ],
  providers: [UserService]
})
export class PagesModule { }
