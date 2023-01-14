import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  roleForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { 

    this.roleForm = this.fb.group({
      id: 0,
      name: ['', [Validators.required]]
  })

  }

  ngOnInit(): void {
  }

  addRole() {

    if (!this.roleForm.valid) {
      return;
    }

    this.rest.addRole(this.roleForm.value).subscribe((result) => {
      this.router.navigate(['/PrincipalAdmin']);
      Swal.fire(
        'Good job!',
        'Role added sucessfully!',
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

  get id() { return this.roleForm.get('id'); }
  get name() { return this.roleForm.get('name'); }

}
