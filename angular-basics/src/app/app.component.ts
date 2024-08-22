import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentBasicsComponent} from "./component-basics/component-basics.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentBasicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
  message: string = "Hello with required input propery" 
  label: string = "    Space on left"
  value: number = 50
}
