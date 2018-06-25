import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ENV } from '../../environments/environment'
import { ProductServiceProvider } from '../../providers/product-service/product-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private productList: any[];
  private url: String = ENV.API_URL;

  constructor(public navCtrl: NavController, public productService: ProductServiceProvider, public alertCtrl: AlertController) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(response => this.productList = response.products.map((item) => {
      return item.pro_image
        ? { ...item, pro_image: `${this.url}/${item.pro_image}` }
        : { ...item }
    }));
  }

  buyProduct(product) : void {
    const payload : Object = {
      pro_quantity: (product.pro_quantity - 1)
    }

    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: `Produto comprado com sucesso, nova quantidade ${(product.pro_quantity - 1) } de ${product.pro_quantity}`,
      buttons: ['OK']
    });

    this.productService.buyProduct(product.pro_id, payload).subscribe(response => {
      alert.present();
      this.getProducts();
    })
  }

}
