import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../interfaces/api-response";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    // asignar en cada req el access-token en el header
    // en caso de error 401 (Unauthorized) asignar el refresh token en el header
    // habria que ver como hacer para volver a mandar la request que lanzo el error
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AuthResponse>> {
      console.log('authRed: ',req.headers);
      let token = localStorage.getItem(environment.access_token);

      let authReq = req.clone({
          headers: req.headers.set('Authorization', token || '')
      });
      console.log('authReq: ', authReq.headers);

      return next.handle(req)
        .pipe(
          tap({
            next: event => {
              if(event instanceof HttpResponse && event.body?.body.refreshToken) {
                localStorage.setItem(environment.access_token, event.body.body.token);
                localStorage.setItem(environment.refresh_token, event.body.body.refreshToken);
                localStorage.setItem(environment.user_id, event.body.body.uid!);
              }
            },
            error: (err) => {
              if(err.status === 401){
                let token = localStorage.getItem(environment.refresh_token)
                let authReq = req.clone({
                  headers: req.headers.set('Authorization', token || '')
                })
                next.handle(authReq);
              } // como haces para que se vuelva a mandar la reuqest que lanzo el error
            }
          })
        )
    }
}
