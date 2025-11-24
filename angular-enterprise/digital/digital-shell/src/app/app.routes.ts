import { Routes } from '@angular/router';
import { ROUTER_CONSTANTS } from '@core/lib';

export const DIGITAL_ROUTES: Routes = [
  {
    path: `${ROUTER_CONSTANTS.dashboard}`,
    loadComponent: () =>
      import('../components/dashboard/dashboard').then(
        m => m.Dashboard
      ),
  },
  {
    path: '**',
    redirectTo: `${ROUTER_CONSTANTS.dashboard}`,
  },
];
