import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';
import { CouchdbService } from 'src/app/service/couchdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submit:any= false;

 

  constructor(private sharedservice : SharedService,private toastr: ToastrService, private api:CouchdbService, private router:Router) { }
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
     }
   });
   this.router.navigate(['/home']);
}
signupValidation(){
  const emailValue = this.signup['email']
  const email = {
    'email':emailValue,
    'type':'users'
  } 
  this.api.invalidSignUp(email).subscribe((response:any)=>{
    console.log(response)
    if(response.docs.length >=1){
    this.toastr.error("Email Already Exist..!");
    this.submit =false;
  }
  else{
    this.submit =true
  }
  },err=>{
    console.error(err)
  })
}

}