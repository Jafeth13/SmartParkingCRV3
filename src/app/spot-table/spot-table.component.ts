import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-spot-table',
  templateUrl: './spot-table.component.html',
  styleUrls: ['./spot-table.component.css']
})
export class SpotTableComponent implements OnInit,AfterViewInit {
  dataSource = new MatTableDataSource();
  userData: any;

 displayedColumns: string[] = ['number', 'type', 'status','parking','licence','action'];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
spot:any;
tempSpot:any;
  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getSpotss();
  }
  getSpotss(){
    this.spot= [];
    this.tempSpot=[];
    this.rest.getSpots().subscribe((data:any)=>{
      console.log(data);
      this.dataSource.data=data;
      for(let i = 0; i < this.tempSpot.length; i++) {
        if(this.tempSpot[i].vehicle.license_Plate == "0000000"){
          this.tempSpot[i].vehicle.license_Plate="Empty"
        }
    }
    this.spot=this.tempSpot
    this.tempSpot=[]
      
    });
   
    

   }
   add(){
    
    this.router.navigate(['/createSpot']);
   }

   arrayRemove(arr:any, value:any) {

    return arr.filter(function (ele:any) {
        return ele != value;
    });  

    }
   
   delete(id:number){

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
        this.rest.deleteSpot(id).subscribe(
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

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
