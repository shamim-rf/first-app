import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material/material.module';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToggleBtnComponent } from './custom-feature/toggle-btn/toggle-btn.component';
import { FormControlComponent } from './custom-feature/form-control/form-control.component';
import { ConfirmationComponent } from './custom-feature/confirmation/confirmation.component';
import { PersianDatePickerComponent } from './custom-feature/persian-date-picker/persian-date-picker.component';
import { MdbModule } from './mdb/mdb.module';

const COMPONENTS = [
  ToggleBtnComponent,
  ConfirmationComponent,
  PersianDatePickerComponent,
  FormControlComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    DpDatePickerModule,
    MDBBootstrapModule,
    MdbModule
  ],
  exports: [
    ...COMPONENTS,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    DpDatePickerModule,
    MDBBootstrapModule,
    MdbModule
  ]
})
export class CoreModule { }
