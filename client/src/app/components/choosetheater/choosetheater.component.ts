import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theater } from 'Models/theater';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-choosetheater',
  templateUrl: './choosetheater.component.html',
  styleUrls: ['./choosetheater.component.css']
})
export class ChoosetheaterComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router) { }
 choosetheater: any = {
    locationId:localStorage.getItem("userlocation")
  }
  choosetheaterId: any = {
    theaterId:'',
  }
   theaterlist:any = []

  ngOnInit(): void {
   
    this.sharedservice.chooselocation(this.choosetheater).subscribe((res) =>{
      let length = res.docs.length;
      this.theaterlist = []
      for(let i=0;i<length;i++){
        this.theaterlist.push(res.docs[i]);
        console.log(this.theaterlist);
      }
    }); 
  }
  onSubmit(){
    if(this.choosetheaterId.theaterId === ""){
      alert("please select theatername");
    }else{
    localStorage.setItem("theaterId",this.choosetheaterId.theaterId);
    this.route.navigate(['/choosemovie']);
  }}

  
  public data: Theater[]=[];
}