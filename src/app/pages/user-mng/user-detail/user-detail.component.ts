import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserDto } from '../../../shared/types/dataTypes';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userDto: UserDto = new UserDto();
  openDialog = false;
  id: number;
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute) {
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

    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      this.id = +params.get('id');
      return this.userService.getUser(this.id);
    })).subscribe(data => {
      this.userDto = data[0];
    });
  }

  onSubmit(f) {

  }

  test(element) {
    element
  }

  ngOnDestroy(): void {
  }
}
