import { ISubMenu } from '@interfaces/routes';
export const pageName = {
  ROOT: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
  USER1: 'user1',
  NOTFOUND: '*',
};
export const subMenu: ISubMenu[] = [
  {
    parent: pageName.ADMIN,
    children: [pageName.USER1],
  },
];
export const routesInfo = [
  {
    pathName: pageName.DASHBOARD,
    title: 'page.dashboard',
  },
  {
    pathName: pageName.USER1,
    title: 'page.userManagement',
  },
];
