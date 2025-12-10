import { A11yModule } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { INavBarConfig, Navbar } from '@core/lib';
@Component({
  selector: 'app-hamburger-menu',
  imports: [A11yModule, MatIcon, MatButtonModule, Navbar],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.scss',
})
export class HamburgerMenu {
  @Input() overlayRef: OverlayRef | null = null;
  navConfig: INavBarConfig = { menu: [] };

  /**
   * Detaches the HamburgerMenu component from the overlay.
   */
  detachOverlay(): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
