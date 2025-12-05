import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-hamburger-menu',
  imports: [MatIcon, MatButtonModule],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.scss',
})
export class HamburgerMenu {
  @Input() overlayRef: OverlayRef | null = null;

  /**
   * Detaches the HamburgerMenu component from the overlay.
   */
  detachOverlay(): void {
    console.log(this.overlayRef);
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
