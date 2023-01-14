import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { ParkingServiceService } from '../services/parking-service.service';

@Component({
  selector: 'app-parking-table-puntarenas',
  templateUrl: './parking-table-puntarenas.component.html',
  styleUrls: ['./parking-table-puntarenas.component.css'],
})
export class ParkingTablePuntarenasComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  userData: any;
  displayedColumns: string[] = [
    'name',
    'capacity',
    'province',
    'city',
    'district',
    'action',
  ];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  constructor(
    public rest: ParkingServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService:CookieService
  ) {}

  parking: any;
  ngOnInit(): void {
    this.getParking();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getParking() {
    const cookie:string=this.cookieService.get('token')
    this.rest.parkingPuntarenas(cookie).subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
