import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-ratetype-create',
  templateUrl: './ratetype-create.component.html',
  styleUrls: ['./ratetype-create.component.css']
})
export class RatetypeCreateComponent implements OnInit {

  rateTypeForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { 

    this.rateTypeForm = this.fb.group({
      id: 0,
      booking_Time: ['', [Validators.required]],
      amount: ['', [Validators.required]]
  })

  }
  ngOnInit(): void {
  }

  addRateType() {

    if (!this.rateTypeForm.valid) {
      return;
    }

    this.rest.addRateType(this.rateTypeForm.value).subscribe((result) => {
      this.router.navigate(['/PrincipalAdmin']);
      Swal.fire(
        'Good job!',
        'RateType added sucessfully!',
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

  get id() { return this.rateTypeForm.get('id'); }
  get booking_Time() {return this.rateTypeForm.get('booking_Time')}
  get amount() { return this.rateTypeForm.get('amount'); }
}
