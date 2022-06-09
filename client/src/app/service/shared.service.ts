import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly apiurl = 'http://localhost:8000/postuser';
  private readonly loginapi = 'http://localhost:8000/checkuser/';
  private readonly addmovieapi = 'http://localhost:8000/addmovie';
   private readonly addbookingapi = 'http://localhost:8000/addbooking/';
  private readonly addtheaterapi = 'http://localhost:8000/addtheater';
  private readonly addlocationapi = 'http://localhost:8000/addlocation';
   private readonly addfeedbackapi = 'http://localhost:8000/addfeedback';
   private readonly chooselocationapi = 'http://localhost:8000/chooselocation/';
   private readonly choosemovieapi = 'http://localhost:8000/choosemovie/';
   private readonly getmoviedetailsapi = 'http://localhost:8000/getmoviedetails/';
   private readonly getallmovieapi = 'http://localhost:8000/getallmovie';
   private readonly getalllocationapi = 'http://localhost:8000/getalllocation';
   private readonly getalltheaterapi = 'http://localhost:8000/getalltheater';
   private readonly getfeedbackapi = 'http://localhost:8000/getfeedback';
   private readonly getallBookingapi = 'http://localhost:8000/getallbooking';
   private readonly getmyBookingapi = 'http://localhost:8000/getmybooking/';
   private readonly deletemovieapi = 'http://localhost:8000/deletemovie/';
   private readonly getdataapi = 'http://localhost:8000/getdata/';


  constructor(private http : HttpClient) { }

  add(data:any){
    return this.http.post<any>(this.apiurl , data);
  }
  login(data:any){
    return this.http.get<any>(this.loginapi+data.email);
  }
  getallmovie(){
    return this.http.get<any>(this.getallmovieapi);
  }
  getalltheater(){
    return this.http.get<any>(this.getalltheaterapi);
  }
  getalllocation(){
    return this.http.get<any>(this.getalllocationapi);
  }
  getmyBooking(data:any){
    return this.http.get<any>(this.getmyBookingapi+data.email);
  }
  getdata(data:any){
    return this.http.get<any>(this.getdataapi+data.theatername+'/'+data.moviename+'/'+data.bookingdate);
  }
  getallBooking(){
    return this.http.get<any>(this.getallBookingapi);
  }
  chooselocation(data:any){
    return this.http.get<any>(this.chooselocationapi+data.locationId);
  }
  getmoviedetails(data:any){
    return this.http.get<any>(this.getmoviedetailsapi+data.moviename);
  }
   getfeedback(){
    return this.http.get<any>(this.getfeedbackapi);
  }
  deleteMovie(id:any,_rev:any){
    return this.http.delete<any>(this.deletemovieapi+id+'/'+_rev);
  }
  choosemovie(data:any){
    return this.http.get<any>(this.choosemovieapi+data.theaterId);
  }
  
  addmovie(data:any){
    return this.http.post<any>(this.addmovieapi , data);
  }
   addbooking(data:any){

    return this.http.post<any>( this.addbookingapi, data);
  }
   addtheater(data:any){
    return this.http.post<any>(this.addtheaterapi , data);
  }
  addfeedback(data:any){
    return this.http.post<any>(this.addfeedbackapi , data);
  }
  addlocation(data:any){
    return this.http.post<any>(this.addlocationapi , data);
  }
  
}
  

