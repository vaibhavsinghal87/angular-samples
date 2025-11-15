import { Component } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { navbarConfig } from './configs/navbar.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatListItem, MatNavList],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navConfig = navbarConfig.links;

}
