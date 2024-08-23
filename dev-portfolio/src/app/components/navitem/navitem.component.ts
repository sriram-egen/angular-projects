import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navitem',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navitem.component.html',
  styleUrl: './navitem.component.css'
})
export class NavitemComponent {
  @Input({required: true})
  item: NavItem = {
    path:'',
    label: ''
  }
}
