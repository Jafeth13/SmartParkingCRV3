import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
   // authorization:`Bearer${Token}`
  })
}; 

const Endpoint='https://localhost:7186/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }
  getUser(token:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetAllUser',{
      headers:httpHeaders
    }).pipe(
      catchError(this.handleError('GetAllUsersError'))
    );  
  
  }
  getUserEdit(id:any,token:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/GetById?id='+id, {
      headers:httpHeaders
    });  
  
  }
  ///tengo que pasarlo a vehicle
  getUserEmail(id:any):Observable<any>{
    return  this.http.get('https://localhost:7186/api/vehicle/GetByEmail/id?id='+id, httpOptions);  
  }

  deleteUser(id: number,token:any): Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.delete(Endpoint+'/deleteUser/'+id, {
      headers:httpHeaders
    }).pipe(
      catchError(this.handleError('deleteRateType'))
    );
  }
  
  addUser(User:any,token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.post(Endpoint+'/Insert', User, {
      headers:httpHeaders
    }); 
  }
  updateUser(updateUser:any,token:any){
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.put(Endpoint+'/update',updateUser,{
      headers:httpHeaders
    });
  }

  getClientUsers(token:any):Observable<any>{
    let httpHeaders=new HttpHeaders().set("Authorization","bearer "+token);
    return  this.http.get(Endpoint+'/getClients', {
      headers:httpHeaders
    }).pipe(
      catchError(this.handleError('GetAllClientUsersError'))
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
