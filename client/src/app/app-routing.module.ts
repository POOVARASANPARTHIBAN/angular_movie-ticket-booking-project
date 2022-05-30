import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
import { AdminhomeComponent } from './components/adminhome/adminhome/adminhome.component';
import { AdminprofileComponent } from './components/adminhome/adminhome/adminprofile/adminprofile.component';
import { MovieuploadComponent } from './components/adminhome/adminhome/movieupload/movieupload.component';
import { RetrievebookingComponent } from './components/adminhome/adminhome/retrievebooking/retrievebooking.component';
import { TheateruploadComponent } from './components/adminhome/adminhome/theaterupload/theaterupload.component';
import { ViewmovieComponent } from './components/adminhome/adminhome/viewmovie/viewmovie.component';
import { ChooselocationComponent } from './components/chooselocation/chooselocation.component';
import { ChoosemovieComponent } from './components/choosemovie/choosemovie.component';
import { ChoosetheaterComponent } from './components/choosetheater/choosetheater.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { SelectbookingdateComponent } from './components/selectbookingdate/selectbookingdate.component';
import { SelectseatComponent } from './components/selectseat/selectseat.component';
import { SignupComponent } from './components/signup/signup.component';
import { MybookingsComponent } from './components/userhomepage/mybookings/mybookings.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import { UserprofileComponent } from './components/userhomepage/userprofile/userprofile.component';
import { ViewfeedbackComponent } from './components/viewfeedback/viewfeedback.component';

const routes: Routes = [
  {path:'bookingsummary',component:BookingsummaryComponent},
  {path:'mybookings',component:MybookingsComponent},
  {path:'viewfeedback',component:ViewfeedbackComponent},
  {path:'retrievebooking',component:RetrievebookingComponent},
  {path:'chooselocation',component:ChooselocationComponent},
  {path:'viewmovie',component:ViewmovieComponent},
  {path:'seatselection',component:SeatselectionComponent},
  {path:'selectdate',component:SelectbookingdateComponent},
  {path:'choosemovie',component:ChoosemovieComponent},
  {path:'choosetheater',component:ChoosetheaterComponent},
  {path:'adminprofile',component:AdminprofileComponent},
  { path:'userprofile',component:UserprofileComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'userhome',component:UserhomepageComponent},
  { path:'adminhome',component:AdminhomeComponent},
  {path:'theaterupload',component:TheateruploadComponent},
  { path:'movieupload',component:MovieuploadComponent},
  { path:'login',component:LoginComponent },
  { path:'signup',component:SignupComponent },
  { path:'home',component:HomeComponent },
  { path:'',component:HomeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
