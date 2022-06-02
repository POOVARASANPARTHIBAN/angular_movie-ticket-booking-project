import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private sharedservice:SharedService) { }
  feedback : any = {
    _id : '',
    username: localStorage.getItem("username"),
    email : localStorage.getItem("email"),
    message : '',
    
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
   }
 
  onSubmit(){
    console.log(this.feedback);
    if(this.feedback.message == ""){
      alert("please enter feedback");
    }else{
   this.sharedservice.addfeedback(this.feedback).subscribe((data) =>{
     console.log(data);
     alert("Feedback Uploaded Successfully!!");
   })
  }
  }
}
