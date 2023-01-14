import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-home-smart',
  templateUrl: './home-smart.component.html',
  styleUrls: ['./home-smart.component.css']
})
export class HomeSmartComponent implements OnInit {
  

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }


  navBooking(){
    this.router.navigate(['/bookings']);
  }

}
