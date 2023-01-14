import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-ratetype-update',
  templateUrl: './ratetype-update.component.html',
  styleUrls: ['./ratetype-update.component.css']
})
export class RatetypeUpdateComponent implements OnInit {

  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }
  @Input()rateTypeData: any;

  ngOnInit(): void {
    this.rut();
  }

rut(){
  this.rest.getRateTypeById(this.route.snapshot.params['id_Rate_Type']).subscribe((data: {}) => {
    console.log(data);
    this.rateTypeData = data;
  });
}

update(){
  this.rest.updateRateType(this.rateTypeData).subscribe((result) => {
    this.rateTypeData={
      id_Rate_Type:0, booking_Time:'', amount: 0
    }
    Swal.fire(
      'Good job!',
      'RateType sucessfully updated!',
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
