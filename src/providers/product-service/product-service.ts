import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ENV } from '../../environments/environment'
@Injectable()
export class ProductServiceProvider {

  private url: String = ENV.API_URL;

  constructor(public http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.url +'/products');
  }

  buyProduct(id: number, payload: Object): Observable<any> {
    return this.http.put(this.url +'/products/' + id, payload);
  }

};
