export interface MenuItem {
  id?: string;
  code: number;
  titleKey: string;
  icon?: string;
  path: string;
  active: boolean;
  formSubActionsUrls?: Array<string>;
}

export type MenuItems = MenuItem[];

export interface IConfMessage {
  title?: string;
  text: string;
  accept?: () => any;
  reject?: () => any;
}

export interface IEnum {
  text: string;
  value: string;
}
