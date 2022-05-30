import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sharedservice : SharedService) { }

  signup : any = {
    _id : '',
    _rev : '',
    username : '',
    password : '',
    email : '',
    address : '',
    mobile : '',
  }

  ngOnInit(): void { 
  }
  

  OnSubmit(){
    console.log(this.signup)
   this.sharedservice.add(this.signup).subscribe((data) =>{
     console.log(data);
     alert("Account Created Successfully");
   })
  }
  
}
