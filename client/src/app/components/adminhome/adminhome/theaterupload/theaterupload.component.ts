import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-theaterupload',
  templateUrl: './theaterupload.component.html',
  styleUrls: ['./theaterupload.component.css']
})
export class TheateruploadComponent implements OnInit {

  constructor(private sharedservice : SharedService) { }

  theaterupload : any = {
    _id : '',
    theatername : '',
    theaterid : '',
    totalseats : '',
    theaterlocation : '',
  }

  ngOnInit(): void {
  }
   OnSubmit(){
    console.log(this.theaterupload);
    if(this.theaterupload.theatername === "" || this.theaterupload.theaterid === "" || this.theaterupload.totalseats === "" ||this.theaterupload.theaterlocation === ""){
      alert("please fill all fields");
    }else{
   this.sharedservice.addtheater(this.theaterupload).subscribe((data) =>{
     console.log(data);
     alert("Theater Uploaded Successfully!!");
   })}
  }

}
