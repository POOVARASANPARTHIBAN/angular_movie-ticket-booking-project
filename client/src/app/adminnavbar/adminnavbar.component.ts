import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {


  ngOnInit(): void { console.log() }
 logoutFunction(){
  localStorage.clear();
  window.location.href="/home";
}
}
