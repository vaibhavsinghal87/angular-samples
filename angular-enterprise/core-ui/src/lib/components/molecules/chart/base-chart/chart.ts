import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Chart,
  ChartData,
  ChartOptions,
  ChartTypeRegistry,
  registerables,
} from 'chart.js';
import { CHARTS_CONFIGURATION } from '../../../../providers/chart.provider';
import { defaultOptions } from '../config/chart.config';
import { ChartUtility } from '../utils/chart.util';
@Component({
  selector: 'lib-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class ChartComponent
  implements OnInit, AfterViewInit
{
  @Input() chartType: keyof ChartTypeRegistry = 'bar';
  @Input() chartData: any;
  @Input() chartOptions: ChartOptions = {};
  @Input() xAxisKey = 'name';
  @Input() yAxisKey = 'id';

  @Output() chartClick = new EventEmitter();

  @ViewChild('chartCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  chartObj!: Chart;
  data!: ChartData;

  constructor(
    @Optional()
    @Inject(CHARTS_CONFIGURATION)
    config?: any
  ) {
    if (config?.registerables) {
      // register chart.js components if provided in configuration
      Chart.register(...config.registerables);
    } else {
      // register default registrables from Chartjs
      Chart.register(...registerables);
    }
  }

  ngOnInit(): void {
    this.setChartOptions();
    this.prepareChartData();
  }

  ngAfterViewInit(): void {
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
   * Set chart data
   */
  prepareChartData(): void {
    this.data = {
      ...this.chartData,
      ...ChartUtility.prepareChartData(
        this.chartData,
        this.xAxisKey,
        this.yAxisKey
      ),
    };
  }

  /**
   * Initializes the chart with default settings.
   */
  initializeChart(): void {
    this.chartObj = new Chart(this.canvas.nativeElement, {
      type: this.chartType,
      data: this.data,
      options: { ...this.chartOptions },
    });
  }
}
