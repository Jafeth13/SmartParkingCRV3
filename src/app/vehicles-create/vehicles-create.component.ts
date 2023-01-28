import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-vehicles-create',
  templateUrl: './vehicles-create.component.html',
  styleUrls: ['./vehicles-create.component.css']
})
export class VehiclesCreateComponent {
  vehicleForm: FormGroup;
  constructor(public rest: VehicleServiceService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.vehicleForm = this.fb.group({
      idVehicle: [0, Validators.required],
      licensePlate: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      brand: ['', Validators.required],
      user:this.fb.group ({ email:''}),
      type: { idType: 1 },
      
    })
  }

  addVehicle() {
    this.rest.addVehicle(this.vehicleForm.value).subscribe((result) => {
      this.vehicleForm = this.fb.group({
        idVehicle: [0, Validators.required],
        licensePlate: ['', Validators.required],
        color: ['', Validators.required],
        weight: ['', Validators.required],
        brand: ['', Validators.required],
        type: { idType: 0 },
        user: {email:''}
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
