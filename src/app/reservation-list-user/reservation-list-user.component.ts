import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyReservationSService } from '../my-reservation-s.service';
import { HomeServiceService } from '../services/home-service.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TicketServiceService } from '../services/ticket-service.service';
@Component({
  selector: 'app-reservation-list-user',
  templateUrl: './reservation-list-user.component.html',
  styleUrls: ['./reservation-list-user.component.css']
})
export class ReservationListUserComponent implements OnInit {
  item:any=localStorage.getItem("Smart ParkingLot")!;
  userId:any
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  displayedColumns: string[] = ['ParkingLot', 'User', 'RateType', 'Spot', 'StartDay', 'EndDay','action'];

  constructor(public rest:TicketServiceService,private route:ActivatedRoute,private router:Router) { }
  reservations:any=[];
  ngOnInit(): void {
   
    this.getReservation();


   
  }


  getReservation(){
    let idU = localStorage.getItem('idUsuario');
    this.reservations= [];
    this.rest.ReservationClient(idU).subscribe((data:any)=>{
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


  getKey(){
    return JSON.parse(atob(this.item.split('.',3)[1]));
  }

}
