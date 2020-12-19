import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersianDatePickerComponent } from '../persian-date-picker/persian-date-picker.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() disabled = false;
  openCal = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  _onToggleBtnClick(e){
    this.openCal = !this.openCal;
    const dialogRef = this.dialog.open(PersianDatePickerComponent)
  }

}
