import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user-mng/user.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditableTableComponent } from './editable/editable-table.component';
import { UserDetailComponent } from './user-mng/user-detail/user-detail.component';
import { ProductMngComponent } from './product-mng/product-mng.component';
import { UserService } from '../shared/services/user.service';

@NgModule({
  declarations: [UserComponent, UserDetailComponent, EditableTableComponent, DialogComponent, ProductMngComponent],
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
