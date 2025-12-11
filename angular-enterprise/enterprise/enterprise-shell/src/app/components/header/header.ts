import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  ComponentRef,
  DestroyRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HamburgerMenu } from '../hamburger-menu/hamburger-menu';
import { navbarConfig } from './configs/navbar.config';
@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private destroyRef = inject(DestroyRef);

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
    this.overlayRef
      .backdropClick()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.detachOverlay();
      });
    this.overlayRef
      .keydownEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
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
      const componentPortal =
        new ComponentPortal<HamburgerMenu>(HamburgerMenu);
      const componentRef: ComponentRef<HamburgerMenu> =
        this.overlayRef.attach(componentPortal);
      // Pass the overlayRef to the HamburgerMenu component
      componentRef.instance.overlayRef = this.overlayRef;
      componentRef.instance.navConfig = this.navConfig;
      // componentRef.setInput('overlayRef', this.overlayRef);
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
