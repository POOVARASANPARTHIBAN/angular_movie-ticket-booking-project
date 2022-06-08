import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'Models/location';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chooselocation',
  templateUrl: './chooselocation.component.html',
  styleUrls: ['./chooselocation.component.css']
})
export class ChooselocationComponent implements OnInit {

  constructor(private sharedservice:SharedService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.sharedservice.getalllocation().subscribe((data)=>{
      let length = data.docs.length;
      console.log(data)
      for(let i = 0;i<length;i++)
      {
        this.data.push(data.docs[i])
      }
    })
  }
  chooselocation: any = {
    locationId:''
  }
  onSubmit(){
    if(this.chooselocation.locationId === ""){
      this.toastr.error("Please Choose Your Location");
    }else{
    localStorage.setItem("userlocation",this.chooselocation.locationId)
    this.router.navigate(
      ['/choosetheater'],
      {queryParams: { locationId: this.chooselocation.locationId }}
    )}
  }

  public data : Location[] = [];
}