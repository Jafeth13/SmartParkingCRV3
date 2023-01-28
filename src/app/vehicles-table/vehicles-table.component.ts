import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    this.rest.getVehicles().subscribe((data:any)=>{    
      this.dataSource.data=data;
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

        this.rest.deleteVehicle(id).subscribe(
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
