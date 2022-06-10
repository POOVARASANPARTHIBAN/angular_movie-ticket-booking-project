import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-choosemovie',
  templateUrl: './choosemovie.component.html',
  styleUrls: ['./choosemovie.component.css']
})
export class ChoosemovieComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router, private toastr: ToastrService) { }
choosemovie: any = {
    theaterId:localStorage.getItem("theaters")
  }
  choosemoviename: any = {
    moviename:''
  }
  movielist:any=[];
  
  ngOnInit(): void {
     this.sharedservice.choosemovie(this.choosemovie).subscribe((res) =>{
      const length = res.docs.length;
      console.log(res);
      this.movielist = []
      for(let i=0;i<length;i++){
        this.movielist.push(res.docs[i]);
        console.log(this.movielist);
      }     
    },error =>{
      console.log(error)
    });
  }

  onSubmit(){
    if(this.choosemoviename.moviename === ""){
      this.toastr.error("Please Choose Movie.!!");
    }else{
    localStorage.setItem("moviename",this.choosemoviename.moviename);
    this.route.navigate(['/selectdate']);
  }
}

}
