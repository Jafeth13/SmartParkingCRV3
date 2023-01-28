import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../auth-service.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  email: String = 'Log in';
  role: String = '';
  constructor(
    private cookieService: CookieService,
    public authService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let nombreUsuario = localStorage.getItem('usuario');
    if (nombreUsuario != null) {
      this.rut();
    }
  }
  ngAfterViewInit() {
    let email2 = localStorage.getItem('name');
  }

  openDialog() {
    let email2 = localStorage.getItem('name');
    if (email2 != null) {
      this.router.navigate(['/perfil']);
    } else {
      this.router.navigate(['/LoginForm']);
    }
  }
  rut() {
    let email2 = localStorage.getItem('name');
    this.email = email2 + '';
    let role2 = localStorage.getItem('nameRole');
    this.role = role2 + '';
  }
  logout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Signed out successfully',
    });
    this.router.navigate(['/homes']);
    this.email = 'Log in';
    this.role = '';
    this.authService.logout();
    this.authService.user = undefined;
  }
}
