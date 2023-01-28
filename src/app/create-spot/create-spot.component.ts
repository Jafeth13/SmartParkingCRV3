import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { ParkingServiceService } from '../services/parking-service.service';
import { SpotServiceService } from '../services/spot-service.service';
import { VehicleServiceService } from '../services/vehicle-service.service';
@Component({
  selector: 'app-create-spot',
  templateUrl: './create-spot.component.html',
  styleUrls: ['./create-spot.component.css'],
})
export class CreateSpotComponent implements OnInit {
  constructor(
    private rest_Parking: ParkingServiceService,
    private cookieService: CookieService,
    public rest: HomeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private restSpot:SpotServiceService,
    private restVehicle:VehicleServiceService
  ) {}
  @Input() SpotData = {
    id_Spot: 0,
    number: 0,
    type: '',
    status: '',
    vehicle: { id_Vehicle: 0 },
    parking_lot: { id_Parking_Lot: 0 },
  };
  ngOnInit(): void {
    this.getParking();
    this.get();
  }
  parkingSelectT: any;
  vehicle: any;
  addUSpot() {
    this.restSpot.addSpot(this.SpotData).subscribe(
      (result) => {
        this.SpotData = {
          id_Spot: 0,
          number: 0,
          type: '',
          status: '',
          vehicle: { id_Vehicle: 0 },
          parking_lot: { id_Parking_Lot: 0 },
        };
        Swal.fire('Good job!', 'Spot added sucessfully!', 'success');
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }
  getParking() {
    const cookie: string = this.cookieService.get('token');
    this.rest_Parking.userGetParking(cookie).subscribe((data: {}) => {
      this.parkingSelectT = data;
    });
  }

  get() {
    this.restVehicle.getVehicles().subscribe((data: {}) => {
      this.vehicle = data;
      console.log(data);
      console.log(this.vehicle);
    });

    console.log(this.vehicle);
  }
}
