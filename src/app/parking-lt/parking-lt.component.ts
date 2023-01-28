import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { ParkingServiceService } from '../services/parking-service.service';

@Component({
  selector: 'app-parking-lt',
  templateUrl: './parking-lt.component.html',
  styleUrls: ['./parking-lt.component.css'],
})
export class ParkingLTComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'name',
    'capacity',
    'province',
    'city',
    'district',
    'action',
  ];

  constructor(
    public rest: ParkingServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit(): void {
    this.getParking();
  }

  getParking() {
    const cookie: string = this.cookieService.get('token');
    this.rest.userGetParking(cookie).subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  deleteParking(id: number) {
    const cookie: string = this.cookieService.get('token');
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
        this.rest.deleteParking(id, cookie).subscribe((data) => {
          this.ngOnInit();
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  update(id: number) {
    const cookie: string = this.cookieService.get('token');
    this.rest.deleteParking(id, cookie).subscribe((data) => {
      this.ngOnInit();
    });
  }

  add() {
    this.router.navigate(['/createParkings']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
