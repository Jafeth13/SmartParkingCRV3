import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { ParkingServiceService } from '../services/parking-service.service';
@Component({
  selector: 'app-parking-table-alajuela',
  templateUrl: './parking-table-alajuela.component.html',
  styleUrls: ['./parking-table-alajuela.component.css'],
})
export class ParkingTableAlajuelaComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();

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
    private cookieService: CookieService,
    public rest: ParkingServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParking();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getParking() {
    const cookie: string = this.cookieService.get('token');
    this.rest.parkingAlajuela(cookie).subscribe((data2: any) => {
      this.dataSource.data = data2;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
