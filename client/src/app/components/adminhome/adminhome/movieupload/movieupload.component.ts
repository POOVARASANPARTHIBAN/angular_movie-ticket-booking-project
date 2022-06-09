import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Theater } from 'Models/theater';

@Component({
  selector: 'app-movieupload',
  templateUrl: './movieupload.component.html',
  styleUrls: ['./movieupload.component.css']
})
export class MovieuploadComponent implements OnInit {


  constructor(private sharedservice : SharedService,private toastr:ToastrService) { }

  movieupload : any = {
    moviename : '',
    movieimageurl : '',
    movievideourl : '',
    moviedescription : '',
    theaterId: '',
    ticketcost : 0,
    actorname : '',
    directorname : '',
    startdate : Date.now,
    enddate : Date.now
  }

  ngOnInit(): void {
    this.sharedservice.getalltheater().subscribe((data) =>{
      let length = data.docs.length;
      console.log(data)
      for(let i = 0;i<length;i++)
      {
        this.data.push(data.docs[i])
      }
    })
  }

  OnSubmit(){
    console.log(this.movieupload)
   this.sharedservice.addmovie(this.movieupload).subscribe((data) =>{
     console.log(data);
     if(data.error){
      this.toastr.error(data.message);
     }else{
      this.toastr.success("Data store successful.!!");
       console.log(data);
     }
     window.location.reload();
   }
   )}
public data : Theater[] = [];
  }