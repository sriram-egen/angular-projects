import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() card: boolean = false
  products = [
    {
      name: "phone",
      "price": 100,
    }, {
      name: "laptop",
      price: 999
    }, {
      name: 'kitchen',
      price: 9999
    }
  ]

  currentProduct: string = ""

  onProductClicked(value: any){
    this.currentProduct = value.name
  }
}
