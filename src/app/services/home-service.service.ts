import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';

const endpoint = 'https://localhost:7186';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
    //authorization:`Bearer${Token}`
  })
};



@Injectable({
  providedIn: 'root'
})

export class HomeServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  /*********************************************************************LOGIN*******************************************************************/

  login(loginRequest: any){
    return this.http.post(endpoint+'/api/user/Verify',loginRequest,httpOptions).pipe(
      tap((response: any) => {
        //httpOptions.headers = httpOptions.headers.set('Authorization', " Bearer "+response.jwtToken);  
        console.log(response)   
        this.cookieService.set('token',response.token);
        localStorage.setItem('idRole', response.usuario.role.idRole+ '');
        localStorage.setItem('name', response.usuario.name+ '');
        localStorage.setItem('usuario', response.token);
        localStorage.setItem('idUsuario', response.usuario.idUser+ '');
        
        localStorage.setItem('nameRole', response.usuario.role.name+ '');
      })
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
