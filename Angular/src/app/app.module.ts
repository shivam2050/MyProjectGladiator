import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule }  from '@angular/common/http';

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
import { FarmerRegisterService } from './service/FarmerRegisterService';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { BidderRegisterService } from './service/BidderRegisterService';
import { DocumentsfarmerComponent } from './documentsfarmer/documentsfarmer.component';
import { FarmerportalComponent } from './farmerportal/farmerportal.component';
import { SoldhistoryComponent } from './soldhistory/soldhistory.component';
import { SoldService } from './service/SoldService';
import { SellcropComponent } from './sellcrop/sellcrop.component';
import { DocumentsFarmerService } from './service/DocumentsService';
import { DocumentsbidderComponent } from './documentsbidder/documentsbidder.component';
import { DocumentsBidderService } from './service/DocumentsBidderService';

var myRoutes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path:"home", component:HomeComponent },
  { path:"about-us", component:AboutUsComponent },
  { path:"login", component:LoginComponent },
  { path:"farmerlogin", component:FarmerloginComponent },
  { path:"bidderlogin", component:BidderloginComponent },
  { path:"adminlogin", component:AdminloginComponent },
  { path:"farmerregistration", component:FarmerregistrationComponent },
  { path:"bidderregistration", component:BidderregistrationComponent },
  { path:"documentsfarmer", component:DocumentsfarmerComponent },
  { path:"farmerportal", component:FarmerportalComponent },
  { path:"soldhistory", component:SoldhistoryComponent },
  { path:"documentsbidder", component:DocumentsbidderComponent },
  { path:"sellcrop", component:SellcropComponent }
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
    AdminloginComponent,
    FarmerregistrationComponent,
    BidderregistrationComponent,
    DocumentsfarmerComponent,
    FarmerportalComponent,
    SoldhistoryComponent,
    SellcropComponent,
    DocumentsbidderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [FarmerRegisterService,BidderRegisterService,SoldService,DocumentsFarmerService,DocumentsBidderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
