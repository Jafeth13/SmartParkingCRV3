import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css']
})
export class VehiclesTableComponent implements OnInit,AfterViewInit {
  user:any=[];
  dataSource = new MatTableDataSource();

  userData: any;
 displayedColumns: string[] = ['licensePlate', 'color', 'weight', 'brand','action'];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(public rest:VehicleServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.get();
  }

  add(){
    this.router.navigate(['/AddVehicle']);
  }

  get(){
   // this.vehicle= [];
    this.rest.getVehicles().subscribe((data:any)=>{
      console.log(data);
      this.dataSource.data=data;
    //  this.vehicle=this.arrayRemove(this.vehicle,this.vehicle[0]);
    });
  }
  arrayRemove(arr:any, value:any) {

    return arr.filter(function (ele:any) {
        return ele != value;
    });  

    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
     applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  delete(id: number){

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
        this.rest.deleteVehicle(id).subscribe(
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
