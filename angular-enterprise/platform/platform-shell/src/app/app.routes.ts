import { Routes } from '@angular/router';
import { ROUTER_CONSTANTS } from '@core-ui';

export const routes: Routes = [
  {
    path: `/${ROUTER_CONSTANTS.platform}/${ROUTER_CONSTANTS.dashboard}`,
    loadComponent: () => import('../components/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: '**',
    redirectTo: `/${ROUTER_CONSTANTS.platform}/${ROUTER_CONSTANTS.dashboard}`,
  },
];
