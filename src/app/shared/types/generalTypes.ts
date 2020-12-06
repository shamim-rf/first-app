export interface MenuItem {
  id?: string;
  code: number;
  titleKey: string;
  icon?: string;
  path: string;
  active: boolean;
}

export type MenuItems = MenuItem[];

export interface IConfMessage {
  title?: string;
  text: string;
  accept?: () => any;
  reject?: () => any;
}
