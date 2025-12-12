import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Chart,
  ChartOptions,
  ChartTypeRegistry,
} from 'chart.js';
import { CHARTS_CONFIGURATION } from '../../../../providers/chart.provider';
import { defaultOptions } from '../config/chart.config';

@Component({
  selector: 'lib-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class ChartComponent implements AfterViewInit {
  @Input() chartType: keyof ChartTypeRegistry = 'bar';
  @Input() chartData: any;
  @Input() chartOptions: ChartOptions = {};

  @Output() chartClick = new EventEmitter();

  @ViewChild('chartCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  chartObj!: Chart;

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
    this.setChartOptions();
    // Chart initialization logic can be added here
    this.initializeChart();
  }

  /**
   * Sets the chart options by merging default options with input options.
   */
  setChartOptions(): void {
    this.chartOptions = {
      ...defaultOptions,
      ...this.chartOptions,
    };
  }

  /**
   * Initializes the chart with default settings.
   */
  initializeChart(): void {
    this.chartObj = new Chart(this.canvas.nativeElement, {
      type: this.chartType,
      data: this.chartData,
      options: { ...this.chartOptions },
    });
  }
}
