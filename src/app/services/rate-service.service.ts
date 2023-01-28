import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';
const updateRate = 'https://localhost:7186/rate/Update';
const rateTypeEndpoint='http://localhost:8097/api/rateType';

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
export class RateServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  addRateType(rateType :any){
    return this.http.post('https://localhost:7186/rate/Insert', rateType, httpOptions);   
  }

  deleteRateType(id: number): Observable<any>{
    return this.http.delete('https://localhost:7186/rate/Delete?bookingTime='+id, httpOptions).pipe(
      catchError(this.handleError('deleteRateType'))
    );
  }

  updateRateType(updateRateType: any){
    return this.http.put(updateRate,updateRateType,httpOptions);
  }

  getRateTypeById(id:any):Observable<any>{
    return  this.http.get('https://localhost:7186/rate/GetById?id='+id, httpOptions);   
  }

  
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
