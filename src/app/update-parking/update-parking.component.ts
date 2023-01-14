
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { ParkingServiceService } from '../services/parking-service.service';
@Component({
  selector: 'app-update-parking',
  templateUrl: './update-parking.component.html',
  styleUrls: ['./update-parking.component.css']
})
export class UpdateParkingComponent implements OnInit {
  
  constructor(public rest:ParkingServiceService,private route:ActivatedRoute,private cookieService:CookieService,private router:Router) { }
  @Input()parkingL:any;
  ngOnInit(): void {
    this.rut();
  }
  rut(){
    const cookie: string = this.cookieService.get('token');
    this.rest.getParking(this.route.snapshot.params['id_Parking_Lot'],cookie).subscribe((data: {}) => {
      console.log(data);
      this.parkingL = data;
    });
}

update(){
  const cookie: string = this.cookieService.get('token');
  this.rest.updateParking(this.parkingL,cookie).subscribe((result) => {
    this.parkingL={
    idParking_Lot:0,name:'',capacitySize:0,city:'',province:'',district:''
    }
    Swal.fire(
      'Good job!',
      'ParkingLot sucessfully updated!',
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
edit(parkingL:any){
  this.parkingL=  {
    ...parkingL
  };
}

}
