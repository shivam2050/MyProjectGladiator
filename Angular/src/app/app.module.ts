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
import { CropSellService } from './service/sellCropService';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { MarketValBidComponent } from './market-val-bid/market-val-bid.component';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';
import { AdminMarketAddComponent } from './admin-market-add/admin-market-add.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewfarmerComponent } from './viewfarmer/viewfarmer.component';
import { ViewbidderComponent } from './viewbidder/viewbidder.component';
import { AcceptfarmerComponent } from './acceptfarmer/acceptfarmer.component';
import { AcceptbidderComponent } from './acceptbidder/acceptbidder.component';
import { CropapprovalComponent } from './cropapproval/cropapproval.component';
import { LivebidComponent } from './livebid/livebid.component';
import { AdminbidapprovalComponent } from './adminbidapproval/adminbidapproval.component';
import { FarmermarketComponent } from './farmermarket/farmermarket.component';
import { BiddercropboughtComponent } from './biddercropbought/biddercropbought.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BidderhistoryComponent } from './bidderhistory/bidderhistory.component';
import { CropdeclinedComponent } from './cropdeclined/cropdeclined.component';
import { AuthGuard } from './service/farmerauth';
import { AdminAuthGuard } from './service/adminauth';
import { BidderAuthGuard } from './service/bidderauth';
import { AdminrouteComponent } from './adminroute/adminroute.component';
import { FamrerrouteComponent } from './famrerroute/famrerroute.component';
import { BidderrouteComponent } from './bidderroute/bidderroute.component';
import { DocumentsBidderAuthGuard } from './service/documentsbidderauth';
import { DocumentsFarmerAuthGuard } from './service/documentsfarmerauth';

var myRoutes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path:"home", component:HomeComponent },
  { path:"about-us", component:AboutUsComponent },
  { path:"login", component:LoginComponent },
  { path:"contactpage", component:ContactpageComponent },
  { path:"farmerlogin", component:FarmerloginComponent },
  { path:"bidderlogin", component:BidderloginComponent },
  { path:"adminlogin", component:AdminloginComponent },
  { path:"farmerregistration", component:FarmerregistrationComponent },
  { path:"bidderregistration", component:BidderregistrationComponent },
  { path:"documentsfarmer", component:DocumentsfarmerComponent, canActivate:[DocumentsFarmerAuthGuard] },
  { path:"farmerportal", component:FarmerportalComponent, canActivate:[AuthGuard]},
  { path:"soldhistory", component:SoldhistoryComponent, canActivate:[AuthGuard] },
  { path:"documentsbidder", component:DocumentsbidderComponent, canActivate:[DocumentsBidderAuthGuard] },
  { path:"sellcrop", component:SellcropComponent, canActivate:[AuthGuard] },
  { path:"market-val-bid", component:MarketValBidComponent },
  { path:"bidder-home", component:BidderHomeComponent, canActivate:[BidderAuthGuard] },
  { path:"admin-market-add", component:AdminMarketAddComponent, canActivate:[AdminAuthGuard] },
  { path:"adminhome", component:AdminhomeComponent, canActivate:[AdminAuthGuard] },
  { path:"viewfarmer", component:ViewfarmerComponent, canActivate:[AdminAuthGuard] },
  { path:"viewbidder", component:ViewbidderComponent, canActivate:[AdminAuthGuard] },
  { path:"acceptfarmer", component:AcceptfarmerComponent, canActivate:[AdminAuthGuard] },
  { path:"acceptbidder", component:AcceptbidderComponent, canActivate:[AdminAuthGuard] },
  { path:"cropapproval", component:CropapprovalComponent, canActivate:[AdminAuthGuard] },
  { path:"livebid", component:LivebidComponent, canActivate:[BidderAuthGuard] },
  { path:"adminbidapproval", component:AdminbidapprovalComponent, canActivate:[AdminAuthGuard] },
  { path:"farmermarket", component:FarmermarketComponent, canActivate:[AuthGuard] },
  { path:"biddercropbought", component:BiddercropboughtComponent, canActivate:[BidderAuthGuard] },
  { path:"transaction", component:TransactionComponent, canActivate:[BidderAuthGuard] },
  { path:"bidderhistory", component:BidderhistoryComponent, canActivate:[BidderAuthGuard] },
  { path:"cropdeclined", component:CropdeclinedComponent, canActivate:[AuthGuard] }
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
    DocumentsbidderComponent,
    AdminportalComponent,
    MarketValBidComponent,
    BidderHomeComponent,
    AdminMarketAddComponent,
    ContactpageComponent,
    AdminhomeComponent,
    ViewfarmerComponent,
    ViewbidderComponent,
    AcceptfarmerComponent,
    AcceptbidderComponent,
    CropapprovalComponent,
    LivebidComponent,
    AdminbidapprovalComponent,
    FarmermarketComponent,
    BiddercropboughtComponent,
    TransactionComponent,
    BidderhistoryComponent,
    CropdeclinedComponent,
    AdminrouteComponent,
    FamrerrouteComponent,
    BidderrouteComponent
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
  providers: [FarmerRegisterService,BidderRegisterService,SoldService,DocumentsFarmerService,DocumentsBidderService,CropSellService,AuthGuard,BidderAuthGuard,AdminAuthGuard,DocumentsBidderAuthGuard,DocumentsFarmerAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
