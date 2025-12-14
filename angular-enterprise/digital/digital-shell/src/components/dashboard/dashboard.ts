import { Component, inject, OnInit } from '@angular/core';
import { ChartComponent } from '@core/lib';
import { IResponse } from '../../interfaces/IResponse';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-digital-dashboard',
  imports: [ChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  dataService = inject(DataService);
  chartData: any;

  constructor() {}

  ngOnInit(): void {
    this.getSummary();
  }

  /**
   *
   */
  getSummary() {
    this.dataService
      .getData({ id: 'items' })
      .pipe()
      .subscribe({
        next: (res: IResponse) => {
          console.log(res.details.items);
          this.chartData = res.details.items;
          console.log(this.chartData);
        },
        error: e => {},
      });
  }
}
