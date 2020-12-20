import { TranslateService } from '@ngx-translate/core';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() disabled = false;
  @Input() placeholder: string;
  openCal = false;
  constructor(
    public dialog: MatDialog,
    private ts: TranslateService,
    private el: ElementRef) { }

  ngOnInit(): void {
    this.placeholder ? this.placeholder = this.ts.instant(this.placeholder)
      : this.placeholder = this.ts.instant('general.date');
  }
  _onToggleBtnClick(e) {
    this.openCal = !this.openCal;
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: MouseEvent): void {
    if (this.openCal) {
      let element;
      element = event.target;
      while (element) {
        if (element === this.el.nativeElement) {
          debugger
          return;
        }
        element = element.parentNode;
      }
      this.openCal = false;
    }
  }

}
