import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { range } from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productList: any[]

  constructor(public navCtrl: NavController) {
    this.productList = range(0, 10).map(i => {
      return {
        id: i,
        title: `Produto ${i}`,
        description: `Produto ${i} descrição`,
        quantity: (i * 10),
        price: i+ 1 * 10
      }
    })
  }

}
