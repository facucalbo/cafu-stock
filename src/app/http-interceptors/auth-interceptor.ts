import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, retry, Subject, switchMap, tap } from "rxjs";
import { AuthResponse } from "../interfaces/api-response";
import { AuthService } from "../services/auth.service";
import { InventoryService } from '../services/inventory.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService, private inventory: InventoryService) {}

    private tokenSubject = new BehaviorSubject<string>('');
    private isRefreshing = false;
    // asignar en cada req el access-token en el header
    // en caso de error 401 (Unauthorized) asignar el refresh token en el header
    // habria que ver como hacer para volver a mandar la request que lanzo el error
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AuthResponse>> {
      console.log('authRed: ',req.url);
      let token;
      this.tokenSubject.subscribe( t => token = t)
      // nos fijamos si la url contiene refresh-token
      const isRefresh = req.url.includes('refresh-token');

      isRefresh ? this.tokenSubject.next(this.auth.refreshToken) :
        this.tokenSubject.next(this.auth.accessToken);

      console.log(token);
      let authReq = this.addTokenHeader(req, token || '')

      console.log('authReq: ', authReq);
      return next.handle(authReq)
        .pipe(
          tap({
            next: event => {
              if(event instanceof HttpResponse && event.body?.body.accessToken) {
                this.auth.setAccessToken(event.body.body.accessToken)
                if(event.body.body.refreshToken){
                  console.log('refresh token: ', event.body.body.refreshToken);
                  this.auth.setRefreshToken(event.body.body.refreshToken);
                  this.auth.setUID(event.body.body.uid!);
                }
              }
            },
            error: (err) => {
              if(err.status === 401){
                this.auth.authenticate().subscribe( t => {
                  this.tokenSubject.next(t.accessToken);
                })
              } // como haces para que se vuelva a mandar la reuqest que lanzo el error
            }
          })
        )
    }

    addTokenHeader(req: HttpRequest<any>, token: string) {
      return req.clone({
        setHeaders: { Authorization: token || '' }
      });
    }

    isRefresh(req: HttpRequest<any>){

    }
}
