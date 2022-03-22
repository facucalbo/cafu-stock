import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemRequest, ItemResponse } from '../interfaces/product-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  basicUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  addNewProduct( product: ItemRequest): Observable<ItemRequest> {
    return this.http.post<ItemRequest>(` ${this.basicUrl}/product`, product)
  }

}
