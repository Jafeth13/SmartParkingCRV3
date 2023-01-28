import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import Swal from 'sweetalert2'
import { HomeServiceService } from '../services/home-service.service';
import { UserServiceService } from '../services/user-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  errorMessage: any;

  constructor(private cookieService:CookieService,private fb: FormBuilder, public authService: AuthServiceService, private route: ActivatedRoute, private router: Router, public rest:UserServiceService) {


    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      identification: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      telNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role:{idRole:3 }
    });
  }

  ngOnInit(): void {
  }

  login() {

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

    if(!this.loginForm.valid){
      return;
    }

    return this.authService.login(this.loginForm.value).subscribe((result) => {
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      this.router.navigate(['/homes']);
    },(error) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bad credentials',
      });
    });
  }

  get email() { return this.loginForm.get('email'); };
  get password() { return this.loginForm.get('password'); };


  signIn(){
    const cookie:string=this.cookieService.get('token')
    if(!this.registerForm.valid){
      return;
    }

    return this.rest.addUser(this.registerForm.value,cookie).subscribe((result) => {
      Swal.fire(
        'Excellent!',
        'You have successfully registered!',
        'success'
      );
      this.router.navigate(['/homes']);
    },(error) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  get identification() { return this.registerForm.get('identification'); };
  get name() { return this.registerForm.get('name'); };
  get last_Name() { return this.registerForm.get('last_Name'); };
  get tel_Number() { return this.registerForm.get('tel_Number'); };


}
