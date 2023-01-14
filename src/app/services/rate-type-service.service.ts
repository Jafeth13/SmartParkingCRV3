import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class RateTypeServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  getAllRateTypes(token:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get('https://localhost:7186/rate/Get', {
      headers:httpHeaders
    }).pipe(
      catchError(this.handleError('GetAllRateTypesError'))
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
