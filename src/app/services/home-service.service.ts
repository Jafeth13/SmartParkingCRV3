import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';

const endpoint = 'https://apiproyectosmarttickets.azurewebsites.net/api/';
const ticketsEndpoint='http://localhost:8097/api/Tickets';
const authEndpoint = 'http://localhost:8097/api/auth';
const javapoint='http://localhost:8097/api/parking';
const roleEndpoint='http://localhost:8097/api/role';
const rateTypeEndpoint='http://localhost:8097/api/rateType';
const UserEndpoint='http://localhost:8097/api/user';
const SpotEndpoint='http://localhost:8097/api/spot';
const VehicleEndpoint='http://localhost:8097/api/vehicle';
const ReportEndpoint='http://localhost:8097/api/pdf';
const updateRate = 'https://localhost:7186/rate/Update';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
    //authorization:`Bearer${Token}`
  })
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
   // Authorization: 'Bearer'
    Authorization:`Bearer ${Token}`
  })
};
//let role2 = localStorage.getItem('usuario');
const httpOptions3 = {
  
  headers: new HttpHeaders({
    authorization:`Bearer${Token}`
  })
};

@Injectable({
  providedIn: 'root'
})

export class HomeServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService) { }



  delete(id: number): Observable<any> {
    return this.http.delete(endpoint+'Tickets/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('deleteTicket')) //puede ser lo que quiera
    );
  }

  MygetReservation():Observable<any>{

    return  this.http.get('https://localhost:7186/ticket/GetAll',httpOptions);
    
  }

  ReservationClient(id:any):Observable<any>{

    return  this.http.get('https://localhost:7186/ticket/GetByIdUser?idUser='+id,httpOptions);
    
  }

  getTicketUpdate(id:number){
    return this.http.get(endpoint+'Tickets/'+id,httpOptions);
  
  }

  TicketUpdate(Ticket3:any){
    return this.http.put(endpoint+'Tickets',Ticket3,httpOptions);
  }

  ReservationTicket(ticket :any){
    return this.http.post('https://localhost:7186/ticket/Insert',ticket,httpOptions);
  }

  /*********************************************************************LOGIN*******************************************************************/

  login(loginRequest: any){
    return this.http.post('https://localhost:7186/api/user/Verify',loginRequest,httpOptions).pipe(
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


  

  /****************************************************************PARKING LOT*******************************************************************/

  /****************************************************************ROLE*******************************************************************/

  getAllRoles():Observable<any>{
    return  this.http.get(roleEndpoint+'/getAllRoles', httpOptions).pipe(
      catchError(this.handleError('GetAllRolesError'))
    );
  }


  addRole(role :any){
    return this.http.post(roleEndpoint+'/add', role, httpOptions);   
  }

  deleteRole(id: number): Observable<any>{
    return this.http.delete(roleEndpoint+'/delete/'+id, httpOptions).pipe(
      catchError(this.handleError('deleteRole'))
    );
  }

  updateRole(role: any){
    return this.http.put(roleEndpoint +'/update', role, httpOptions);
  }

  getRoleById(id:any):Observable<any>{
    return  this.http.get(roleEndpoint+'/getRole/'+id, httpOptions);   
  }


  /****************************************************************RATE TYPES*******************************************************************/
/*
  getAllRateTypes():Observable<any>{
    return  this.http.get('https://localhost:7186/rate/Get', httpOptions).pipe(
      catchError(this.handleError('GetAllRateTypesError'))
    );
  }
*/

  addRateType(rateType :any){
    return this.http.post(rateTypeEndpoint+'/add', rateType, httpOptions);   
  }

  deleteRateType(id: number): Observable<any>{
    return this.http.delete(rateTypeEndpoint+'/delete/'+id, httpOptions).pipe(
      catchError(this.handleError('deleteRateType'))
    );
  }

  updateRateType(updateRateType: any){
    return this.http.put(updateRate,updateRateType,httpOptions);
  }

  getRateTypeById(id:any):Observable<any>{
    return  this.http.get('https://localhost:7186/rate/GetById?id='+id, httpOptions);   
  }
   
//////////////////////////////////////////Spot//////////////////////////////////////////////
getSpots():Observable<any>{
  return  this.http.get('https://localhost:7186/spot/Get', httpOptions).pipe(
    catchError(this.handleError('GetAllSpotsError'))
  );
}
deleteSpot(id:number){
  return this.http.delete(SpotEndpoint+'/delete/'+id, httpOptions).pipe(
    catchError(this.handleError('delete spot'))
  );
}

getSpotEdit(id:any):Observable<any>{
  return  this.http.get('https://localhost:7186/spot/GetById?idSpot='+id, httpOptions);  
}

addSpot(SpotData:any){
  return this.http.post(SpotEndpoint+'/add', SpotData, httpOptions); 
}

updateSpot(Spot:any){
  return this.http.put(SpotEndpoint+'/update',Spot,httpOptions);
}
getSpotsByParking(id:any):Observable<any>{
  return  this.http.get('https://localhost:7186/spot/GetByParkingLot?id='+id, httpOptions);   
}

/////////////////////////////////////*****Vehicles*****///////////////////////////////////////////

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
  return this.http.post(VehicleEndpoint+'/add', Vehicle, httpOptions); 
}

addVehicleNet(vehicle:any){
  return this.http.post(endpoint+'Tickets/Insert', vehicle, httpOptions);
}
updateVehicle(Vehicle:any){
  return this.http.put(VehicleEndpoint+'/update',Vehicle,httpOptions);
}

getVehicleById(id:any):Observable<any>{
  return  this.http.get('https://localhost:7186/api/vehicle/GetByEmail/id?id='+id, httpOptions);   
}

getVehicleByLicense(id:any):Observable<any>{
  return  this.http.get('https://localhost:7186/api/vehicle/GetByLicensePlate?licensePlate='+id, httpOptions);   
}
/////////////////////////////////////*****Reports*****///////////////////////////////////////////
report1(){
  return  this.http.get('http://localhost:8097/api/pdf/generate1', {responseType:'blob'});  
}

report2(){
  return  this.http.get('http://localhost:8097/api/pdf/generate2', {responseType:'blob'});  
}

report3(){
  return  this.http.get('http://localhost:8097/api/pdf/generate3', {responseType:'blob'});  
}


/////////////////////////////////////////////////////////////////////////////////////////////
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
