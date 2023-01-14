import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authService: AuthServiceService) {
    authService

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const role = this.authService.getStorageRole().role;

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


    if (role != null) {
      const isAuthorized = role.includes(route.data.role);

      if (!isAuthorized) {
        Toast.fire({
          icon: 'error',
          title: 'You are not authorized'
        })
      }

      return isAuthorized;

    }
    Toast.fire({
      icon: 'warning',
      title: 'You need to log in'
    })
    return false;

  }

}
