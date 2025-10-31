import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'digital',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '/digital/remoteEntry.js',
        exposedModule: './DigitalApp',
      }).then((m) => m.App),
  },
  {
    path: 'platform',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '/platform/remoteEntry.js',
        exposedModule: './PlatformApp',
      }).then((m) => m.App),
  },
];
