import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS,} from '@angular/common/http';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminhomeComponent } from './components/adminhome/adminhome/adminhome.component';
import { MovieuploadComponent } from './components/adminhome/adminhome/movieupload/movieupload.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { TheateruploadComponent } from './components/adminhome/adminhome/theaterupload/theaterupload.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AdminprofileComponent } from './components/adminhome/adminhome/adminprofile/adminprofile.component';
import { UserprofileComponent } from './components/userhomepage/userprofile/userprofile.component';
import { ChooselocationComponent } from './components/chooselocation/chooselocation.component';
import { ViewfeedbackComponent } from './components/viewfeedback/viewfeedback.component';
import { ChoosetheaterComponent } from './components/choosetheater/choosetheater.component';
import { ChoosemovieComponent } from './components/choosemovie/choosemovie.component';
import { SelectbookingdateComponent } from './components/selectbookingdate/selectbookingdate.component';
import { SelectseatComponent } from './components/selectseat/selectseat.component';
import { ViewmovieComponent } from './components/adminhome/adminhome/viewmovie/viewmovie.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
import { RetrievebookingComponent } from './components/adminhome/adminhome/retrievebooking/retrievebooking.component';
import { MybookingsComponent } from './components/userhomepage/mybookings/mybookings.component';
import { HttpCallInterceptor } from './service/interceptors.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationuploadComponent } from './components/adminhome/adminhome/locationupload/locationupload.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    UserhomepageComponent,
    AdminnavbarComponent,
    AdminhomeComponent,
    MovieuploadComponent,
    UsernavbarComponent,
    TheateruploadComponent,
    FeedbackComponent,
    AdminprofileComponent,
    UserprofileComponent,
    ChooselocationComponent,
    ViewfeedbackComponent,
    ChoosetheaterComponent,
    ChoosemovieComponent,
    SelectbookingdateComponent,
    SelectseatComponent,
    ViewmovieComponent,
    SeatselectionComponent,
    BookingsummaryComponent,
    RetrievebookingComponent,
    MybookingsComponent,
    LocationuploadComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
