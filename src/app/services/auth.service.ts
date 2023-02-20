import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  authenticate( username: string, password: string ): Observable<AuthResponse> {
    const params = { 
      username,
      password,
      withCredentials: true
    };

    return this.http.post<AuthResponse>(`${this.basicUrl}/auth/login`, params);
  }

  authorizate(): Observable<AuthResponse> {

    return this.http.get<AuthResponse>(`${this.basicUrl}/auth/refresh-token`);
  }

  get accessToken() {
    return localStorage.getItem(environment.access_token);
  }

  get refreshToken() {
    return localStorage.getItem(environment.refresh_token);
  }
}
