import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit,AfterViewInit {
  user:any=[];
  dataSource = new MatTableDataSource();
  constructor(public rest:UserServiceService,private route:ActivatedRoute,private router:Router,private cookieService:CookieService) { }
  userData: any;
 displayedColumns: string[] = ['Identification', 'Name', 'Last', 'Number', 'Email','Role', 'action'];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    const cookie:string=this.cookieService.get('token')
    this.user= [];
    this.rest.getUser(cookie).subscribe((data:any)=>{
      this.dataSource.data=data;
    });
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
        this.rest.deleteUser(id,cookie).subscribe(
        (data) =>{
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
