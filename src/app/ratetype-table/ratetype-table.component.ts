import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RateTypeServiceService } from '../services/rate-type-service.service';
import { CookieService } from 'ngx-cookie-service';
import { RateServiceService } from '../services/rate-service.service';

@Component({
  selector: 'app-ratetype-table',
  templateUrl: './ratetype-table.component.html',
  styleUrls: ['./ratetype-table.component.css'],
})
export class RatetypeTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  userData: any;

  displayedColumns: string[] = ['Booking', 'amount', 'action'];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  rateType: any = [];

  constructor(
    public rest: RateTypeServiceService,
    public restHome:RateServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    this.getAllRateTypes();
  }

  add() {
    this.router.navigate(['/AddRateType']);
  }

  getAllRateTypes() {
    const cookie: string = this.cookieService.get('token');
    this.rest.getAllRateTypes(cookie).subscribe((data: any) => {
      this.dataSource.data = data;
      this.rateType = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRateType(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.restHome.deleteRateType(id).subscribe((data) => {
          this.ngOnInit();
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
