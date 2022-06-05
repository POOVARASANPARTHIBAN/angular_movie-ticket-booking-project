import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retrievebooking } from 'Models/retrivebooking';
import { SharedService } from 'src/app/service/shared.service';
import * as lodash  from 'lodash';
@Component({
  selector: 'app-retrievebooking',
  templateUrl: './retrievebooking.component.html',
  styleUrls: ['./retrievebooking.component.css']
})
export class RetrievebookingComponent implements OnInit {
  arr: any;

  constructor(private sharedservice : SharedService, private router : Router) { }

  ngOnInit(): void {
    this.sharedservice.getallBooking().subscribe(data=>{
      let length = data.docs.length;
      console.log(data)
      this.data = lodash.sortBy(data.docs,'lastmodifieddate')
            console.log(this.data);
    });

  }
  public data: Retrievebooking[] = [];

}
