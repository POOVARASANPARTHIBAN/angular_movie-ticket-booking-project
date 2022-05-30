import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retrievebooking } from 'Models/retrivebooking';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-retrievebooking',
  templateUrl: './retrievebooking.component.html',
  styleUrls: ['./retrievebooking.component.css']
})
export class RetrievebookingComponent implements OnInit {

  constructor(private sharedservice : SharedService, private router : Router) { }

  ngOnInit(): void {
    this.sharedservice.getallBooking().subscribe(data=>{
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
