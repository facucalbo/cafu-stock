import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ItemRequest, ItemResponse, Body } from '../interfaces/inventory-response';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  // mongodb+srv://facundo:<password>@first-cluster.fhxif.mongodb.net/test

  basicUrl = environment.apiUrl;
  uid = localStorage.getItem(environment.user_id)

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem(environment.access_token)!}`
  })

  constructor( private http: HttpClient ) { }

  addNewProduct( product: ItemRequest): Observable<ItemRequest> {
    return this.http.post<ItemRequest>(` ${this.basicUrl}/product`, { product })
  }

  getProducts(): Observable<Body[]> {
    const response = this.http.get<ItemResponse>(`${this.basicUrl}/product/${this.uid}`, {headers: this.headers});
    console.log(response);
    return this.http.get<ItemResponse>(`${this.basicUrl}/product/${this.uid}`, {headers: this.headers}) 
      .pipe(
        map( (resp) => resp.body)
      );
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
