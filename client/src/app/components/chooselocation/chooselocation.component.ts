import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-chooselocation',
  templateUrl: './chooselocation.component.html',
  styleUrls: ['./chooselocation.component.css']
})
export class ChooselocationComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router) { }

  ngOnInit(): void {
  }

  chooselocation: any = {
    location:''
  }
  onSubmit(){
    if(this.chooselocation.location === ""){
      alert("please choose location")
    }else{
    localStorage.setItem("userlocation",this.chooselocation.location);
     this.route.navigate(['/choosetheater']);
  }}
}
