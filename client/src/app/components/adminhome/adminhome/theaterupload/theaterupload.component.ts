import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'Models/location';
@Component({
  selector: 'app-theaterupload',
  templateUrl: './theaterupload.component.html',
  styleUrls: ['./theaterupload.component.css']
})
export class TheateruploadComponent implements OnInit {

  constructor(private sharedservice : SharedService,private acrouter:ActivatedRoute) { }

  theaterupload : any = {
    _id : '',
    theatername : '',
    totalseats : '',
    theaterlocation : '',
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
   OnSubmit(){
    console.log(this.theaterupload);
   this.sharedservice.addtheater(this.theaterupload).subscribe((data) =>{
     console.log(data);
     alert("Theater Uploaded Successfully!!");
   })}
  

  public data: Location[] = [];
  }