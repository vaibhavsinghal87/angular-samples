import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Navbar } from '@core/lib';
import { NavigationComponent } from '../navigation/navigation.component';
import { navbarConfig } from './configs/navbar.config';
import { HamburgerMenu } from '../hamburger-menu/hamburger-menu';
@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatNavList,
    MatSidenav,
    NavigationComponent,
    NgClass,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  navConfig = navbarConfig;

  overlay!: Overlay;
  overlayRef: OverlayRef | null = null;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;

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

  /**
   * Toggles the side navigation menu based on the device type.
   * On mobile devices, it toggles the sidenav and ensures it's not collapsed.
   * On larger screens, it opens the sidenav and toggles the collapsed state.
   */
  toggleMenu(): void {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  ngOnDestroy(): void {
    this.detachOverlay();
  }
}
