import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToggleBtnComponent } from './custom-feature/toggle-btn/toggle-btn.component';
import { ConfirmationComponent } from './custom-feature/confirmation/confirmation.component';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';



@NgModule({
  declarations: [ToggleBtnComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    DpDatePickerModule
  ],
  exports:[
    ToggleBtnComponent,
    ConfirmationComponent,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    DpDatePickerModule
  ]
})
export class CoreModule { }
