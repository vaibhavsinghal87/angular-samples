import { ChartOptions } from 'chart.js';

export const defaultOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: '#ff0000',
  borderColor: '#000000',
  plugins: {
    legend: {
      title: {
        display: true,
        text: 'Legend Title',
      },
      display: true,
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
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '',
      },
      grid: {
        display: true,
        drawOnChartArea: false,
        drawTicks: false,
      },
      border: { display: true },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: '',
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
      },
      border: { display: true },
    },
  },
};
