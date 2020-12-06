import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MENUITEM, MenuItemService } from '../../mock/menu-items';
import { UserAreaLayoutService } from '../../services/user-area-layout.service';
import { MenuItems } from '../../types/generalTypes';

@Component({
  selector: 'app-user-area-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  MenuItems: MenuItems = [];
  smallIconClass = '';
  showSideBar = true;
  layoutSubscription: Subscription;
  acUrl;

  cl;

  constructor(
    public menuService: MenuItemService,
    private layoutService: UserAreaLayoutService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef) {
      this.MenuItems = MENUITEM;
    }

  ngOnInit(): void {
    this.changeMenu();
    this.layoutSubscription = this.layoutService.sideBarToggle.subscribe(data => {
      this.showSideBar = data;
      !data ? this.smallIconClass = 'small-icon' : this.smallIconClass = '';
    });
  }

  changeMenu() {
    this.acUrl = this.router.url;
    this.MenuItems.forEach(item => {
      item.active = false;
      if (this.acUrl == item.path) {
        item.active = true;
      } else {
        item.active = false
      }
    })
  }


  clickItem(item) {
    this.layoutService.openSidebar();
    this.layoutService.activeMenuItem(item);
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }

}
