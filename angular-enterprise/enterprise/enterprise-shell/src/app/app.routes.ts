import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ROUTER_CONSTANTS } from '@core/lib';

export const routes: Routes = [
  {
    path: ROUTER_CONSTANTS.digital,
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '/digital/remoteEntry.js',
        exposedModule: './DigitalApp',
      }).then(m => m.App),
  },
  {
    path: ROUTER_CONSTANTS.platform,
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '/platform/remoteEntry.js',
        exposedModule: './PlatformApp',
      }).then(m => m.App),
  },
  {
    path: ROUTER_CONSTANTS.admin,
    loadComponent: () => import('./modules/admin/admin').then(m => m.Admin),
  },
  { path: '**', redirectTo: ROUTER_CONSTANTS.digital },
];
