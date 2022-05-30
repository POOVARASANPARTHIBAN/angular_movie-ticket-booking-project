import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-movieupload',
  templateUrl: './movieupload.component.html',
  styleUrls: ['./movieupload.component.css']
})
export class MovieuploadComponent implements OnInit {

  constructor(private sharedservice : SharedService) { }

  movieupload : any = {
    _id : '',
    moviename : '',
    movieimageurl : '',
    movievideourl : '',
    moviedescription : '',
    theatername: '',
    ticketcost : 0,
    actorname : '',
    directorname : '',
    startdate : Date.now,
    enddate : Date.now
  }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.movieupload)
    if(this.movieupload.moviename === "" || this.movieupload.movieimageurl === "" || this.movieupload.movievideourl === "" || this.movieupload.moviedescription === "" || this.movieupload.theatername === "" ||this.movieupload.ticketcost === "" ||this.movieupload.actorname === "" ||this.movieupload.directorname === ""){
      alert("please fill all fields");
    }else{
   this.sharedservice.addmovie(this.movieupload).subscribe((data) =>{
     console.log(data);
     alert("Movie Uploaded Successfully!!");
   })}
  }

}
