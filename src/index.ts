/* eslint-disable no-new */
import { Add } from './components/add/add';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Item } from './components/item/item';
import { List } from './components/list/list';
import { Menu } from './components/menu/menu';
import './index.scss';
import { PET } from './mocks/tasks';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Tares', path: '/tasks' },
  { label: 'Acerca de', path: '/about' },
];

console.log('Load sample');
new Header('#root');
new Menu('.header', menuOptions);
new List('.main');
new Item('.list', PET);
new Add('.main');
new Footer('#root');
