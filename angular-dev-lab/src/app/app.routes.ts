import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'deferred-views',
    loadComponent: () =>
      import('./components/deferred-views/deferred-views').then((m) => m.DeferredViews),
  },
  {
    path: 'dynamic-import',
    loadComponent: () =>
      import('./components/dynamic-import/dynamic-import').then((m) => m.DynamicImport),
  },
];
