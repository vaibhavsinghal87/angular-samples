import { InjectionToken } from '@angular/core';
import { ChartComponentLike } from 'chart.js';

export const CHARTS_CONFIGURATION = new InjectionToken<
  ChartsConfiguration
>('CHARTS_CONFIGURATION');

export interface ChartsConfiguration {
  registrables?: ChartComponentLike[];
}

export function provideCharts(config: ChartsConfiguration) {
  return {
    provide: CHARTS_CONFIGURATION,
    useValue: { ...config },
  };
}
