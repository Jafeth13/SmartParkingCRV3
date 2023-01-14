import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-vehicle-client',
  templateUrl: './user-vehicle-client.component.html',
  styleUrls: ['./user-vehicle-client.component.css']
})
export class UserVehicleClientComponent implements OnInit {
  item:any=localStorage.getItem("Smart ParkingLot")!;
  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router,private restUser:UserServiceService) { }
  
@Input()vehicleData={licensePlate1:'',color1:'',weight1:0,brand1:'',idType1:0,emailUser1:''}
  userId:any;
  ngOnInit(): void {
    
    this.getUserVehicles();
  }
  addVehicle(){
    console.log('entro')
    this.vehicleData={
      licensePlate1:this.vehicleData.licensePlate1,
color1: this.vehicleData.color1,
weight1: this.vehicleData.weight1,
brand1: this.vehicleData.brand1,
idType1: this.vehicleData.idType1,
emailUser1: this.userId.email
  };
console.log(this.vehicleData)
  console.log(this.userId.email)
    this.rest.addVehicleNet(this.vehicleData).subscribe((result) => {
      console.log('funciono')
      this.vehicleData={licensePlate1:'',color1:'',weight1:0,brand1:'',idType1:0,emailUser1:''}
      

    }, (err) => {
      console.log('error');
      console.log(err);
    });
  }


  getKey(){
    return JSON.parse(atob(this.item.split('.',3)[1]));
  }
  
  getUserVehicles(){
    this.restUser.getUserEmail(this.getKey().sub).subscribe((data:{})=>{
      console.log(data);
      this.userId=data;
      /*
       var html='';
       for(let i=0;i<this.vehicle.vehicles.length;i++){
        html += '<mat-option value="'+ this.vehicle.vehicles[i].id_Vehicle+'">'+this.vehicle.vehicles[i].license_Plate+'</mat-option>'
       
      }
      
      (<HTMLSelectElement>document.getElementById("selectReservation")).innerHTML=html;
  */
    });
    
  }

}


