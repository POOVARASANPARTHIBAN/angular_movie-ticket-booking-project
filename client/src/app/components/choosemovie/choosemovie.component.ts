import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-choosemovie',
  templateUrl: './choosemovie.component.html',
  styleUrls: ['./choosemovie.component.css']
})
export class ChoosemovieComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router) { }
choosemovie: any = {
    theaterId:localStorage.getItem("theaterId")
  }
  choosemoviename: any = {
    moviename:'',
    ticketcost:'',
    releasedate:Date.now,
    outdate:Date.now
  }
  movielist:any=[];
  
  ngOnInit(): void {
     this.sharedservice.choosemovie(this.choosemovie).subscribe((res) =>{
      var length = res.docs.length;
      console.log(res);
      this.movielist = []
      for(var i=0;i<length;i++){
        this.movielist.push(res.docs[i]);
        console.log(this.movielist);
      }     
    });
  }

  onSubmit(){
    if(this.choosemoviename.moviename === ""){
      alert("please select moviename")
    }else{
    localStorage.setItem("moviename",this.choosemoviename.moviename);
    this.route.navigate(['/selectdate']);
  }
}

}
