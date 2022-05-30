import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor() { }

  id:any;
  showPassword: boolean = false;

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }

  details : any = {
    _id : '',
    _rev : '',
    username : '',
    password : '',
    email : '',
    address : '',
    mobile : '',
  }

  ngOnInit(): void {
    this.details.username = localStorage.getItem("username")
    this.details.password = localStorage.getItem("password")
    this.details.email = localStorage.getItem("email")
    this.details.address = localStorage.getItem("address")
    this.details.mobile = localStorage.getItem("mobile")
  }

}
