import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

  ngOnInit(): void { console.log() }
 
  logoutFunction(){
  localStorage.clear();
  window.location.href="/home";
}
}
