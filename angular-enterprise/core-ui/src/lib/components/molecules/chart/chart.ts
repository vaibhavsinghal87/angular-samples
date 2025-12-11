import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Optional,
  ViewChild,
} from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';
import { CHARTS_CONFIGURATION } from '../../../providers/chart.provider';

@Component({
  selector: 'lib-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  chartObj!: Chart;
  chartType: keyof ChartTypeRegistry = 'bar';

  constructor(
    @Optional()
    @Inject(CHARTS_CONFIGURATION)
    config?: any
  ) {
    // register chart.js components if provided in configuration
    if (config?.registerables) {
      Chart.register(...config.registerables);
    }
  }

  ngAfterViewInit(): void {
    // Chart initialization logic can be added here
    this.initializeChart();
  }

  /**
   * Initializes the chart with default settings.
   */
  initializeChart(): void {
    this.chartObj = new Chart(this.canvas.nativeElement, {
      type: this.chartType,
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'Green',
          'Purple',
          'Orange',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
}
