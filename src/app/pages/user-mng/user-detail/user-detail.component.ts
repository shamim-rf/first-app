import { UserService } from './../../../shared/services/user.service';
import * as moment from 'jalali-moment';
import { ActivatedRoute } from '@angular/router';
import { DatePickerComponent } from 'ng2-jalali-date-picker';
import { GenderType, UserDto } from '../../../shared/types/dataTypes';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  @ViewChild('datePicker') datePicker: DatePickerComponent;
  userDto: UserDto = new UserDto();
  config: any;
  openDialog = false;
  dateObj = moment('1395-11-22', 'jYYYY,jMM,jDD');
  constructor(
    private activeRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<UserDetailComponent>,
    private userService: UserService) {
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
    // })

    // debugger
    // this.userService.openSubject.subscribe((data: boolean) => {
    //   this.openDialog = data;
    // });
    this.config = {
      ...this.config,
      maxDate: moment.from(moment(undefined).locale('fa').format('yyyy/mm/dd'), 'fa', 'yyyy/mm/dd'),
      minDate: moment.from(moment(undefined).locale('fa').format('yyyy/mm/dd'), 'fa', 'yyyy/mm/dd')
    };
  }

  openDatePicker() {
    debugger
    this.datePicker.api.open();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    debugger

    this.userService.add(this.userDto);
    this.closeDialog();
  }

  ngOnDestroy(): void {
  }
}
