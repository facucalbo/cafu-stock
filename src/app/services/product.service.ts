import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemRequest, ItemResponse, Body } from '../interfaces/product-response';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // mongodb+srv://facundo:<password>@first-cluster.fhxif.mongodb.net/test

  basicUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  addNewProduct( product: ItemRequest): Observable<ItemRequest> {
    return this.http.post<ItemRequest>(` ${this.basicUrl}/product`, product)
  }

  getProducts(): Observable<Body[]> {
    return this.http.get<ItemResponse>(`${this.basicUrl}/product/owner/624c9112c77c569f0a789476`, {withCredentials: true, observe: 'body'})
      .pipe(
        map( (resp) => resp.body)
      );
  }

  getYOU() {
    return this.http.get(`${this.basicUrl}/product/owner/624c9112c77c569f0a789476`, {withCredentials: true, observe: 'response'})
  }

  searchProduct( text: String ): Observable<Body[]> {
    return this.http.get<ItemResponse>(`${this.basicUrl}/product/search/${ text }`)
      .pipe(
        map( resp => resp.body)
      );
  }

  deleteProduct( id: String ) {
    return this.http.delete(`${this.basicUrl}/product/${ id }`);
  }

}
