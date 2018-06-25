import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductServiceProvider } from '../../providers/product-service/product-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productList: any[]

  constructor(public navCtrl: NavController, public productService: ProductServiceProvider) {
    this.getProducts()
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(response => this.productList = response.products)
  }

}
