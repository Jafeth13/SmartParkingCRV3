import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../auth-service.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit {

  email: String = 'Log in';
  role: String = '';
  constructor(private cookieService:CookieService,public authService:AuthServiceService,private route:ActivatedRoute, private router: Router) { } 

  
  ngOnInit(): void {
    this.rut()
    //if(this.authService.getStorageRole()!=undefined){
     // this.email = this.authService.getStorageRole();
   //   this.role = this.authService.getStorageRole().role;
  // let email2 = localStorage.getItem('name');
    
   // }
  }
  ngAfterViewInit() {
    let email2 = localStorage.getItem('name');

  }

  openDialog() {
    this.router.navigate(['/LoginForm']); 
    
  }
rut() {
  let email2 = localStorage.getItem('name');
    
      this.email =
        email2 + '';


        let role2 = localStorage.getItem('nameRole');
    
        this.role =
          role2 + '';
  }
  logout(){

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed out successfully'
    })


    this.router.navigate(['/homes']);
    this.email = 'Log in';
    this.role = 'vamos'  
    this.authService.logout();
    //this.authService.user = undefined;

    let idU = localStorage.getItem('idUsuario');
    idU = '';
    let idR = localStorage.getItem('idRole');
    idR = '';
    let nombreUsuario = localStorage.getItem('usuario');
    nombreUsuario = '';
    let apellido = localStorage.getItem('apellido');
    apellido = '';

    
    let email3 = localStorage.getItem('Smart ParkingLot');
    email3 = '';
    let nameRol=localStorage.getItem('nameRole');
    nameRol=''
    this.cookieService.delete('token');

    //this.role=''
  }

}
