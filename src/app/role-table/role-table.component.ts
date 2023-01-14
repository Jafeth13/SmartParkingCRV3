import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.css']
})
export class RoleTableComponent implements OnInit {

  role:any=[];
  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  add(){
    this.router.navigate(['/AddRole']);
  }

  getAllRoles(){
    this.role= [];
    this.rest.getAllRoles().subscribe((data:{})=>{
      console.log(data);
      this.role=data;
    });
  }

  deleteRole(id: number){

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
        this.rest.deleteRole(id).subscribe(
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
