import { UserDto } from '../../../shared/types/dataTypes';
import { DatePickerComponent } from 'ng2-jalali-date-picker';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  @ViewChild('datePicker') datePicker: DatePickerComponent;
  userDto: UserDto = new UserDto();
  openDialog = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService) {
    // this.form = this.fb.group({
    //   id: new FormControl(''),
    //   firstName: new FormControl(''),
    //   lastName: [null, new FormControl(Validators.maxLength(3))],
    //   gender: [null, new FormControl()],
    //   employeeDate: [null, new FormControl('')]
    // });
  }

  ngOnInit(): void {
    // this.user.id = this.activeRoute.snapshot.params['id'];
    // this.user.name = this.activeRoute.snapshot.params['name']
    // this.userSubscription = this.activeRoute.params.subscribe((params: Params) => {

    //   this.user.id = params['id'];
    //   this.user.name = params['name'];
    // });
    // this.querySubscription = this.activeRoute.queryParams.subscribe(data => {
    //   this.user.query = JSON.stringify(data['key']);
    // });
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }


  // openDatePicker() {
  //   this.datePicker.api.open();
  // }

  // closeDialog() {
  //   this.dialogRef.close();
  // }

  // save() {
  //   debugger
  //   this.form.setValue({
  //     employeeDate: this.userDto.employeeDate
  //   });
  //   this.userService.add(this.form.value);
  // }

  onSubmit(f){

  }

  ngOnDestroy(): void {
  }
}
