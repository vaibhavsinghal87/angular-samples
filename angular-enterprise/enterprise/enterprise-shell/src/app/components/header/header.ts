import { Component } from '@angular/core';
import { Navbar } from '@core-ui';
import { navbarConfig } from './configs/navbar.config';

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navConfig = navbarConfig;
}
