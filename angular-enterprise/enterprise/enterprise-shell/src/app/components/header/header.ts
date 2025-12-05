import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Navbar } from '@core/lib';
import { HamburgerMenu } from '../hamburger-menu/hamburger-menu';
import { navbarConfig } from './configs/navbar.config';
@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  navConfig = navbarConfig;

  overlay!: Overlay;
  overlayRef: OverlayRef | null = null;

  constructor() {
    this.initOverlay();
  }

  initOverlay(): void {
    this.overlay = inject(Overlay);
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
    });
    this.overlayRef.backdropClick().subscribe(() => {
      this.detachOverlay();
    });
    this.overlayRef
      .keydownEvents()
      .subscribe((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          this.detachOverlay();
        }
      });
  }

  /**
   * Attaches the Hamburger component to the overlay if it's not already attached.
   */
  attachOverlay(): void {
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      const componentPortal: ComponentPortal<HamburgerMenu> =
        new ComponentPortal(HamburgerMenu);
      this.overlayRef.attach(componentPortal);
    }
  }

  /**
   * Detaches the overlay if it is currently attached.
   */
  detachOverlay(): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  ngOnDestroy(): void {
    this.detachOverlay();
  }
}
