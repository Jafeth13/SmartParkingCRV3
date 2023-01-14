
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
const endpoint='https://localhost:7295/api/';
const httpOption={
headers: new HttpHeaders({
'Content-Type':'application/json'
})
};
@Injectable({
  providedIn: 'root'
})
export class MyReservationSService {
  

  constructor(private http:HttpClient) { }

  getReservation():Observable<any>{

    return  this.http.get(endpoint+'Tickets/GetTickets',httpOption);
    
  }

}
