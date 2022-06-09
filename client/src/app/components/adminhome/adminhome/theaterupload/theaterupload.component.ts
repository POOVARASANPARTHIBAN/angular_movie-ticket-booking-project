import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'Models/location';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-theaterupload',
  templateUrl: './theaterupload.component.html',
  styleUrls: ['./theaterupload.component.css']
})
export class TheateruploadComponent implements OnInit {

  constructor(private sharedservice : SharedService,private acrouter:ActivatedRoute, private toastr:ToastrService) { }

  theaterupload : any = {
    theatername : '',
    totalseats : '',
    theaterlocation : '',
  }

  ngOnInit(): void {
    this.sharedservice.getalllocation().subscribe((data)=>{
      let length = data.docs.length;
      console.log(data)
      for(let i = 0;i<length;i++)
      {
        this.data.push(data.docs[i])
      }
    })
  }
   OnSubmit(){
    console.log(this.theaterupload);
   this.sharedservice.addtheater(this.theaterupload).subscribe((data) =>{
     console.log(data);
     if(data.error){
      this.toastr.error(data.message);
     }
     else{
      this.toastr.success("Data store successful.!!");
       console.log(data);
     }
     window.location.reload();
   }, error => {
     console.log(error);
   });
}
  public data: Location[] = [];
  }

function reset() {
  throw new Error('Function not implemented.');
}
