import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-choosetheater',
  templateUrl: './choosetheater.component.html',
  styleUrls: ['./choosetheater.component.css']
})
export class ChoosetheaterComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router) { }
 choosetheater: any = {
    location:localStorage.getItem("userlocation")
  }
  choosetheatername: any = {
    theatername:'',
  }
   theaterlist:any = []
  ngOnInit(): void {
   
    this.sharedservice.chooselocation(this.choosetheater).subscribe((res) =>{
      var length = res.docs.length;
      this.theaterlist = []
      for(var i=0;i<length;i++){
        this.theaterlist.push(res.docs[i]);
        console.log(this.theaterlist);
      }
     
    });   
  }
 
  onSubmit(){
    if(this.choosetheatername.theatername === ""){
      alert("please select theatername");
    }else{
    localStorage.setItem("theatername",this.choosetheatername.theatername);
    this.route.navigate(['/choosemovie']);
  }}

}
