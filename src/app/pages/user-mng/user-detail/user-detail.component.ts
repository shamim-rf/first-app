import { UserDto } from '../../../shared/types/dataTypes';
import { DatePickerComponent } from 'ng2-jalali-date-picker';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  @ViewChild('datePicker') datePicker: DatePickerComponent;
  userDto: UserDto = new UserDto();
  openDialog = false;
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userPersonal: this.fb.group({
        firstName: ['', Validators.required],
        lastName: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        gender: [null],
        educationLevel: [null],
        employeeDate: [null],
        birthDate: [null],
        // tel: [null , [RxwebValidators.maxDate]]
        telNumber: [null],
        mobileNumber: [null],
        email: [null, Validators.email],
        address: [null],
      }),
      userPic: this.fb.group({
        picture: [null]
      })
    });
  }

  onSubmit(f) {

  }

  ngOnDestroy(): void {
  }
}
