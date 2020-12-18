import { MobileValidatorDirective } from './../../../../core/custom-feature/validation/mobile-validator.directive';
import { Component, Input, OnInit, SkipSelf } from '@angular/core';
import { IEnum } from './../../../../shared/types/generalTypes';
import { ErrorMessageType } from './../../../../shared/types/error-message';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.component.scss'],
})
export class UserPersonalInfoComponent implements OnInit {
  @Input() modelGroupName: string;
  form: FormGroup;
  EducationItems: IEnum[] = [
    { text: 'general.defualt-text', value: '' },
    { text: 'user.cycle', value: 'C' },
    { text: 'user.diploma', value: 'D' },
    { text: 'user.associate', value: 'A' },
    { text: 'user.bachelor', value: 'B' },
    { text: 'user.MA', value: 'M' },
    { text: 'user.doctorate', value: 'DO' }
  ];
  genderItems: IEnum[] = [
    { text: 'general.defualt-text', value: '' },
    { text: 'user.male', value: 'Male' },
    { text: 'user.female', value: 'Female' },
    { text: 'user.nothing', value: 'Nothing' },
  ];
  err: ErrorMessageType = new ErrorMessageType();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      gender: [null],
      educationLevel: [null],
      employeeDate: [null, new FormControl('')],
      birthDate: [null, new FormControl('')],
      address: this.fb.group({
        // tel: [null , [RxwebValidators.maxDate]]
        tel: [null , [RxwebValidators.maxDate]],
        mobile: [null]
      })
    });
  }

  // public errorHandling = (control: string, error: string) => {

  //   return this.form.controls[control].hasError(error);
  // }

}
