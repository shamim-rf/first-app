import { IConfMessage } from './../../../shared/types/generalTypes';
import { UiMessageService } from './../../../shared/services/ui-message.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  confDto = {} as IConfMessage;
  showDialog = false;
  constructor(private uiMsg: UiMessageService,
              public dialogRef: MatDialogRef<ConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IConfMessage,public dialog: MatDialog) {

  }

  ngOnInit() {
    // this.uiMsg.confirm.subscribe((res: IConfMessage) => {
    //   debugger
    //   this.data = res;
    //   this.data.title = res.title;
    //   this.data.text = res.text;
    //   // this.showDialog = true;
    // });
  }
closeDialog(){
  this.data.reject();
  this.dialogRef.close();
}

acceptDialog(){
  debugger
  this.data.accept();
  this.dialogRef.close();
}

}
