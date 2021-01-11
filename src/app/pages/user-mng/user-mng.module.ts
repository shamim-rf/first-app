import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPersonalInfoComponent } from './user-detail/user-personal-info/user-personal-info.component';
import { UserPictureComponent } from './user-detail/user-picture/user-picture.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { UserComponent } from './user.component';
import { UserService } from 'src/app/shared/services/user.service';

const routes: Routes = [
  {
    path: '', component: UserComponent,
  },
  {
    path: 'add', component: UserDetailComponent,
  },
]

@NgModule({
  declarations: [UserComponent, UserPersonalInfoComponent, UserPictureComponent, UserDetailComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class UserMngModule {
}
