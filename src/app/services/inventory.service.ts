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
  uid = localStorage.getItem(environment.user_id)

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem(environment.access_token)!}`
  })

  constructor( private http: HttpClient ) { }

  addNewProduct( product: ItemRequest): Observable<ItemRequest> {
    return this.http.post<ItemRequest>(` ${environment.apiUrl}/product`, { product })
  }

  getProducts(): Observable<Body[]> {
    const response = this.http.get<ItemResponse>(`${environment.apiUrl}/product/${this.uid}`);
    return this.http.get<ItemResponse>(`${environment.apiUrl}/product/${this.uid}`)
      .pipe(
        map( (resp) => resp.body)
      );
  }

  searchProduct( text: String ): Observable<Body[]> {
    return this.http.get<ItemResponse>(`${environment.apiUrl}/product/search/${ text }`)
      .pipe(
        map( resp => resp.body)
      );
  }

  deleteProduct( id: String ) {
    return this.http.delete(`${environment.apiUrl}/product/${ id }`);
  }

}
