import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePickerDirective } from 'ng2-jalali-date-picker';
import * as moment from 'jalali-moment';
import { Subject } from 'rxjs';

// const uuid = require('uuid/v4');

@Component({
  selector: 'app-persian-date-picker',
  templateUrl: './persian-date-picker.component.html',
  styleUrls: ['./persian-date-picker.component.scss']
})
export class PersianDatePickerComponent implements OnInit {
  dateValue: any;
  defaultVisibleDate: boolean = false;
  @Input() required: boolean = false;
  @Input('config') config: any = {};
  @Input('mode') mode: any;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input('minTime') minTime: any;
  @Input('fgName') fgName: string;
  @Input('fcName') fcName: string;
  @Output() valueChange: EventEmitter<any>;
  // @ViewChild(DxTextBoxComponent) datePickerInput: MatInC;
  @ViewChild(DatePickerDirective) datePickerDirective: DatePickerDirective;
  @Input() label: string;
  minimumDate: Subject<any> = new Subject();
  maximumDate: Subject<any> = new Subject();

  constructor(private ts: TranslateService) {
    this.valueChange = new EventEmitter<string>();
    this.maximumDate.subscribe(res => {
      const maxDate = typeof res === 'object' ? moment(res).locale('fa').format('YYYY/MM/DD') : res;
      this.config = { ...this.config, max: moment.from(maxDate, 'fa', 'YYYY/MM/DD') };
    });
    this.minimumDate.subscribe(res => {
      const minDate = typeof res === 'object' ? moment(res).locale('fa').format('YYYY/MM/DD') : res;
      this.config = { ...this.config, min: moment.from(minDate, 'fa', 'YYYY/MM/DD') };
    });
    // this.gValueChange = new EventEmitter<string>();
  }


  // @Input()
  // get gValue() {
  //   return this.dateValue;
  // }

  // set gValue(value) {
  //   // if (this.outputType !== 'jalali') {
  //     this.dateValue = value;
  //     this.valueChange.emit(this.dateValue);
  // }
  // }

  @Input()
  get value() {
    return this.dateValue;
    // if (this.outputType !== 'jalali') {
    // return moment.from(this.dateValue, 'fa', 'YYYY/MM/DD').toString();
    // } else {
    // }
  }

  set value(value) {
    if (value) {
      if (this.mode === 'daytime') {
        if (typeof value === 'number') {
          this.dateValue = moment(value).locale('fa').format('YYYY-MM-DD HH:mm:ss');
          // this.dateValue = value;
          // this.valueChange.emit(this.dateValue);
        } if (typeof value === 'string') {
          // const test = new Date(moment(value, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')).getTime();
          this.dateValue = value;
          this.valueChange.emit(value);
        }
      } else {
        if (typeof value === 'number') {
          this.dateValue = moment(value).locale('fa').format('YYYY-MM-DD');
        } else {
          const test = new Date(moment(value, 'jYYYY/jMM/jDD').format('YYYY/MM/DD')).getTime();
          this.valueChange.emit(test);
        }
      }
    } else {
      this.dateValue = '';
    }
  }

  ngOnInit() {
    if (!this.placeholder) {
      this.placeholder = this.ts.instant('general.date');
    } else {
      this.placeholder = this.ts.instant(this.placeholder);
    }
    // if (!this.label) {
    //   this.label = this.placeholder;
    // }
    if (!this.name) {
      // this.name = uuid().replace(/\-/g, '');
    }
  }

  dateValueChanged(e: any) {
    // if (this.outputType !== 'jalali') {
    //   if (!e) {
    //     this.gDateValue = null;
    //   } else {
    //   }
    //   this.gValueChange.emit(this.gDateValue);
    // } else {
    // const timeStamp = new Date(moment(this.dateValue, 'jYYYY/jMM/jDD').format('YYYY/MM/DD')).getTime();
    this.valueChange.emit(this.dateValue);
    // }
  }

  clearDateValue(e: any) {
    if (e.value === '') {
      this.dateValue = e.value;
      this.valueChange.emit(this.dateValue);
    }
  }

  openDatePicker(e: any): void {
    this.datePickerDirective.api.open();
  }

  toggleDefaultDate() {
    this.defaultVisibleDate = !this.defaultVisibleDate;
  }
}
