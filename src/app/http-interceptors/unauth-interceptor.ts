import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../interfaces/api-response";
import { AuthService } from "../services/auth.service";

@Injectable()
export class UnauthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AuthResponse>> {
      console.log('unauth req: ', req.headers);
      this.auth.authenticate()

      return next.handle(req)
    }
}
