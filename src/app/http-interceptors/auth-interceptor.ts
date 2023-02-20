import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    // cuando llega un error 401 unauthorized del lado del servidor, le asignamos al header el refresh token
    // y por cada response nos fijamos si nos llega un accessToken en el body, en caso de que llegue, lo guardamos en el sessionStorage o locaStorage
    
    // Habria que ver como hacer para que cuando llegue un 401,  se vuelva a mandar la request que largo el error.
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