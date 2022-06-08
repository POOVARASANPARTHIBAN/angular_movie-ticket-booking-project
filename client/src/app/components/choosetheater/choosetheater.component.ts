import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theater } from 'Models/theater';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-choosetheater',
  templateUrl: './choosetheater.component.html',
  styleUrls: ['./choosetheater.component.css']
})
export class ChoosetheaterComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router, private toastr: ToastrService) { }
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
      this.toastr.error("Please Choose Theater.!!");
    }else{
    localStorage.setItem("theaterId",this.choosetheaterId.theaterId);
    this.route.navigate(['/choosemovie']);
  }}

  
  public data: Theater[]=[];
}
