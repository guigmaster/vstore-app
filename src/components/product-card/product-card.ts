import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})
export class ProductCardComponent {

  @Input() id: number;
  @Input() title: string;
  @Input() description: string;
  @Input() quatity: number;
  @Input() price: number;
  @Input() image: string;

  constructor() {

  }

}
