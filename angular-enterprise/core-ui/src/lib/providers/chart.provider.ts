import { InjectionToken } from '@angular/core';
import { ChartComponentLike } from 'chart.js';

export const CHARTS_CONFIGURATION =
  new InjectionToken<ChartConfiguration>(
    'CHARTS_CONFIGURATION'
  );

export interface ChartConfiguration {
  registerables?: ChartComponentLike[];
}

export function provideCharts(config: ChartConfiguration) {
  return {
    provide: CHARTS_CONFIGURATION,
    useValue: { ...config },
  };
}
