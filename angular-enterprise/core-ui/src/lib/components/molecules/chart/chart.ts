import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';

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

  constructor() {}

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
      data: { labels: [], datasets: [] },
      options: {},
    });
  }
}
