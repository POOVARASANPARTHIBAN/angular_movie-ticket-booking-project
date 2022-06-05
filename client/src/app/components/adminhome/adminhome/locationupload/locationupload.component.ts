import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-locationupload',
  templateUrl: './locationupload.component.html',
  styleUrls: ['./locationupload.component.css']
})
export class LocationuploadComponent implements OnInit {

  constructor(private sharedservice : SharedService) { }

  location: any = {
    _id:'',
    locationName: ''
  }

  ngOnInit(): void { console.log() }
  onSubmit(){
    if(this.location.locationName == '')
      alert("Please fill the fields.")
    else
    {
      this.sharedservice.addlocation(this.location).subscribe((data) =>{
        console.log(data);
        alert("Location added Successfully!");
      })
    }
  }
}