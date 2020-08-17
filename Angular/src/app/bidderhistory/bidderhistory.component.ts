import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bidderhistory',
  templateUrl: './bidderhistory.component.html',
  styleUrls: ['./bidderhistory.component.css']
})
export class BidderhistoryComponent implements OnInit {

  email;
  crop;
  trans;
  constructor(private http:HttpClient) {

    this.email = (localStorage.getItem("loginEmail"));
    this.http.get('http://localhost:50107/api/TransDetails?email='+(this.email)).subscribe( data => {
      this.trans = data;
      console.log(this.crop);
      }
    );
    this.http.get('http://localhost:50107/api/BidderHistory?email='+(this.email)).subscribe( data => {
      this.crop = data;
      console.log(this.trans);
      }
    );
   }

  ngOnInit(): void {
  }

}
