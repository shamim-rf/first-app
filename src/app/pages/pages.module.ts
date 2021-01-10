import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { RoleComponent } from './role-mng/role.component';
import { UserService } from '../shared/services/user.service';
import { ActivityComponent } from './activity-mng/activity.component';

@NgModule({
  declarations: [
    RoleComponent,
    ActivityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  providers: [UserService]
})
export class PagesModule { }
