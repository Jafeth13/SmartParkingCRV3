import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HomeServiceService } from './services/home-service.service';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //cookieService=inject(CookieService);
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()
  user: any;
;

  constructor(private cookieService:CookieService,public rest:HomeServiceService) { 
    const token = localStorage.getItem('Smart ParkingLot');
    this._isLoggedIn$.next(!!token);
  }

  login(loginData:any){
    return this.rest.login(loginData).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('Smart ParkingLot', response.usuario.email)
        //this.user = this.getUser(response.jwtToken)
    this.cookieService.set('token',response.token);
    //  this.cookieService.set('Test', 'Hello World');
      })
    );
  }

  logout(){
    this._isLoggedIn$.next(false);
    return localStorage.clear();
  }

  getStorageRole(){
    const token = localStorage.getItem('Smart ParkingLot');
    if(token!=null){
      const storageUser = this.getUser(token);
      return storageUser;
    }
  }


  private getUser(token: any){
    if(token!=null){
      return JSON.parse(atob(token.split('.')[1]))
    }   
  }
}
