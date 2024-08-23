import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'layout-default',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultLayout {

}
