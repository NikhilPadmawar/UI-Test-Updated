import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: Http) { }

  public getCustomerDetails() {
    let _url: string = 'http://northwind.servicestack.net/orders?format=json';
    return this._http.get(_url)
      .toPromise()
      .then(res => <any>res.json());

  }
}
