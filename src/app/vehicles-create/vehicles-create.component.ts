import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicles-create',
  templateUrl: './vehicles-create.component.html',
  styleUrls: ['./vehicles-create.component.css']
})
export class VehiclesCreateComponent {
  vehicleForm: FormGroup;
  constructor(public rest: HomeServiceService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.vehicleForm = this.fb.group({
      idVehicle: [0, Validators.required],
      licensePlate: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      brand: ['', Validators.required],
      vehicleType: { idType: 0 }
    })
  }

  addVehicle() {

    console.log(this.vehicleForm.value)

    this.rest.addVehicle(this.vehicleForm.value).subscribe((result) => {
      this.vehicleForm = this.fb.group({
        idVehicle: [0, Validators.required],
        licensePlate: ['', Validators.required],
        color: ['', Validators.required],
        weight: ['', Validators.required],
        brand: ['', Validators.required],
        vehicleType: { idType: 0 }
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
      console.log(err);
    });
  }
}
