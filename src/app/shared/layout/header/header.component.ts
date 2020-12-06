import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserAreaLayoutService } from '../../services/user-area-layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarEmitter = new EventEmitter<boolean>();
  showSideBar = true;
  letterNum = 15;
  alertNum = 10;
  userItems = [
    { data: { id: 'profile' }, icon: 'person', title: 'پروفایل' },
    { data: { id: 'change-password' }, icon: 'lock', title: 'تغییرکلمه عبور' },
    { data: { id: 'log-out' }, icon: 'arrow_right_alt', title: 'خروج' }];
  constructor(private layoutService: UserAreaLayoutService) { }

  ngOnInit(): void {
  }


  toggleBadgeVisibility(e: string) {
    if (e === 'letter') {
      this.letterNum > 0 ? this.letterNum -= 1 : this.letterNum = 0;
    } else {
      this.alertNum > 0 && e === 'alert' ? this.alertNum -= 1 : this.alertNum = 0;
    }
  }

  toggleSideBar(){
    this.layoutService.toggleSideBar();
  }

}
