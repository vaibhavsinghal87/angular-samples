import { APP_BASE_HREF } from '@angular/common';
import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROUTER_CONSTANTS } from '@core/lib';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { initApp } from './startup/config.initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: `/${ROUTER_CONSTANTS.basePath}`,
    },
    provideHttpClient(),
    provideAppInitializer(initApp),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
