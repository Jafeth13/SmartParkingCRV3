import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';

const VehicleEndpoint='https://localhost:7186/api/vehicle/update';
const endpoint = 'https://apiproyectosmarttickets.azurewebsites.net/api/';


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
export class VehicleServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }


  getVehicles():Observable<any>{
    return  this.http.get('https://localhost:7186/api/vehicle/Get', httpOptions).pipe(
      catchError(this.handleError('GetAllVehiclesError'))
    );  
  }
  
  deleteVehicle(id:number){
    return this.http.delete(VehicleEndpoint+'/delete/'+id, httpOptions).pipe(
      catchError(this.handleError('delete vehicle'))
    );
  }
  
  addVehicle(Vehicle:any){
    return this.http.post('https://localhost:7186/api/vehicle/Insert', Vehicle, httpOptions); 
  }
  
  addVehicleNet(vehicle:any){
    return this.http.post(endpoint+'Tickets/Insert', vehicle, httpOptions);
  }
  updateVehicle(Vehicle:any){
    return this.http.put(VehicleEndpoint,Vehicle,httpOptions);
  }
  
  getVehicleById(id:any):Observable<any>{
    return  this.http.get('https://localhost:7186/api/vehicle/GetByEmail/id?id='+id, httpOptions);   
  }
  
  getVehicleByLicense(id:any):Observable<any>{
    return  this.http.get('https://localhost:7186/api/vehicle/GetByLicensePlate?licensePlate='+id, httpOptions);   
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
