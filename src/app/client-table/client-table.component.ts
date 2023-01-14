import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  user:any=[];
  constructor(private cookieService:CookieService,public rest:UserServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getClientUsers();
  }

  getClientUsers(){
    const cookie:string=this.cookieService.get('token')
    this.rest.getClientUsers(cookie).subscribe((data:{})=>{
      console.log(data);
      this.user=data;
    });
  }

  addUser(){
    this.router.navigate(['/createUser']);
  }

  delete(id: number){
    const cookie:string=this.cookieService.get('token')
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
  
        console.log(id)
        this.rest.deleteUser(id,cookie).subscribe(
        (data) =>{
          console.log(data);
          this.ngOnInit();
        }
      ); 
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })   
  }

}
