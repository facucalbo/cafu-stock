import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRequest, UserResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basicUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  addNewUser( userData: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(` ${this.basicUrl}/user`, userData);
  }


}
