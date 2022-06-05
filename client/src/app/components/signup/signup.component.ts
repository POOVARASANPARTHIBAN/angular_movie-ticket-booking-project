import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sharedservice : SharedService,private toastr: ToastrService) { }

  signup : any = {
    _id : '',
    _rev : '',
    username : '',
    password : '',
    email : '',
    address : '',
    mobile : '',
  }

  ngOnInit(): void { console.log() }

  OnSubmit(){
    console.log(this.signup)
   this.sharedservice.add(this.signup).subscribe((data) =>{
     console.log(data);
     if(data.error){
      this.toastr.error(data.message);
     }
     else{
      this.toastr.success("Data store successful.!!");
       console.log(data)
     }
   });
}
}