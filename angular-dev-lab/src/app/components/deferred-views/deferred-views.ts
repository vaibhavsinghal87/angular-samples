import { Component } from '@angular/core';
import { Card } from './components/card/card';

@Component({
  selector: 'app-deferred-views',
  imports: [Card],
  templateUrl: './deferred-views.html',
  styleUrl: './deferred-views.scss',
})
export class DeferredViews {
  showContent = false;

  onLoadComponent() {
    this.showContent = true;
  }
}
