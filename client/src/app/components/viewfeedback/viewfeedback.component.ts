import { Component, OnInit } from '@angular/core';
import { feedback } from 'Models/feedback';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {



  constructor(private sharedservice : SharedService) { }
  
  ngOnInit(): void {
    this.sharedservice.getfeedback().subscribe((res) =>{
      var length = res.docs.length;
      console.log(res);
      for(var i=0;i<length;i++){
        this.data.push(res.docs[i]);
        console.log(this.data);
      }     
    });
  }
  public data : feedback[] = [];

}
