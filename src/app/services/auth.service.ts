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

  login( username: string, password: string ): Observable<AuthResponse> {
    const params = {
      username,
      password,
      withCredentials: true
    };

    return this.http.post<AuthResponse>(`${this.basicUrl}/auth/login`, params);
  }

  // refresh the access token
  authenticate(): Observable<AuthResponse> {
    console.log('authenticate');
    return this.http.get<AuthResponse>(`${this.basicUrl}/auth/refresh-token`);
  }
}
