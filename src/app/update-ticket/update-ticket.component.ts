import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
date:any
hour:any
  constructor(public rest:HomeServiceService,private route:ActivatedRoute,private router:Router) { }
  @Input()TicketData:any
  ngOnInit(): void {
    
  this.rut();
  }
  startDate:any
  Ticket3={id:0,date_upd:''};
  updateTicket(){
  this.startDate=this.date+'T'+this.hour+':00.000Z';
  this.Ticket3={
  id:this.TicketData[0].idTicket,
  date_upd:this.startDate
};
this.rest.TicketUpdate(this.Ticket3).subscribe((result) => {
  
     Swal.fire(
        'Good job!',
        'The reservation was updated successfully!',
        'success'
      
      )
      this.router.navigate(['/PrincipalClient']);
  
}, (err) => {
  
  console.log(err);

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!'
  })

  
});


  }

  rut(){
    this.rest.getTicketUpdate(this.route.snapshot.params['idTicket']).subscribe((data: {}) => {
      console.log(data);
      this.TicketData = data;
      
    });
  }

  
   selectDate(type: string, event: MatDatepickerInputEvent<Date>){
  //  this.date=moment(event.value).format('YYYY-MM-DD');
  }
  selectHour(){
  this.hour=(<HTMLInputElement> document.getElementById("time")).value;
  }

}
