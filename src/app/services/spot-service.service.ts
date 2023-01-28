import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';
const SpotEndpoint='https://localhost:7186/spot';

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
export class SpotServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  getSpots():Observable<any>{
    return  this.http.get(SpotEndpoint+'/Get', httpOptions).pipe(
      catchError(this.handleError('GetAllSpotsError'))
    );
  }
  deleteSpot(id:number){
    return this.http.delete(SpotEndpoint+'/delete/'+id, httpOptions).pipe(
      catchError(this.handleError('delete spot'))
    );
  }
  
  getSpotEdit(id:any):Observable<any>{
    return  this.http.get(SpotEndpoint+'/GetById?idSpot='+id, httpOptions);  
  }
  
  addSpot(SpotData:any){
    return this.http.post(SpotEndpoint+'/Insert', SpotData, httpOptions); 
  }
  
  updateSpot(Spot:any){
    return this.http.put(SpotEndpoint+'/update',Spot,httpOptions);
  }
  
  getSpotsById(id:any):Observable<any>{
    return  this.http.get(SpotEndpoint+'/GetById?idSpot='+id, httpOptions);   
  }
  
  getSpotsByParking(id:any):Observable<any>{
    return  this.http.get(SpotEndpoint+'/GetByParkingLot?id='+id, httpOptions);   
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
