import { ChartConfiguration } from '@core/lib';
import {
  BarController,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

export const chartConfig: ChartConfiguration = {
  registerables: [
    // Controllers
    BarController,
    // Elements
    BarElement,
    // Scales
    CategoryScale,
    LinearScale,
    // Plugins
    Legend,
    Title,
    Tooltip,
  ],
};
