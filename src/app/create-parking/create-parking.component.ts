import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { MyReservationSService } from '../my-reservation-s.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParkingServiceService } from '../services/parking-service.service';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.css']
})

export class CreateParkingComponent implements OnInit {
  parkingForm: FormGroup;
  constructor(private cookieService: CookieService, private fb: FormBuilder, public rest: ParkingServiceService, private route: ActivatedRoute, private router: Router) {
    this.parkingForm = this.fb.group({
      idParking_Lot: [0, Validators.required],
      name: ['', Validators.required],
      capacitySize: ['', Validators.required],
      city: ['', Validators.required],
      province: ['Province', Validators.required],
      district: ['', Validators.required]
    })
  }
  @Input() parkingData = { idParking_Lot: 0, name: '', capacitySize: 0, city: '', province: 'Province', district: '' };
  ngOnInit(): void {
  }

  addParking() {
    
    if (!this.parkingForm.valid || this.parkingForm.value.province == 'Province') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }

    // console.log(this.parkingForm.value)
    const cookie: string = this.cookieService.get('token')
    return this.rest.addParking(this.parkingForm.value, cookie).subscribe((result) => {
      this.parkingData = {
        idParking_Lot: 0, name: '', capacitySize: 0, city: '', province: 'Province', district: ''
      }
      Swal.fire(
        'Good job!',
        'ParkingLot added sucessfully!',
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
