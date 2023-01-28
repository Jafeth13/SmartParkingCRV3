import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';

const endpoint='https://localhost:7186/ticket';
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
export class TicketServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }
  delete(id: number): Observable<any> {
    return this.http.delete('tickets/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('deleteTicket')) //puede ser lo que quiera
    );
  }

  MygetReservation():Observable<any>{

    return  this.http.get(endpoint+'/GetAll',httpOptions);
    
  }

  ReservationClient(id:any):Observable<any>{
    return  this.http.get(endpoint+'/GetByIdUser?idUser='+id,httpOptions);
  }

  getTicketUpdate(id:number){
    return this.http.get('Tickets/'+id,httpOptions);
  }

  TicketUpdate(Ticket3:any){
    return this.http.put(endpoint+'/Update',Ticket3,httpOptions);
  }

  ReservationTicket(ticket :any){
    return this.http.post(endpoint+'/Insert',ticket,httpOptions);
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
