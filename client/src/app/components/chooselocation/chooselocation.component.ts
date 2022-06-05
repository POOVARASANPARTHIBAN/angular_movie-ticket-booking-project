import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'Models/location';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-chooselocation',
  templateUrl: './chooselocation.component.html',
  styleUrls: ['./chooselocation.component.css']
})
export class ChooselocationComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router) {

   var id =  localStorage.getItem("_id");
   console.log(id);
   }

  ngOnInit(): void {
    this.sharedservice.getalllocation().subscribe((data)=>{
      var length = data.docs.length;
      console.log(data)
      for(var i = 0;i<length;i++)
      {
        this.data.push(data.docs[i])
      }
    })
  }

  chooselocation: any = {
    locationId:''
  }
  onSubmit(){
    if(this.chooselocation.location === ""){
      alert("please choose location")
    }else{
    localStorage.setItem("userlocation",this.chooselocation.locationId);
     this.route.navigate(['/choosetheater']);
  }}
  public data : Location[] = [];
}
