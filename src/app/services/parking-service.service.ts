import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const Endpoint='https://localhost:7186/api/Parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  userGetParking(token:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint,{
      headers:httpHeaders
    }).pipe(
      catchError(this.handleError('GetAllParkingLotsError'))
    );
    
  }

  getParking(id:any,token:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetName?id='+id,{
      headers:httpHeaders
    }).pipe(
      catchError(this.handleError('get parking error'))
    );
  }

  deleteParking(id: any,token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.delete(Endpoint+'/DeleteParking?id='+id,{
      headers:httpHeaders
    })
    .pipe(
      catchError(this.handleError('delete Parking')) //puede ser lo que quiera
    );
  }

  addParking(parking :any,token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.post(Endpoint+'/Insert',parking,{
      headers:httpHeaders
    })
  }

  updateParking(parkingL:any,token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.put(Endpoint,parkingL,{
      headers:httpHeaders
    })
  }

  parkingCartago(token:any):Observable<any>{
    //console.log(token)
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
   return  this.http.get(Endpoint+'/GetCartago',{
      headers:httpHeaders})
  }
 
  parkingSanJose(token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetSanJose',{
      headers:httpHeaders})
  }
  parkingHeredia(token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetHeredia',{
      headers:httpHeaders
    })
  }
  parkingAlajuela(token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetAlajuela',{
      headers:httpHeaders
    })
  }
  parkingPuntarenas(token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetPuntarenas',{
      headers:httpHeaders
    })
  }
  parkingLimon(token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetLimon',{
      headers:httpHeaders
    })
  }

  parkingGuanacaste(token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetGuanacaste',{
      headers:httpHeaders
    })
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
