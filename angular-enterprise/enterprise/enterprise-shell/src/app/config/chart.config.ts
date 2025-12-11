import {
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

export const chartConfig = {
  registerables: [
    // Controllers
    BarController,
    // Elements
    BarElement,
    // Scales
    CategoryScale,
    LinearScale,
  ],
};
