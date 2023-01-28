import { JsonPipe, Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { HomeServiceService } from '../services/home-service.service';
import { UserServiceService } from '../services/user-service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { ParkingServiceService } from '../services/parking-service.service';
import { CookieService } from 'ngx-cookie-service';
import { RateTypeServiceService } from '../services/rate-type-service.service';
import { TicketServiceService } from '../services/ticket-service.service';
import { RateServiceService } from '../services/rate-service.service';
import { SpotServiceService } from '../services/spot-service.service';
import { VehicleServiceService } from '../services/vehicle-service.service';
@Component({
  selector: 'app-reservation-process',
  templateUrl: './reservation-process.component.html',
  styleUrls: ['./reservation-process.component.css'],
})
export class ReservationProcessComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  item: any = localStorage.getItem('Smart ParkingLot')!;
  parkingSpotsData: any;
  arraySelectedSpots: string[] = [];
  arraySpots: string[] = [];
  arrayReservedSpots: string[] = [];
  avalaibleSelect = 1;
  vehicle: any;
  rateType: any = [];
  //-----------------Variables that have the objects of each info of ticket-----------------------------
  parking: any;
  spotEdit: any;
  rateTypeInfo: any;
  vehicleData: any;
  vehiId: any;
  rateId: any;
  date: any;
  hour: any;
  parkingName: any;
  userName: any;
  spotNumber: any;
  vehicleLicense: any;
  rateTypeIn: any;
  startDate: any;
  spotId: any;
  userId: any;
  //----------------------------------------------------------------------------------------------------

  constructor(
    public restParking: ParkingServiceService,
    private restSpot: SpotServiceService,
    private restVehicle: VehicleServiceService,
    public restRateType: RateTypeServiceService,
    private cookieService: CookieService,
    public restUser: UserServiceService,
    public rest: HomeServiceService,
    private auth: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    private restTicket: TicketServiceService,
    private restRate: RateServiceService
  ) {}

  ngOnInit(): void {
    this.rut();
    this.getUserVehicles();
    this.getAllRateTypes();
  }

  @Input() TicketData = {
    parkingLot: 0,
    spot: 0,
    user: 0,
    rateType: 0,
    starDay: '',
    endDay: '',
  };
  addTicket() {
    let idU = localStorage.getItem('idUsuario');
    this.TicketData = {
      parkingLot: this.route.snapshot.params['id_Parking_Lot'],
      spot: this.spotId,
      user: this.userId,
      rateType: this.rateTypeInfo.idRateType,
      starDay: this.startDate.toString(),
      endDay: '',
    };
    this.restTicket.ReservationTicket(this.TicketData).subscribe(
      (result) => {
        Swal.fire('Good job!', 'The reservation is success !', 'success');
        this.router.navigate(['/PrincipalClient']);
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
  getTicketInfo() {
    if (this.arraySelectedSpots.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to select a spot',
      });
    } else {
      this.rutParkingLot();
      this.rutSpot();
      this.rutRateType();
      this.rutVehicle();
      this.getUser();
    }
  }

  getAllRateTypes() {
    const cookie: string = this.cookieService.get('token');
    this.restRateType.getAllRateTypes(cookie).subscribe((data: {}) => {
      this.rateType = data;
    });
  }

  rut() {
    this.parkingSpotsData = [];
    this.restSpot
      .getSpotsByParking(this.route.snapshot.params['id_Parking_Lot'])
      .subscribe((data: {}) => {
        this.parkingSpotsData = data;
      });
  }

  //-------------------------------Get methods for each information of the ticket--------------------------------------------
  rutSpot() {
    this.restSpot
      .getSpotEdit(this.arraySelectedSpots[0])
      .subscribe((data: {}) => {
        this.spotEdit = data;
        this.spotNumber = this.spotEdit.number;
        this.spotId = this.spotEdit.id;
      });
  }
  rutRateType() {
    this.restRate.getRateTypeById(this.rateId).subscribe((data: any) => {
      this.rateTypeInfo = data;
      this.rateTypeIn = data.bookingTime;
    });
  }
  rutParkingLot() {
    const cookie: string = this.cookieService.get('token');
    const usert = localStorage.getItem('name');
    this.restParking
      .getParking(this.route.snapshot.params['id_Parking_Lot'], cookie)
      .subscribe((data: {}) => {
        this.parking = data;
        this.parkingName = this.parking.name;
        this.userName = usert;
        this.startDate = this.date + 'T' + this.hour + ':00.000Z';
      });
  }
  getUser() {
    const cookie: string = this.cookieService.get('token');
    let idU = localStorage.getItem('idUsuario');

    this.restUser.getUserEdit(idU, cookie).subscribe((data: any) => {
      this.userId = data.idUser;
    });
  }

  rutVehicle() {
    this.restVehicle.getVehicleByLicense(this.vehiId).subscribe((data: any) => {
      this.vehicleData = data;
      this.vehicleLicense = data.licensePlate;
    });
  }

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }
  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }

  getUserVehicles() {
    let idU = localStorage.getItem('idUsuario');
    this.restUser.getUserEmail(idU).subscribe((data: any) => {
      this.vehicle = data;
    });
  }

  getKey() {
    return JSON.parse(atob(this.item.split('.', 3)[1]));
  }

  LoadSpotsByParking() {
    var count = 0;
    var spots = this.parkingSpotsData.length;
    var html = '<div>';

    html += '<br> </br>';
    for (let i = 0; i < this.parkingSpotsData.length; i++) {
      if (count < 3 && spots != 0) {
        html +=
          '<button class="btn_spot2" type="button" value="' +
          this.parkingSpotsData[i].number +
          '" id="spot' +
          this.parkingSpotsData[i].id +
          '" >' +
          this.parkingSpotsData[i].number +
          '</button > ';
        spots = spots - 1;
        count = count + 1;
      }
      if (count == 3 && spots != 0) {
        html += '</div>';
        count = 0;
        if (spots != 0) {
          html += '<div >';
        }
      }
      this.arraySpots.push(this.parkingSpotsData[i].id);
    }
    if (this.parkingSpotsData.length == 0) {
      html += 'The parking lot does not have any spot';
      html += '</div>';
    }
    (<HTMLDivElement>document.getElementById('spots-reservation')).innerHTML =
      html;

    if (this.parkingSpotsData.length != 0) {
      var avaSpot = 0;
      for (let i = 0; i < this.parkingSpotsData.length; i++) {
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).addEventListener('click', (event) =>
          this.selectedButton(this.parkingSpotsData[i].id.toString())
        );
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.color = '#000000';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.padding = '7px 30px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.border = '2px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.fontSize = '14px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.borderRadius = '10px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.fontFamily = 'Arial';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.fontWeight = '600';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.marginRight = '50px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.marginLeft = '10px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.marginTop = '6px';
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.parkingSpotsData[i].id)
        )).style.backgroundColor = '#d3d3d3';

        if (this.parkingSpotsData[i].type === 'Reserved') {
          (<HTMLButtonElement>(
            document.getElementById('spot' + this.parkingSpotsData[i].id)
          )).style.background = '#2a3bcf';
          this.arrayReservedSpots.push(this.parkingSpotsData[i].id);
        }
        if (this.parkingSpotsData[i].vehicle.licensePlate != '0000000') {
          (<HTMLButtonElement>(
            document.getElementById('spot' + this.parkingSpotsData[i].id)
          )).disabled = true;
          (<HTMLButtonElement>(
            document.getElementById('spot' + this.parkingSpotsData[i].id)
          )).style.background = '#ff0000';
          avaSpot = 1;
        }
        if (
          this.parkingSpotsData[i].status === 'Inactive' ||
          this.parkingSpotsData[i].status === 'Inactivo'
        ) {
          (<HTMLButtonElement>(
            document.getElementById('spot' + this.parkingSpotsData[i].id)
          )).disabled = true;
          (<HTMLButtonElement>(
            document.getElementById('spot' + this.parkingSpotsData[i].id)
          )).style.background = '#ffd800';
          avaSpot = 1;
        }
        if (avaSpot == 1) {
          this.arraySpots = this.arrayRemove(
            this.arraySpots,
            this.parkingSpotsData[i].id
          );
        }
        avaSpot = 0;
      }
    }
  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function (ele: any) {
      return ele != value;
    });
  }

  selectedButton(id: any) {
    if (this.arraySelectedSpots.includes(id) == true) {
      this.arraySelectedSpots = this.arrayRemove(this.arraySelectedSpots, id);
      this.arraySpots.push(id);
      // $('#spot' + id).css('background-color', '#d3d3d3');
      if (this.arrayReservedSpots.includes(id) == true) {
        (<HTMLButtonElement>(
          document.getElementById('spot' + id)
        )).style.background = '#2a3bcf';
      } else {
        (<HTMLButtonElement>(
          document.getElementById('spot' + id)
        )).style.background = '#d3d3d3';
      }

      if (this.avalaibleSelect == 0) {
        for (let i = 0; i < this.arraySpots.length; i++) {
          (<HTMLButtonElement>(
            document.getElementById('spot' + this.arraySpots[i])
          )).disabled = false;
        }
      }
      this.avalaibleSelect = this.avalaibleSelect + 1;
    } else {
      this.arraySelectedSpots.push(id);
      this.avalaibleSelect = this.avalaibleSelect - 1;
      this.arraySpots = this.arrayRemove(this.arraySpots, id);
      (<HTMLButtonElement>(
        document.getElementById('spot' + id)
      )).style.background = '#00b60a';
      //$('#spot' + id).css('background-color', '#00b60a');
    }

    if (this.avalaibleSelect < 1) {
      for (let i = 0; i < this.arraySpots.length; i++) {
        (<HTMLButtonElement>(
          document.getElementById('spot' + this.arraySpots[i])
        )).disabled = true;
      }
    }
  }
}
