import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { MyReservationSService } from '../my-reservation-s.service';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  @Input()userData={id_User:0,identification:'',name:'',last_Name:'',tel_number:'',email:'',password:'',role:{id_Role:0 }};
  
  
  constructor(private cookieService:CookieService,public rest:UserServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  }
  addUser(){
    const cookie:string=this.cookieService.get('token')
    this.rest.addUser(this.userData,cookie).subscribe((result) => {
      this.userData={
        id_User:0,identification:'',name:'',last_Name:'',tel_number:'',email:'',password:'',role:{id_Role:0 }
      }
      Swal.fire(
        'Good job!',
        'User added sucessfully!',
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
