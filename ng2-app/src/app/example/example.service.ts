import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { CONFIGURATION } from '../shared/app.constants';

@Injectable()
export class ExampleService {

  private actionUrl: string;
  private headers: Headers;
  products: Array<Example.Models.IProduct>;

  constructor(private http: Http) {
    this.actionUrl = CONFIGURATION.baseUrls.server +
            CONFIGURATION.baseUrls.apiUrl +
            'products/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getListProducts():  Observable<Example.Models.IProduct[]> {
    return this.http.get(this.actionUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getTranslate():Observable<any>{
    return this.http.get('http://localhost:3000/translateData')
            .map((res: Response) => res.json());
  }

  getProduct(id: number): Observable<Example.Models.IProduct> {
    // return this.getListProducts()
    //   .map(products => products.find(product => product.id === id));
    return this.http.get(this.actionUrl + id)
            .map((response: Response) => <Example.Models.IProduct>response.json())
            .catch(this.handleError);
  }

  addProduct(product: Example.Models.IProduct): Observable<Example.Models.IProduct> {
        return this.http.post(this.actionUrl, JSON.stringify(product), { headers: this.headers })
            .map((response: Response) => <Example.Models.IProduct>response.json())
            .catch(this.handleError);
    }

  updateProduct(id: number, productToUpdate: Example.Models.IProduct) {
    return this.http.put(this.actionUrl + id, JSON.stringify(productToUpdate), { headers: this.headers })
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<Response> {
    return this.http.delete(this.actionUrl + id)
        .catch(this.handleError);;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
