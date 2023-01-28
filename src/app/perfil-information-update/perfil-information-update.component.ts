import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-perfil-information-update',
  templateUrl: './perfil-information-update.component.html',
  styleUrls: ['./perfil-information-update.component.css']
})
export class PerfilInformationUpdateComponent implements OnInit {

  constructor(private cookieService:CookieService,public rest:UserServiceService,private route:ActivatedRoute,private router:Router) { }
userPerfil:any
namePerfil:any
ngOnInit(): void {
  this.rut();
}
  rut(){
    const cookie:string=this.cookieService.get('token')
    let idU = localStorage.getItem('idUsuario');
    this.rest.getUserEdit(idU,cookie).subscribe((data:any) => {
      console.log(data);
      this.userPerfil= data;
      this.namePerfil=data.name
    });
  }

}