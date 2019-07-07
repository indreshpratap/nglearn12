import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router:Router){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let token = localStorage.getItem("token") || '';
        let cloned = req.clone({
             setHeaders: { 
                 'Authorization': 'Bearer ' + token,
                 'DEVICE_ID':'DEDSFSDdfdsfdssd'/// a custom header we can send as much as we want
                } 
            }
        )
        return next.handle(cloned).pipe(catchError(err=>{
            
            if(err instanceof HttpErrorResponse){
                let httpError = (err as HttpErrorResponse);
                if(httpError.status===403 || httpError.status ===401){
                    this.router.navigate(['/']);
                }
            }
            
           return throwError(err);
        }));
    }
}