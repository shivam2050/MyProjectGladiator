import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RouteComponent } from './route/route.component';
import { FooterComponent } from './footer/footer.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

var myRoutes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path:"home", component:HomeComponent },
  { path:"about-us", component:AboutUsComponent },
  { path:"login", component:LoginComponent },
  { path:"farmerlogin", component:FarmerloginComponent },
  { path:"bidderlogin", component:BidderloginComponent },
  { path:"adminlogin", component:AdminloginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    RouteComponent,
    FooterComponent,
    FarmerloginComponent,
    BidderloginComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
