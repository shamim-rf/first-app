import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UserAreaLayoutModule } from './shared/layout/user-area-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from './material.persian-date.adapter';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const PERSIAN_DATE_FORMATS = {
  parse: {
    dateInput: "jYYYY/jMM/jDD"
  },
  display: {
    dateInput: "jYYYY/jMM/jDD",
    monthYearLabel: "jYYYY jMMMM",
    dateA11yLabel: "jYYYY/jMM/jDD",
    monthYearA11yLabel: "jYYYY jMMMM"
  }
};

// const data = require('../assets/i18n/dataTable.json');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fa',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    UserAreaLayoutModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fa-Fa'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



