import { UserDto } from 'src/app/shared/types/dataTypes';
import { ConfirmationComponent } from './../../core/custom-feature/confirmation/confirmation.component';
import { UiMessageService } from './../../shared/services/ui-message.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

import { ColumnMode } from '@swimlane/ngx-datatable';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  param = { key: '2' };
  editMode = 0;
  gridData: UserDto[] = [];
  editing = {};
  ColumnMode = ColumnMode;
  showDialog = false;
  columnName = ['ردیف', 'شناسه کاربری', 'نام', 'نام خانوداگی', 'تاریخ استخدام', 'وضعیت کارمندان', 'عملیات'];

  constructor(
    private userService: UserService,
    private tr: TranslateService,
    private uiMsg: UiMessageService,
    public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.gridData = data;
    });
    this.tr.instant('general.test')
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.editMode = Object.keys(this.editing).length;
    this.gridData[rowIndex][cell] = event.target.value;
    this.gridData = [...this.gridData];
  }

  deleteUser(id) {
        const dialogRef = this.dialog.open(ConfirmationComponent, {
          data: {
            title: 'general.operation',
            text: 'general.conf-message',
            accept: () => this.gridData = this.gridData.filter(item => item.id !== id),
            // reject: () =>{}
      }
    });

    // this.userService.delete(id,this.gridData).subscribe(data => {
    //   this.gridData = [];
    //   this.gridData.push(data);
    // })
  }

  openDialog() {
    this.dialog.open(UserDetailComponent);
   }

}




