import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {

  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }
  @Input()roleDataUpdate:any;
  ngOnInit(): void {
    this.rut();
  }

rut(){
  this.rest.getRoleById(this.route.snapshot.params['id_Role']).subscribe((data: {}) => {
    console.log(data);
    this.roleDataUpdate = data;
  });
}

update(){
  this.rest.updateRole(this.roleDataUpdate).subscribe((result) => {
    this.roleDataUpdate={
      id_Role:0,name:''
    }
    Swal.fire(
      'Good job!',
      'Role sucessfully updated!',
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
