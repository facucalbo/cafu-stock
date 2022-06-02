import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRequest, UserResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  basicUrl = environment.apiUrl;
  sessionId = localStorage.getItem('sid');

  constructor( private http: HttpClient ) { }

  addNewUser( userData: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(` ${this.basicUrl}/user`, userData);
  }

  login( username: string, password: string ): Observable<UserResponse> {
    const params = { 
      username,
      password,
      withCredentials: true
    };

    return this.http.post<UserResponse>(`${this.basicUrl}/auth/login`, params);
  }
}
