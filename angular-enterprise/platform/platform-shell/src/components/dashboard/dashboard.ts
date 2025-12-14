import { Component } from '@angular/core';

@Component({
  selector: 'app-platform-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  // lazyLoadConfig = (): void => {
  //   import('../../configs');
  // };

  constructor() {
    // const config = this.loadConfig();
  }

  async loadConfig() {
    const config = await import('../../config');
    console.log(config);
  }
}
