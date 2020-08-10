import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule,Routes } from '@angular/router'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

var myRoutes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path:"home",component:HomeComponent},
  { path:"about-us",component:AboutUsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
