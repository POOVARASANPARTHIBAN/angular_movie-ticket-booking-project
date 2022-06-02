import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { WindowRefService } from 'src/app/window-ref.service';

declare var $: any;

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit {
  
  constructor(private sharedservice:SharedService,private winRef: WindowRefService,) { }
  value = false;
 allSeatarray:any = [];
  bookingdata:any = {
    currentdate: Date.now,
    username: localStorage.getItem("username"),
    email:  localStorage.getItem("email"),
    mobile: localStorage.getItem("mobile"),
    bookingdate: localStorage.getItem("bookingdate"),
    moviename: localStorage.getItem("moviename"),
    moviewatchers: localStorage.getItem("moviewatchers"),
    totalseats: localStorage.getItem("totalseats"),
    seatnames: localStorage.getItem("seatnames"),
    totalcost: Number(localStorage.getItem("ticketcost")) * Number(localStorage.getItem("totalseats"))
  }
  disabledatas: any = {
    theatername:localStorage.getItem("theatername"),
    moviename:localStorage.getItem("moviename"),
    bookingdate:localStorage.getItem("bookingdate"),
  }
  datalist:any = []
  ngOnInit(): void {
    $(".seatStructure *").prop("disabled", true);
    $(".displayerBoxes *").prop("disabled", true);
    $("#pay-btn").hide();
    $("#con-select").hide();
    $(".alert-message").hide();
    
  }

  selectSeat(username:String,totalseats:String){
     if (username === "" || totalseats === "") {
      alert("please enter name and ceats");
    } else {
      $(".inputForm *").prop("disabled", true);
      $(".seatStructure *").prop("disabled", false);
      $(".title").hide();
      $(".sub-title").hide();
      $(".inputForm *").hide();
      $("#con-select").show();
      $(".alert-message").show();
       this.sharedservice.getdata(this.disabledatas).subscribe((res) =>{
      var length = res.docs.length;
      this.datalist = []
      for(var i=0;i<length;i++){
       var bookedseats = res.docs[i].seatnames;
        var array = bookedseats.split(",");
        this.datalist.push(res.docs[i].seatnames);
        for (var i = 0; i < array.length; i++) {

          $("#" + array[i]).attr("disabled", true);
        }
      }      
     
    });
    }

   


  }

  confirmSelection(username:string,totalseats:string){
    if ($("input:checked").length == totalseats) {
      $(".seatStructure *").prop("disabled", true);
      $("#pay-btn").prop("disabled", false);
      $("#con-select").hide();
      $("#pay-btn").show();
      var allNameVals = [];
      var allNumberVals = [];
      var allSeatsVals = [];

      //Storing in Array
      allNameVals.push(username);
      allNumberVals.push(totalseats);
      
      for(var  i=0;i<$("#seatsBlock :checked").length;i++){
        allSeatsVals.push($("#seatsBlock :checked")[i].value);
        this.allSeatarray.push($("#seatsBlock :checked")[i].value);
      }
      console.log(this.allSeatarray);
      $("#nameDisplay").val(allNameVals);
      $("#NumberDisplay").val(allNumberVals);
      $("#seatsDisplay").val(allSeatsVals);
      localStorage.setItem("moviewatchers",username);
      localStorage.setItem("totalseats",totalseats);
      localStorage.setItem("seatnames",this.allSeatarray.toString());;
    } else {
      alert("Please select " + totalseats + " seats");
    }
  }

  


bookingFunction(){
  
  var _ticketcost = localStorage.getItem("ticketcost");
  var ticketcost:number = Number( _ticketcost);
  var _totalseats = localStorage.getItem("totalseats");
  var totalseats:number = Number( _totalseats);
  var totalamount =  ticketcost*totalseats;
   var options = {
        key: "rzp_test_DwNI99Q3vO7acV",
        key_secret:"mJ3EQaRyeFzAeZMwMnIWE61F",
        amount:  totalamount*100,
        currency:"INR",
        name: localStorage.getItem("moviename"),
        description:"payment for ticket",
        handler: function(){
          window.location.href="/bookingsummary";
        },
        prefill: {
          name: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
          contact: localStorage.getItem("mobile")
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay =  new this.winRef.nativeWindow.Razorpay(options);
      pay.open();
    }
}

