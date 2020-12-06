import { DialogData } from './../../pages/dialog/dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IConfMessage } from '../types/generalTypes';

@Injectable({
  providedIn: 'root'
})
export class UiMessageService {
  @Output() confirm = new EventEmitter<IConfMessage>();
  constructor(private tr: TranslateService
  ) { }

  showConfirm(titleKey?: string, textKey?: string, accept?: () => any, reject?: () => any) {
    debugger
    this.confirm.emit({
      title: this.tr.instant(titleKey),
      text: this.tr.instant(textKey),
      accept,
      reject
    });
  }
}
