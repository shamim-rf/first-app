import { Injectable } from '@angular/core';
import { MenuItems } from '../types/generalTypes';

export const MENUITEM = [
  {
    code: 1,
    titleKey: 'مدیریت داشبورد',
    icon: 'dashboard',
    path: '/dashboard',
    active: false,
  },
  {
    code: 2,
    titleKey: 'مدیریت کاربران',
    icon: 'group',
    path: '/users',
    active: false,
    formSubActionsUrls: ['/users/add']
  },
  {
    code: 3,
    titleKey: 'مدیریت محصولات',
    icon: 'card_giftcard',
    path: '/products',
    active: false,
    formSubActionsUrls: ['products/add']
  },
  {
    code: 4,
    titleKey: 'مدیریت نقش ها',
    icon: 'contact_page',
    path: '/role',
    active: false
  },
  {
    code: 5,
    titleKey: 'مدیریت فعالیت ها',
    icon: 'local_activity',
    path: '/activity',
    active: false
  },
  {
    code: 6,
    titleKey: 'مدیریت گزارشات',
    icon: 'sticky_note_2',
    path: '/pages/reposts',
    active: false
  },

] as MenuItems;

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  getMenuitem(): MenuItems {
    return MENUITEM;
  }
}
