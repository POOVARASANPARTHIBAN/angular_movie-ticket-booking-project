import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  details : any = {
    username : '',
    password : '',
    email : '',
    address : '',
    mobile : '',
  }

  ngOnInit(): void { console.log(this.details) }

}
