import { Component } from '@angular/core';
import { ChartComponent } from '@core/lib';

@Component({
  selector: 'app-digital-dashboard',
  imports: [ChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
