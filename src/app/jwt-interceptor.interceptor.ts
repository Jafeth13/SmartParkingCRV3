import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cookie:string=this.cookieService.get('token')
    let req=request;
    if(cookie){
      req=request.clone({
        setHeaders:{
          authorization:`Bearer${Token}`
        }
      });
    }
   
   
    return next.handle(request);
  }
}
