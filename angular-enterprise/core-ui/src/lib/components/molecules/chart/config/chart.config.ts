import { ChartOptions } from 'chart.js';

export const defaultOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: '#ff0000',
  borderColor: '#00ff00',
  color: '#0000ff',
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
      display: true,
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
        text: 'X Axis Title',
      },
      grid: {
        display: false,
        drawOnChartArea: true,
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Y Axis Title',
      },
      grid: {
        display: true,
        drawOnChartArea: true,
      },
    },
  },
};
