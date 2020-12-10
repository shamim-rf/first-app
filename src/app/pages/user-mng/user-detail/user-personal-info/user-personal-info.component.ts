import { ErrorMessageType } from './../../../../shared/types/error-message';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
export interface IForm {
  text:string;
  value:string;
}
@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.component.scss']
})
export class UserPersonalInfoComponent implements OnInit {
  form: FormGroup;
  EducationItems: IForm[] = [
    { text: 'user.cycle', value: 'C' },
    { text: 'user.diploma', value: 'D' },
    { text: 'user.associate', value: 'A' },
    { text: 'user.bachelor', value: 'B' },
    { text: 'user.MA', value: 'M' },
    { text: 'user.doctorate', value: 'DO' }
  ]
  err: ErrorMessageType = new ErrorMessageType();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [null, new FormControl([Validators.required, Validators.maxLength(10)])],
      lastName: [null, new FormControl([Validators.required, Validators.maxLength(10)])],
      gender: [null, new FormControl()],
      employeeDate: [null, new FormControl('')]
    });
  }

  ngOnInit(): void {
    this.err.maxlength = 'hello';
  }

}
