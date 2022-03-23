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
    return this.http.get<ItemResponse>(`${this.basicUrl}/product`)
      .pipe(
        map( (resp) => resp.body)
      );
  } 

}
