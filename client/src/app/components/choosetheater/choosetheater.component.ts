import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Theater } from 'Models/theater';
import { ToastrService } from 'ngx-toastr';
import { CouchdbService } from 'src/app/service/couchdb.service';

@Component({
  selector: 'app-choosetheater',
  templateUrl: './choosetheater.component.html',
  styleUrls: ['./choosetheater.component.css']
})
export class ChoosetheaterComponent implements OnInit {

  constructor(private route:Router, private toastr: ToastrService, private api:CouchdbService, private router:ActivatedRoute) { }
 choosetheater: any = {
    locationId:localStorage.getItem("userlocation")
  }
  choosetheaterId: any = {
    theaters:'',
  }
   theaterlist:any = []
   locations: any ;
  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {
      console.log(params)
    this.locations = params.locationId;
    });
    const data = {
      "keys": [ "theaters" + this.locations], 
      "include_docs": true
    }
    this.api.getThreater(data).subscribe((res) => {
      console.log(res);
      let response:any = res
      let length = response.rows.length;
      this.theaterlist = []
      for(let i=0;i<length;i++){
        this.theaterlist.push(response.rows[i].doc);
      }
      console.log(this.theaterlist);
    },error => {
      console.log(error);
    });
  }
  onSubmit(){
    if(this.choosetheaterId.theaters === ""){
      this.toastr.error("Please Choose Theater.!!");
    }else{
    localStorage.setItem("theaters",this.choosetheaterId.theaters);
    this.route.navigate(['/choosemovie']);
  }}

  public data: Theater[]=[];
}
