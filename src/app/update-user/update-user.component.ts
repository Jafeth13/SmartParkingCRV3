
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private cookieService:CookieService,public rest:UserServiceService,private route:ActivatedRoute,private router:Router) { }
  @Input()userDataUpdate:any;
  ngOnInit(): void {
    this.rut();
  }

rut(){
  const cookie:string=this.cookieService.get('token')
  this.rest.getUserEdit(this.route.snapshot.params['id_User'],cookie).subscribe((data: {}) => {
    console.log(data);
    this.userDataUpdate = data;
  });
}

update(){
  const cookie:string=this.cookieService.get('token')
  this.rest.updateUser(this.userDataUpdate,cookie).subscribe((result) => {
    this.userDataUpdate={
      id_User:0,identification:'',name:'',last_Name:'',tel_number:'',email:'',password:'',role:{id_Role:0 }
    }
    Swal.fire(
      'Good job!',
      'User sucessfully updated!',
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
