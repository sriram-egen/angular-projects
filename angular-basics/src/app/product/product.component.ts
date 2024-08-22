import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private _price: number = 0;
  private _name: string = '';

  @Input() card: boolean = false

  @Input()
  public get price() {
    return this._price
  }

  public set price(value: number) {
    this._price = value
  }

  @Input()
  public get name() {
    return this._name
  }

  public set name(value: string) {
    this._name = value
  }

  @Output()
  productClicked = new EventEmitter<any>()

  onClick(value: string) {
    this.productClicked.emit({ name: value })
  }
}
