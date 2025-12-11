import { APP_BASE_HREF } from '@angular/common';
import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  CHARTS_CONFIGURATION,
  ROUTER_CONSTANTS,
} from '@core/lib';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { chartConfig } from './config/chart.config';
import { initApp } from './startup/config.initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: `/${ROUTER_CONSTANTS.basePath}`,
    },
    {
      provide: CHARTS_CONFIGURATION,
      useValue: { ...chartConfig },
    },
    provideHttpClient(),
    provideAppInitializer(initApp),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
