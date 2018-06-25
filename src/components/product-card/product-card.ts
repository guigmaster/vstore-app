import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})
export class ProductCardComponent {

  @Input() id: number;
  @Input() title: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() price: number;
  @Input() image: string;

  @Output() onProductBuy: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  buyProduct(): void {
    this.onProductBuy.emit();
  }

}
