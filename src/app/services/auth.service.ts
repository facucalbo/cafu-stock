import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, AuthBody } from '../interfaces/api-response';

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
  authenticate(): Observable<AuthBody> {
    console.log('authenticate');
    return this.http.get<AuthResponse>(`${this.basicUrl}/auth/refresh-token`).pipe(
      map( r => r.body)
    );
  }

  setRefreshToken(token: string) {
    localStorage.setItem(environment.refresh_token, token);
  }

  setAccessToken(token: string) {
    localStorage.setItem(environment.access_token, token);
  }

  setUID(uid: string) {
    localStorage.setItem(environment.user_id, uid);
  }

  get refreshToken(){
    return localStorage.getItem(environment.refresh_token) || '';
  }
  get accessToken(){
    return localStorage.getItem(environment.access_token) || '';
  }
  get uid(){
    return localStorage.getItem(environment.user_id);
  }
}
