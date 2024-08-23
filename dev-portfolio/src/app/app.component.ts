import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLayout } from "./layouts/default/default.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev-portfolio';
 
}
