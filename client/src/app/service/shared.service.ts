import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static addbooking(bookingdata: { currentdate: () => number; username: string | null; email: string | null; mobile: string | null; bookingdate: string | null; moviename: string | null; moviewatchers: string | null; totalseats: string | null; seatnames: string | null; totalcost: number; }) {
    throw new Error('Method not implemented.');
  }

  private readonly apiurl = 'http://localhost:8000/postuser';
  private readonly loginapi = 'http://localhost:8000/checkuser/';
  private readonly addmovieapi = 'http://localhost:8000/addmovie';
   private readonly addbookingapi = 'http://localhost:8000/addbooking';
  private readonly addtheaterapi = 'http://localhost:8000/addtheater';
   private readonly addfeedbackapi = 'http://localhost:8000/addfeedback';
   private readonly chooselocationapi = 'http://localhost:8000/chooselocation/';
   private readonly choosemovieapi = 'http://localhost:8000/choosemovie/';
   private readonly getmoviedetailsapi = 'http://localhost:8000/getmoviedetails/';
   private readonly getallmovieapi = 'http://localhost:8000/getallmovie';
   private readonly getfeedbackapi = 'http://localhost:8000/getfeedback';
   private readonly getallBookingapi = 'http://localhost:8000/getallbooking';
   private readonly getmyBookingapi = 'http://localhost:8000/getmybooking/';
   private readonly deletemovieapi = 'http://localhost:8000/deletemovie/';
   private readonly getdataapi = 'http://localhost:8000/getdata/';


  constructor(private http : HttpClient) { }

  add(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.apiurl , data);
  }
  login(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.loginapi+data.email);
  }
  getallmovie(){
    return this.http.get<any>(this.getallmovieapi);
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
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.chooselocationapi+data.location);
  }
  getmoviedetails(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.getmoviedetailsapi+data.moviename);
  }
   getfeedback(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.getfeedbackapi);
  }
  deleteMovie(id:any,_rev:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.deletemovieapi+id+'/'+_rev);
  }
  choosemovie(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.choosemovieapi+data.theatername);
  }
  
  addmovie(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.addmovieapi , data);
  }
   addbooking(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.addbookingapi , data);
  }
   addtheater(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.addtheaterapi , data);
  }
  addfeedback(data:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.addfeedbackapi , data);
  }
  
}
