import { MENUITEM } from './../mock/menu-items';
import { Data, ActivatedRoute, Router } from '@angular/router';
import { FlexSize } from './../mock/flex-size';
import { Component, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserAreaLayoutService } from '../services/user-area-layout.service';

@Component({
  selector: 'app-user-area-layout',
  templateUrl: './user-area-layout.component.html',
  styleUrls: ['./user-area-layout.component.scss']
})
export class UserAreaLayoutComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  path: string;
  pageTitle: string = '';
  showSidebarClass = '';
  configSizeContent = '';
  innerWidth: number;
  flexSizeSide: FlexSize = new FlexSize(20, 20, 0, 0);
  flexSizeContent: FlexSize = new FlexSize(80, 80, 100, 100);

  constructor(private layoutService: UserAreaLayoutService, private actRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.firstLoadedPage();
    this.router.events.subscribe((u) => {
      for (const item of MENUITEM) {
        if (u['url'] === item.path) {
          this.pageTitle = item.titleKey;
        }
      }
    })

    this.layoutService.sideBarToggle.subscribe(showSidebar => {
      if (!showSidebar) {
        //open
        this.showSidebarClass = 'sideBar-hide';
        this.configSizeContent = 'change-size-content';

        this.flexSizeSide.xs = this.flexSizeSide.sm = 6;
        this.flexSizeContent.xs = this.flexSizeContent.sm = 94;

        this.flexSizeSide.lg = this.flexSizeSide.md = 4;
        this.flexSizeContent.lg = this.flexSizeContent.md = 96;
      } else {
        //close
        this.showSidebarClass = this.configSizeContent = '';
        this.flexSizeSide.xs = this.flexSizeSide.sm = 30;
        this.flexSizeContent.xs = this.flexSizeContent.sm = 70;

        this.flexSizeSide.lg = this.flexSizeSide.md = 20;
        this.flexSizeContent.lg = this.flexSizeContent.md = 80;

      }
    });

  }
  firstLoadedPage() {
    const path = MENUITEM.find((ur) => {
      return ur.path === this.router.url;
    });
    if (path) {
      return this.pageTitle = path?.titleKey;
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.innerWidth = window.innerWidth;
  //   if (this.innerWidth >= 600 && this.innerWidth <= 768) {
  //     this.layoutService.sideBarToggle.subscribe(data => {
  //       !data ? this.showSidebarClass = '' : this.showSidebarClass = 'sideBar-hide';
  //     });
  //   }
  //   // this.detectScreenSize();
  // }

  // ngAfterViewInit(): void {
  //   this.onResize();
  // }

  // detectScreenSize() {
  //   if (this.innerWidth < 768) {
  //     this.mdq = 'mdq';
  //   } else {
  //     this.mdq = '';
  //   }

  // }
}
