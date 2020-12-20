import { Component, Input, OnInit } from '@angular/core';
import { IEnum } from './../../../../shared/types/generalTypes';
import { ErrorMessageType } from './../../../../shared/types/error-message';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { UserDto } from 'src/app/shared/types/dataTypes';
@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.component.scss'],
})
export class UserPersonalInfoComponent implements OnInit {
  @Input() regForm: FormGroup;
  userDto: UserDto = new UserDto();
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

  }

  onSubmit() {
    debugger
    // this.userDto.firstName = this.form.value.firstName;
    // this.userDto.lastName = this.form.value.lastName;
    // this.userDto.gender = this.form.value.gender;
    // this.userDto.educationLevel = this.form.value.educationLevel;
    // this.userDto.telNumber = this.form.value.addressInfo.tel;
    // this.userDto.mobileNumber = this.form.value.addressInfo.mobileNumber;
    // this.userDto.email = this.form.value.addressInfo.email;
    // this.userDto.address = this.form.value.addressInfo.address;
  }

}
