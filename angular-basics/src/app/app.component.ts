import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ComponentBasicsComponent } from "./component-basics/component-basics.component"
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from "./products/products.component";
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ComponentBasicsComponent, ProductComponent, ProductsComponent, TemplateSyntaxComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
  message: string = "Hello with required input propery"
  label: string = "    Space on left"
  value: number = 50
}
