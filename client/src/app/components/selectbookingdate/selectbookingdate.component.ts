import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-selectbookingdate',
  templateUrl: './selectbookingdate.component.html',
  styleUrls: ['./selectbookingdate.component.css']
})
export class SelectbookingdateComponent implements OnInit {
  mindate:any;
  constructor(private sharedservice: SharedService,private Route: Router, private toastr: ToastrService) { }
  choosemovie: any = {
    moviename:localStorage.getItem("moviename"),
    bookingdate:Date.now
  }
  selectdate:any = {
    username:localStorage.getItem("username"),
    moviename:localStorage.getItem("moviename"),
    ticketcost:0,
    releasedate:Date.now,
    outdate: Date.now
  }
  month:any;
  movieDetails:any = []
  ngOnInit(): void {
    this.pastdate();
    this.sharedservice.getmoviedetails(this.choosemovie).subscribe((res) =>{
      console.log(res);
      this.movieDetails = []
    
        this.movieDetails.push(res.docs[0]);
        console.log(this.movieDetails);
        localStorage.setItem("ticketcost",res.docs[0].ticketcost);
        localStorage.setItem("releasedate",res.docs[0].releasedate);
        localStorage.setItem("outdate",res.docs[0].outdate);
      
      this.selectdate.ticketcost = localStorage.getItem("ticketcost");
      this.selectdate.releasedate = localStorage.getItem("releasedate");
      this.selectdate.outdate = localStorage.getItem("outdate");
     
     
    });
    
  }
  onSubmit(){
    if(this.choosemovie.bookingdate == "function now() { [native code] }"){
      this.toastr.error("Please Select Booking Date.!!");
    }else{
    localStorage.setItem("bookingdate",this.choosemovie.bookingdate)
    this.Route.navigate(['/seatselection']);
  }
  
}
pastdate(){
  let date = new Date();
  let tdydate:any = date.getDate();
  let currentmonth:any = date.getMonth() + 1;
  let currentyear:any = date.getFullYear();
  if (tdydate < 10){
    tdydate = "0" + tdydate;
  }
  if(currentmonth < 10){
    currentmonth = "0" + currentmonth;
  }
  this.mindate = currentyear + "-" + currentmonth + "-" + tdydate;
  console.log(this.mindate);
  
}
}
