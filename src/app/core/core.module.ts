import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleBtnComponent } from './custom-feature/toggle-btn/toggle-btn.component';
import { FormControlComponent } from './custom-feature/form-control/form-control.component';
import { ConfirmationComponent } from './custom-feature/confirmation/confirmation.component';
import { PersianDatePickerComponent } from './custom-feature/persian-date-picker/persian-date-picker.component';
import { MobileValidatorDirective } from './custom-feature/validation/mobile-validator.directive';
import { DatePickerComponent } from './custom-feature/date-picker/date-picker.component';
import { FileUploadComponent } from './custom-feature/file-upload/file-upload.component';

const COMPONENTS = [
  ToggleBtnComponent,
  ConfirmationComponent,
  PersianDatePickerComponent,
  FormControlComponent,
  DatePickerComponent,
  FileUploadComponent];

@NgModule({
  declarations: [COMPONENTS, MobileValidatorDirective, DatePickerComponent, FileUploadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    DpDatePickerModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    DpDatePickerModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
