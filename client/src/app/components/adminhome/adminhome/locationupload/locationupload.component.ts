import { Component, OnInit } from '@angular/core';
import { CouchdbService } from 'src/app/service/couchdb.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-locationupload',
  templateUrl: './locationupload.component.html',
  styleUrls: ['./locationupload.component.css']
})
export class LocationuploadComponent implements OnInit {

  constructor(private api:CouchdbService, private toastr:ToastrService) { }

  location: any = {
    locationName: ''
  }

  ngOnInit(): void { console.log() }

  onSubmit(){
    console.log(this.location)
    this.location['type'] = "locations" 
    this.api.add("moviebookingapp", this.location).subscribe(res =>{
      console.log(res);
      if(this.location.locationName == ''){
        this.toastr.error("Fill Location");
       }
       else{
        this.toastr.success("Data store successful.!!");
         console.log(res);
       }
       window.location.reload();
     },error => {
       console.log(error);
     });
     
  }
}
  
