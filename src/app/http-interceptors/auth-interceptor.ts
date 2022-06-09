import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, Observable, retry, Subject, switchMap, take, tap, throwError } from 'rxjs';
import { AuthResponse } from "../interfaces/api-response";
import { AuthService } from "../services/auth.service";
import { InventoryService } from '../services/inventory.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService, private inventory: InventoryService) {}

    private tokenSubject = new BehaviorSubject<any>(null);
    private isRefreshing = false;
    private token = '';
    // asignar en cada req el access-token en el header
    // en caso de error 401 (Unauthorized) asignar el refresh token en el header
    // habria que ver como hacer para volver a mandar la request que lanzo el error
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AuthResponse>> {
      console.log('authRed: ',req.url);
      this.tokenSubject.subscribe( t => this.token = t)
      // nos fijamos si la url contiene refresh-token
      const isRefresh = req.url.includes('refresh-token');

      isRefresh ? this.tokenSubject.next(this.auth.refreshToken) :
        this.tokenSubject.next(this.auth.accessToken);

      console.log(this.token);
      let authReq = this.addTokenHeader(req)

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

                if(this.isRefreshing){
                  return this.tokenSubject.pipe(
                    filter(result => result !== null),
                    take(1),
                    switchMap(()=> next.handle(this.addTokenHeader(authReq)))
                  )
                }else {
                  this.isRefreshing = true;
                  // se setea el subject en null para q la prox api req espera a que se resetee
                  this.tokenSubject.next(null);
                  // se refreshea el token
                  return this.auth.authenticate().pipe(
                    switchMap( t => {
                      this.tokenSubject.next(t.accessToken);
                      return next.handle(this.addTokenHeader(authReq));
                    })
                  ).subscribe();
                }
              } else {
                return throwError(() => err);
              }
            }
          })
        )
    }

    addTokenHeader(req: HttpRequest<any>) {
      if(!this.token) return req;
      return req.clone({
        setHeaders: { Authorization: this.token || '' }
      });
    }

    isRefresh(req: HttpRequest<any>){

    }
}
