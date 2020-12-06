import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MENUITEM } from '../mock/menu-items';
const BASE_URL = 'https://reqres.in/api/';
@Injectable({
  providedIn: 'root'
})
export class UserAreaLayoutService {
  show = true;
  open = false;
  changeStatus = false;
  @Output() sideBarToggle = new EventEmitter<boolean>();
  @Output() changeS = new EventEmitter<any>();
  constructor(private httpModule: HttpClient) { }

  toggleSideBar() {
    this.show = !this.show;
    this.sideBarToggle.emit(this.show);
  }

  openSidebar() {
    this.show = true;
    this.sideBarToggle.emit(this.show);
  }

  closeSideBar() {
    this.show = false;
    this.sideBarToggle.emit(this.show);
  }

  activeMenuItem(menuItem) {
    for (const item of MENUITEM) {
      item.active = false;
    }
    let findItem = MENUITEM.find(item => {
      return item.code === menuItem.code;
    });
    findItem.active = !findItem.active;
  }

  getUser(pageIndex: number): Observable<{}> {
    return this.httpModule.get(BASE_URL + `users?page=${pageIndex}`);
  }
}
