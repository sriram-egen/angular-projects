import { Component } from '@angular/core';
import { NavitemComponent } from '../navitem/navitem.component';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavitemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: NavItem[]  = [
    {
      label: "Dogs",
      path: "dogs",
    },
    {
      label: "Cats",
      path: "/cats",
    },
    {
      label: "Foxes",
      path: "/foxes",
    }
  ]
}
