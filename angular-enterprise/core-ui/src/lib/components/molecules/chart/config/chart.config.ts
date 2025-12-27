import { ChartOptions } from 'chart.js';
import { DATALABELS_PLUGIN_CONFIG } from '../plugins/datalabels/config';

export const defaultOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: '#ff0000',
  borderColor: '#000000',
  plugins: {
    legend: {
      title: {
        display: false,
        text: '',
      },
      display: false,
      position: 'top' as const,
      align: 'end' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
    tooltip: {
      enabled: true,
    },
    datalabels: { ...DATALABELS_PLUGIN_CONFIG },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
      grid: {
        display: true,
        drawOnChartArea: false,
        drawTicks: false,
      },
      border: { display: true },
      ticks: {
        padding: 10,
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      },
    },
    y: {
      display: true,
      title: {
        display: true,
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
      },
      border: { display: true },
      ticks: { padding: 10, mirror: false },
    },
  },
  elements: {
    bar: {},
  },
};
