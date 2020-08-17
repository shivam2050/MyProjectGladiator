import { Component, OnInit } from '@angular/core';
import { SoldService } from '../service/SoldService';
import { Sold } from '../model/sold';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-soldhistory',
  templateUrl: './soldhistory.component.html',
  styleUrls: ['./soldhistory.component.css']
})
export class SoldhistoryComponent implements OnInit {

  email:string;
  sold;
  count:number;
  constructor(private solSer:SoldService, private http:HttpClient, private route:Router) {
    this.count = 0;
    this.email = (localStorage.getItem("loginEmail"));
    this.http.get('http://localhost:50107/api/FarmerSoldHistory?email='+(this.email)).subscribe( data => {
      this.sold = data;
      console.log(this.sold);
      }
    );
   }

  ngOnInit(): void {
    //this.email = (localStorage.getItem("loginEmail"));

    // this.solSer.getSoldCrop(this.email).subscribe((data) => {
    //   this.sold = data;
    // })
  }

  onLogout()
  {
    localStorage.clear();
    this.route.navigate(['/farmerlogin']);
  }
}
