import { Component, OnInit } from '@angular/core';
import { Feedback } from 'Models/feedback';
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
      let length = res.docs.length;
      console.log(res);
      for(let i=0;i<length;i++){
        this.data.push(res.docs[i]);
        console.log(this.data);
      }     
    });
  }
  public data :Feedback[] = [];

}
