import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-farmermarket',
  templateUrl: './farmermarket.component.html',
  styleUrls: ['./farmermarket.component.css']
})
export class FarmermarketComponent implements OnInit {

  email;
  crop;
  bid;
  constructor(private http:HttpClient) { 
    this.email = (localStorage.getItem("loginEmail"));
  }
  

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/FarmerMarketCrop?email='+(this.email)).subscribe( data => {
      this.crop = data;
      console.log(this.crop);
      }
    );
    this.http.get('http://localhost:50107/api/FarmerMarketBid?email='+(this.email)).subscribe( data => {
      this.bid = data;
      console.log(this.crop);
      }
    );
  }

}
