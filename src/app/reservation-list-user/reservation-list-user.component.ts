import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyReservationSService } from '../my-reservation-s.service';
import { HomeServiceService } from '../services/home-service.service';
@Component({
  selector: 'app-reservation-list-user',
  templateUrl: './reservation-list-user.component.html',
  styleUrls: ['./reservation-list-user.component.css']
})
export class ReservationListUserComponent implements OnInit {
  item:any=localStorage.getItem("Smart ParkingLot")!;
  userId:any
  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }
  reservations:any=[];
  ngOnInit(): void {
   
    this.getReservation();


   
  }


  getReservation(){
    let idU = localStorage.getItem('idUsuario');
    this.reservations= [];
    this.rest.ReservationClient(idU).subscribe((data:{})=>{
      console.log(data);
      this.reservations=data;
    });
  }

  delete(id: number){
    this.rest.delete(id).subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      }
    );
  }

  //getUserVehicles(){
 //   this.rest.getUserEmail(this.getKey().sub).subscribe((data:{})=>{

 //     console.log(data);
//this.userId=data;
//this.getReservation(this.userId.id_User);
      /*
       var html='';
       for(let i=0;i<this.vehicle.vehicles.length;i++){
        html += '<mat-option value="'+ this.vehicle.vehicles[i].id_Vehicle+'">'+this.vehicle.vehicles[i].license_Plate+'</mat-option>'
       
      }
      
      (<HTMLSelectElement>document.getElementById("selectReservation")).innerHTML=html;
  */
//});
    
 // }

  getKey(){
    return JSON.parse(atob(this.item.split('.',3)[1]));
  }

}
