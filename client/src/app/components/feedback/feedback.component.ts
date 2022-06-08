import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private sharedservice:SharedService, private toastr: ToastrService) { }
  feedback : any = {
    _id : '',
    username: localStorage.getItem("username"),
    email : localStorage.getItem("email"),
    message : '',
    
  }

  ngOnInit(): void { console.log(this.feedback) }
 
  onSubmit(){
    console.log(this.feedback);
    if(this.feedback.message == ""){
      this.toastr.error("Please Enter Feedback.!!");
    }else{
   this.sharedservice.addfeedback(this.feedback).subscribe((data) =>{
     console.log(data);
     this.toastr.success("Your Feedback Updated.!!");
   })
  }
  }
}
