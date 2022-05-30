import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';
import { signup } from 'Models/signup';

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

  ngOnInit(): void {

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
        // console.log(this.login);
     this.sharedservice.login(this.login).subscribe((res) =>{
      
      //console.log(res.docs[0].email);
      if(res.docs[0].email === this.login.email && res.docs[0].password === this.login.password){
        localStorage.setItem("username",res.docs[0].username);
       localStorage.setItem("email",res.docs[0].email);
       localStorage.setItem("password",res.docs[0].password);
       localStorage.setItem("address",res.docs[0].address);
       localStorage.setItem("mobile",res.docs[0].mobile);
       this.route.navigate(['/userhome']);
      }else{
        alert("Invalid Email or Password");
      }
      
     //alert("Account Created Successfully");
   })
    }
   
  } 
public data : signup[]=[];

}
