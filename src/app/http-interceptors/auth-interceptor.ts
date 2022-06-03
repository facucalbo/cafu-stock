import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const refreshToken = localStorage.getItem(environment.refresh_token);
        
        if(req.headers.get('Authorization')) {
            
        }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', refreshToken!)
        });

        return next.handle(authReq);
    }
    
}