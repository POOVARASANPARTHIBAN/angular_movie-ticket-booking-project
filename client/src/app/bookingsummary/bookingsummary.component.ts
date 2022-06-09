import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})
export class BookingsummaryComponent implements OnInit {

  constructor(private sharedservice : SharedService,private route:Router, private toastr: ToastrService) { }
bookingdata:any = {
    currentdate: Date.now,
    username: localStorage.getItem("username"),
    email:  localStorage.getItem("email"),
    mobile: localStorage.getItem("mobile"),
    bookingdate: localStorage.getItem("bookingdate"),
    theaterId:localStorage.getItem("theaters"),
    moviename: localStorage.getItem("moviename"),
    moviewatchers: localStorage.getItem("moviewatchers"),
    totalseats: localStorage.getItem("totalseats"),
    seatnames: localStorage.getItem("seatnames"),
    totalcost: Number(localStorage.getItem("ticketcost")) * Number(localStorage.getItem("totalseats")),
    users : localStorage.getItem("_id")
  }
  ngOnInit(): void { console.log() }
  insertbooking(){
      console.log(this.bookingdata)
   this.sharedservice.addbooking(this.bookingdata).subscribe((data) =>{
     console.log(data);
     if(data){
      this.toastr.success("Your Booking Was Successfull.!!");
     }
     else{
      this.toastr.error("Booking Not Complete..!");
       console.log(data)
     } 
   }) 
      localStorage.removeItem("userlocation")
      localStorage.removeItem("ticketcost")
      localStorage.removeItem("releasedate")
      localStorage.removeItem("outdate")
      localStorage.removeItem("bookingdate")
      localStorage.removeItem("theaters")
      localStorage.removeItem("moviename")
      localStorage.removeItem("moviewatchers")
      localStorage.removeItem("totalseats")
      localStorage.removeItem("seatnames")
    this.route.navigate(['/userhome']);
  }

}

