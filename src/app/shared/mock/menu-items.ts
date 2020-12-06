import { Injectable } from '@angular/core';
import { MenuItems } from '../types/generalTypes';

export const MENUITEM = [
  {
    code: 1,
    titleKey: 'مدیریت داشبورد',
    icon: 'dashboard',
    path: '/dashboard',
    active: false
  },
  {
    code: 2,
    titleKey: 'مدیریت کاربران',
    icon: 'group',
    path: '/users',
    active: false
  },
  {
    code: 3,
    titleKey: 'مدیریت محصولات',
    icon: 'card_giftcard',
    path: '/products',
    active: false
  },
  {
    code: 4,
    titleKey: 'مدیریت گزارشات',
    icon: 'outbond',
    path: '/pages/reposts',
    active: false
  },
  {
    code: 5,
    titleKey: 'آب و هوا',
    icon: 'explore',
    path: '/weather',
    active: false
  },
  {
    code: 6,
    titleKey: 'گالری تصاویر',
    icon: 'photo_size_select_actual',
    path: '/pictures',
    active: false
  },

] as MenuItems;

@Injectable()
export class MenuItemService {
  getMenuitem(): MenuItems {
    return MENUITEM;
  }
}
