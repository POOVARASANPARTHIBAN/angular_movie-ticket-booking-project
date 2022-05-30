import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retrievebooking } from 'Models/retrivebooking';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {


  constructor(private sharedservice : SharedService, private router : Router) { }
mybooking: any = {
    email:localStorage.getItem("email"),
  }
  ngOnInit(): void {
    this.sharedservice.getmyBooking(this.mybooking).subscribe(data=>{
      var length = data.docs.length;
      console.log(data)
      for(var i = 0;i<length;i++)
      {
        this.data.push(data.docs[i])
      }
      console.log(this.data);
    })
  }

  public data: retrievebooking[] = [];

}
