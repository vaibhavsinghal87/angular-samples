import { Component } from '@angular/core';
import { ChartComponent } from '@core/lib';

@Component({
  selector: 'app-digital-dashboard',
  imports: [ChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
}
