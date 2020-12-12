import { TranslateService } from '@ngx-translate/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ErrorMessageType } from './../../../shared/types/error-message';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  // @Input() showMessages = true;
  @Input() errorMessage: ErrorMessageType = new ErrorMessageType();
  @ContentChild(NgControl, { static: true }) private ngCtrl: NgControl;
  constructor(private trans: TranslateService) { }

  ngOnInit(): void {
  }


  get errorText() {
    let error;
    if (this.ngCtrl && this.ngCtrl.errors && (this.ngCtrl.touched)) {
      error = this.localizeError(this.ngCtrl.errors);
    }
    if (this.ngCtrl && this.ngCtrl.control.value) { this.ngCtrl.control.markAsTouched(); }

    return error;
  }

  localizeError(err: ValidationErrors) {
    let text: string;
    if (err.required) {
      this.errorMessage.required ? text = this.errorMessage.required : text = this.trans.instant('required');
    } else if (err.min) {
      this.errorMessage.min ? text = this.errorMessage.min :
        text = this.trans.instant('validation-err-min').replace('{0}', err.min.requiredMin);
    } else if (err.max) {
      this.errorMessage.max ? text = this.errorMessage.max :
        text = this.trans.instant('validation-err-max').replace('{0}', err.max.requiredMax);
    } else if (err.minlength) {
      this.errorMessage.minlength ? text = this.errorMessage.minlength :
        text = this.trans.instant('validation-err-minlength').replace('{0}', err.minlength.requiredLength);
    } else if (err.maxlength) {
      this.errorMessage.maxlength ? text = this.errorMessage.maxlength :
        text = this.trans.instant('validation-err-maxlength').replace('{0}', err.maxlength.requiredLength);
    } else if (err.email) {
      this.errorMessage.email ? text = this.errorMessage.email : text = this.trans.instant('validation-err-email');
    } else if (err.nationalCodeValidator) {
      this.errorMessage.nationalCodeValidator ? text = this.errorMessage.nationalCodeValidator :
        text = this.trans.instant('validation-err-invalid-national-code');
    } else if (err.equalWith) {
      this.errorMessage.equalWith ? text = this.errorMessage.equalWith : text = err.equalWith.message;
    } else {
      this.errorMessage.customErrorMsg ? text = this.errorMessage.customErrorMsg :
        text = this.trans.instant('validation-err-unknown');
    }
    return text;
  }
}
