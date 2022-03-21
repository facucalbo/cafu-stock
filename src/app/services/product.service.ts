import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/product-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  basicUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  addNewProduct( product: Item): Observable<Item> {
    return this.http.post<Item>(` ${this.basicUrl}/product`, product)
  }

}
