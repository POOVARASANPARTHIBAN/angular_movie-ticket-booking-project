import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { Movie } from 'Models/movie';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {


  constructor(private sharedservice : SharedService, private router: Router) { }

  ngOnInit(): void {
    this.sharedservice.getallmovie().subscribe(data=>{
      var length = data.docs.length;
      console.log(data)
      for(var i = 0;i<length;i++)
      {
        this.data.push(data.docs[i])
      }
      console.log(this.data);
    })
  }

  deleteMovie(_id:any,_rev:any){

     this.sharedservice.deleteMovie(_id,_rev).subscribe((data) =>{
     console.log(data);
     window.location.reload();
   })
  }
public data: Movie[] = [];

}
