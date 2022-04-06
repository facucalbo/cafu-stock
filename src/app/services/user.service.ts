import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRequest, UserResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  basicUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  addNewUser( userData: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(` ${this.basicUrl}/user`, userData);
  }
}
