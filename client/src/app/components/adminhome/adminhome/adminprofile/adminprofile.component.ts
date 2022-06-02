import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private sharedservice : SharedService) { }

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
    this.details.username = localStorage.getItem("adminusername")
    this.details.password = localStorage.getItem("adminpassword")
    this.details.email = localStorage.getItem("adminemail")
    this.details.address = localStorage.getItem("adminaddress")
    this.details.mobile = localStorage.getItem("adminmobile")

  }

}
