import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { ParkingServiceService } from '../services/parking-service.service';
@Component({
  selector: 'app-update-spot',
  templateUrl: './update-spot.component.html',
  styleUrls: ['./update-spot.component.css']
})
export class UpdateSpotComponent implements OnInit {

  constructor(public restParking:ParkingServiceService,private cookieService:CookieService,public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }
@Input()spotEdit:any;
parkingSelect:any;
vehicle:any;
  ngOnInit(): void {
    this.getParking2();
    this.rut();
    this.get();
  }

  rut(){
    console.log(this.route.snapshot.params['id_Spot'])
    this.rest.getSpotsById(this.route.snapshot.params['id_Spot']).subscribe((data: {}) => {
      console.log(data);
      this.spotEdit = data;
    });
  }

  getParking2(){
    const cookie: string = this.cookieService.get('token');
    this.restParking.userGetParking(cookie).subscribe((data2:{})=>{
      console.log(data2);
      this.parkingSelect=data2;
    });
   }
   updateSpot(){
    this.rest.updateSpot(this.spotEdit).subscribe((result) => {
      this.spotEdit={
        id_Spot:0,number:0,type:'',status:'',vehicle:{id_Vehicle:0},parking_lot:{id_Parking_Lot:0}
      }
      Swal.fire(
        'Good job!',
        'Spot sucessfully updated!',
        'success'
      )     
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(err);
    });
   }

   get(){
    this.vehicle= [];
    this.rest.getVehicles().subscribe((data:{})=>{
      console.log(data);
      this.vehicle=data;
    });
  }

}
