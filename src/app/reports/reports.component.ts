import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  report1(){
    this.rest.report1().subscribe((data)=>{
      let downloadURL = window.URL.createObjectURL(data)
      let link = document.createElement('a')
      link.href=downloadURL
      link.download="report1.pdf"
      link.click()
      console.log(data);
    });
  }

  report2(){
    this.rest.report2().subscribe((data)=>{
      let downloadURL = window.URL.createObjectURL(data)
      let link = document.createElement('a')
      link.href=downloadURL
      link.download="report2.pdf"
      link.click()
      console.log(data);
    });
  }

  report3(){
    this.rest.report3().subscribe((data)=>{
      let downloadURL = window.URL.createObjectURL(data)
      let link = document.createElement('a')
      link.href=downloadURL
      link.download="report3.pdf"
      link.click()
      console.log(data);
    });
  }
}
