
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyReservationSService } from '../my-reservation-s.service';
import { HomeServiceService } from '../services/home-service.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.css']
})
export class MyReservationComponent implements OnInit {
  reservations:any=[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) {
    
   }
  displayedColumns: string[] = ['ParkingLot', 'User', 'RateType', 'Spot', 'StartDay', 'EndDay','action'];
//  dataSourceReservation = this.reservations;
  ngOnInit(): void {
    this.getReservation();
    
  }

 getReservation(){
    this.reservations= [];
    this.rest.MygetReservation().subscribe((data:any)=>{
      console.log(data);
      this.dataSource.data=data;
    });
  }

  delete(id: number){
    this.rest.delete(id).subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      }
    );
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
