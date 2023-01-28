import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-user-vehicle-client',
  templateUrl: './user-vehicle-client.component.html',
  styleUrls: ['./user-vehicle-client.component.css']
})
export class UserVehicleClientComponent  {
  vehicleForm: FormGroup;
  constructor(public rest: HomeServiceService, private fb: FormBuilder,private restVehicle:VehicleServiceService,
     private route: ActivatedRoute, private router: Router) {
   let emailUser = localStorage.getItem('Smart ParkingLot');
 this.vehicleForm = this.fb.group({
      idVehicle: [0, Validators.required],
      licensePlate: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      brand: ['', Validators.required],
      type: { idType: 0 },
      user:{email:emailUser}
    })
  }

  addVehicle() {
    this.restVehicle.addVehicle(this.vehicleForm.value).subscribe((result) => {
      this.vehicleForm = this.fb.group({
        idVehicle: [0, Validators.required],
        licensePlate: ['', Validators.required],
        color: ['', Validators.required],
        weight: ['', Validators.required],
        brand: ['', Validators.required],
        type: { idType: 0 },
        user:{email:''}
      })
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
    });
  }
}
