import { TranslateService } from '@ngx-translate/core';
import { Component, ElementRef, forwardRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbCalendar, NgbCalendarPersian, NgbDatepicker, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18nPersian } from './localization/ngb-date-picker-i18n-persian';
import * as momentNS from 'moment-jalaali';
export const moment = momentNS;
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatePickerComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DatePickerComponent), multi: true, },
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @ViewChild('dp') dp: NgbDatepicker;
  @Input() disabled = false;
  @Input() placeholder: string;
  openCal = false;
  _text: string;
  _date: any;
  datePickerValue: any;
  private _onChangeCallback: any = () => { };
  private _onTouchedCallback: any = () => { };

  // @Input() set value(v) {
  //   if (v || v === null || v === undefined) {
  //     this._date = v;
  //   } else {
  //     throw new Error('invalid date value. valid date values: McbDate|null|undefined.');
  //   }
  // }

  constructor(
    public dialog: MatDialog,
    private ts: TranslateService,
    private calendar: NgbCalendar,
    private el: ElementRef) { }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.datePickerValue = this.calendar.getToday();
  }
  _onToggleBtnClick(e) {
    this.openCal = !this.openCal;
  }

  _updateText() {
    this._text = this._date ? this._date.format('jYYYY/jMM/jDD') : '';
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: MouseEvent): void {
    if (this.openCal) {
      let element;
      element = event.target;
      while (element) {
        if (element === this.el.nativeElement) {
          return;
        }
        element = element.parentNode;
      }
      this.openCal = false;
    }
  }

  _onTodayClick() {
    this._onDateSelect(this.calendar.getToday());
  }

  _onDateSelect(date: NgbDateStruct) {
    debugger
    this.openCal = false;
    this.datePickerValue = date;
    const m = moment(`${date.year}-${date.month}-${date.day}`, 'jYYYY-jMM-jDD');
    this._date = m;
    this._updateText();
  }

  _onInputFocus() {
    this.openCal = true;
  }

}
