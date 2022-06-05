import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';
import { Signup } from 'Models/signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedservice:SharedService, private route:Router) { }

  login: any = {
    email:'',
    password:''
  }
temp : any = {};
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
   }
  onSubmit(){
    if(this.login.email === "admin@gmail.com" && this.login.password === "admin"){
      localStorage.setItem("adminusername","Admin");
       localStorage.setItem("adminemail","admin@gmail.com");
       localStorage.setItem("adminpassword","admin");
       localStorage.setItem("adminaddress","Chennai");
       localStorage.setItem("adminmobile","9360846143");
      this.route.navigate(['/viewmovie']);
    }else{
     this.sharedservice.login(this.login).subscribe((res) =>{
     console.log("res",res);
     if(res.docs[0].email === this.login.email && res.docs[0].password === this.login.password){
      console.log(res.docs[0]);
      this.temp  = res.docs[0];
       localStorage.setItem("username",this.temp.username);
       localStorage.setItem("email",this.temp.email);
       localStorage.setItem("password",this.temp.password);
       localStorage.setItem("address",this.temp.address);
       localStorage.setItem("mobile",this.temp.mobile)
       localStorage.setItem("_id",this.temp._id)
       localStorage.setItem("_rev",this.temp._rev)
       this.route.navigate(['/userhome']);
      }else{
        alert("Invalid Email or Password");
      }  
   })
    }  
  } 
public data : Signup[]=[];

}
