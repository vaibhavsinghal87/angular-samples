import { Component, Input } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { INavBarConfig } from '../../../interfaces/INavBar';

@Component({
  selector: 'lib-navbar',
  imports: [MatListItem, MatNavList, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @Input() config: INavBarConfig = { menu: [] };

}
