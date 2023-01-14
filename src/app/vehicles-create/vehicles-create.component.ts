import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-vehicles-create',
  templateUrl: './vehicles-create.component.html',
  styleUrls: ['./vehicles-create.component.css']
})
export class VehiclesCreateComponent implements OnInit {

  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }

  @Input()vehicleData={id_Vehicle:0,license_Plate:'',color:'',weight:0,brand:'',vehicle_Type:{id_Type:0 }};

  ngOnInit(): void {
  }

  addVehicle(){
    
    this.rest.addVehicle(this.vehicleData).subscribe((result) => {
      this.vehicleData={
        id_Vehicle:0,license_Plate:'',color:'',weight:0,brand:'',vehicle_Type:{id_Type:0 }
      }
      Swal.fire(
        'Good job!',
        'Vehicle added sucessfully!',
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
}
