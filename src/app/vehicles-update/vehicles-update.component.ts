import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-vehicles-update',
  templateUrl: './vehicles-update.component.html',
  styleUrls: ['./vehicles-update.component.css']
})
export class VehiclesUpdateComponent implements OnInit {

  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }
  
  @Input()vehicleData:any;
  
  ngOnInit(): void {
    this.rut();
  }

  rut(){
    this.rest.getVehicleByLicense(this.route.snapshot.params['id_Vehicle']).subscribe((data: {}) => {
      console.log(data);
      this.vehicleData = data;
    });
  }

  update(){
    this.rest.updateVehicle(this.vehicleData).subscribe((result) => {
      this.vehicleData={
        id_Vehicle:0,license_Plate:'',color:'',weight:0,brand:'',vehicle_Type:{id_Type:0 }
      }
      Swal.fire(
        'Good job!',
        'Vehicle sucessfully updated!',
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
