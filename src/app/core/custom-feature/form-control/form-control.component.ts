import { TranslateService } from '@ngx-translate/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { AfterContentChecked, Component, ContentChild, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ErrorMessageType } from './../../../shared/types/error-message';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, AfterContentChecked {
  @Input() errorMessage: ErrorMessageType = new ErrorMessageType();
  @ContentChild(NgControl, { static: true }) private ngCtrl: NgControl;
  constructor(private tr: TranslateService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  get errorText() {
    let error;
    if (this.ngCtrl && this.ngCtrl.errors && (this.ngCtrl.touched)) {
      error = this.generateErrors(this.ngCtrl.errors);
    }
    if (this.ngCtrl && this.ngCtrl.control.value) {
      this.ngCtrl.control.markAsTouched();
    }

    return error;
  }

  generateErrors(err: ValidationErrors) {
    let text: string;
    if (err.required) {
      this.errorMessage.required ? text = this.errorMessage.required : text = this.tr.instant('general.required');
    }
    if (err.minlength) {
      this.errorMessage.minlength ? text = this.errorMessage.minlength :
        text = `${this.tr.instant('general.min')} ${err.minlength?.requiredLength} ${this.tr.instant('general.character')}`;
    }
    if (err.maxlength) {
      this.errorMessage.maxlength ? text = this.errorMessage.maxlength :
        text = `${this.tr.instant('general.max')} ${err.maxlength?.requiredLength} ${this.tr.instant('general.character')}`;
    }

    return text;
  }

  ngAfterContentChecked() {
  }
}
