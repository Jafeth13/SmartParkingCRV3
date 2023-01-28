import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RateServiceService } from '../services/rate-service.service';

@Component({
  selector: 'app-ratetype-update',
  templateUrl: './ratetype-update.component.html',
  styleUrls: ['./ratetype-update.component.css']
})
export class RatetypeUpdateComponent implements OnInit {

  ratetypeForm: FormGroup;

  constructor(private fb: FormBuilder, public rest: RateServiceService, private route: ActivatedRoute, private router: Router) {
    this.ratetypeForm = this.fb.group({
      booking_Time: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }
  @Input() rateTypeData: any;

  ngOnInit(): void {
    this.rut();
  }

  rut() {
    this.rest.getRateTypeById(this.route.snapshot.params['id_Rate_Type']).subscribe((data: {}) => {
      console.log(data);
      this.rateTypeData = data;
    });
  }

  update() {
    console.log(this.rateTypeData)
    this.rest.updateRateType(this.rateTypeData).subscribe((result) => {
      // this.rateTypeData = {
      //   id_Rate_Type: 0, booking_Time: '', amount: 0
      // }
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
