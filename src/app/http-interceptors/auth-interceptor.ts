import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../interfaces/api-response";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    // asignar en cada req el access-token en el header
    // en caso de error 401 (Unauthorized) asignar el refresh token en el header
    // habria que ver como hacer para volver a mandar la request que lanzo el error
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AuthResponse>> {
      console.log('authRed: ',req.url);
      let token;
      // nos fijamos si la url contiene refresh-token
      const isRefresh = req.url.includes('refresh-token');
      isRefresh ? token = localStorage.getItem(environment.refresh_token) :
        token = localStorage.getItem(environment.access_token);

      console.log(token);
      let authReq = req.clone({
        setHeaders: { Authorization: token || '' }
      });

      console.log('authReq: ', authReq);
      return next.handle(authReq)
        .pipe(
          tap({
            next: event => {
              if(event instanceof HttpResponse && event.body?.body.accessToken) {
                localStorage.setItem(environment.access_token, event.body.body.accessToken)
                if(event.body.body.refreshToken){
                  console.log('refresh token: ', event.body.body.refreshToken);
                  localStorage.setItem(environment.refresh_token, event.body.body.refreshToken);
                  localStorage.setItem(environment.user_id, event.body.body.uid!);
                }
              }
            },
            error: (err) => {
              if(err.status === 401){
                this.auth.authenticate().subscribe();
                next.handle(authReq)
              } // como haces para que se vuelva a mandar la reuqest que lanzo el error
            }
          })
        )
    }
}
