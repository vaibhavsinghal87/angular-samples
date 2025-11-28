import { INavBarConfig, ROUTER_CONSTANTS } from '@core/lib';

export const navbarConfig: INavBarConfig = {
  menu: [
    {
      id: '1',
      label: 'Digital App',
      url: ROUTER_CONSTANTS.digital,
    },
    {
      id: '2',
      label: 'Platform App',
      url: ROUTER_CONSTANTS.platform,
    },
  ],
};