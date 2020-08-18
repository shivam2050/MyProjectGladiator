import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewbidder',
  templateUrl: './viewbidder.component.html',
  styleUrls: ['./viewbidder.component.css']
})
export class ViewbidderComponent implements OnInit {

  bidder;
  constructor(private http:HttpClient) {

    this.http.get("http://localhost:50107/api/ViewBidder").subscribe( data => {
      this.bidder = data;
      console.log(this.bidder);
  }
    );
   }

  ngOnInit(): void {
  }

}
