import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { WindowRefService } from 'src/app/window-ref.service';
import { ToastrService } from 'ngx-toastr';
declare let $: any;
@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit {
  
  constructor(private sharedservice:SharedService,private winRef: WindowRefService, private toastr: ToastrService) { }
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

  selectSeat(username:string,totalseats:string){
     if (username === "" || totalseats === "") {
      this.toastr.error("Please Enter Name and How many Seats.!!");
    } else {
      $(".inputForm *").prop("disabled", true);
      $(".seatStructure *").prop("disabled", false);
      $(".title").hide();
      $(".sub-title").hide();
      $(".inputForm *").hide();
      $("#con-select").show();
      $(".alert-message").show();
       this.sharedservice.getdata(this.disabledatas).subscribe((res) =>{
      let length = res.docs.length;
      this.datalist = []
      for(let i=0;i<length;i++){
       let bookedseats = res.docs[i].seatnames;
        let array = bookedseats.split(",");
        this.datalist.push(res.docs[i].seatnames);  

      for (const element of array) {
        $("#" + element).attr("disabled", true);
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
      let allNameVals = [];
      let allNumberVals = [];
      let allSeatsVals: any[] = [];

      allNameVals.push(username);
      allNumberVals.push(totalseats);
      console.log($("#seatsBlock :checked"))
      console.log($("#seatsBlock :checked").length)

      $.each($("#seatsBlock :checked"), (index: any, item: any) => {
        console.log(index,item)
        allSeatsVals.push(item.value);
        this.allSeatarray.push(item.value);
      });
      console.log(this.allSeatarray);
      $("#nameDisplay").val(allNameVals);
      $("#NumberDisplay").val(allNumberVals);
      $("#seatsDisplay").val(allSeatsVals);
      localStorage.setItem("moviewatchers",username);
      localStorage.setItem("totalseats",totalseats);
      localStorage.setItem("seatnames",this.allSeatarray.toString());
    } else {
      this.toastr.error(" Please Select " + totalseats + " Seats ");

    }
  }
bookingFunction(){
  let _ticketcost = localStorage.getItem("ticketcost");
  let ticketcost:number = Number( _ticketcost);
  let _totalseats = localStorage.getItem("totalseats");
  let totalseats:number = Number( _totalseats);
  let totalamount =  ticketcost*totalseats;
   let options = {
        key: "rzp_test_2lG64jwttsvf1F",
        key_secret:"TyajGDOFTlkegnlmdJkpYo6X",
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
      let pay =  new this.winRef.nativeWindow.Razorpay(options);
      pay.open();
    }
}
