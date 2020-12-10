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
  acUrl:string;
  constructor(
    public menuService: MenuItemService,
    private layoutService: UserAreaLayoutService,
    private router: Router) {
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
      if (item.formSubActionsUrls) {
        const hasEqualPath = item.formSubActionsUrls.some(el => this.acUrl === el);
        hasEqualPath ? item.active = true : item.active = false;
      } else {
        this.acUrl === item.path ? item.active = true : item.active = false;
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
