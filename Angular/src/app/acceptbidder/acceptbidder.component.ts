import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule }from '@angular/common/http';

@Component({
  selector: 'app-acceptfarmer',
  templateUrl: './acceptbidder.component.html',
  styleUrls: ['./acceptbidder.component.css']
})
export class AcceptbidderComponent implements OnInit {

  bidder;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/AcceptBidder').subscribe( data => {
      this.bidder = data;
      }
    );
  }

  onApproved(value:any)
  {
    console.log(value);
    this.http.put('http://localhost:50107/api/AcceptBidder/1', new String(value)).subscribe(data =>{
      console.log(data);
    });
    this.http.put('http://localhost:50107/api/DocumentsBidder/1',new String(value)).subscribe(data =>{
      console.log(data);
      this.http.get('http://localhost:50107/api/AcceptBidder').subscribe( data => {
        this.bidder = data;
        // console.log(data);
        }
      );
    });
  }

  onDelete(value:any)
  {
    console.log(value);
    this.http.delete('http://localhost:50107/api/AcceptBidder?id='+value).subscribe(data =>{
      console.log(data);
    });
    this.http.delete('http://localhost:50107/api/DocumentsBidder?id='+value).subscribe(data =>{
      console.log(data);
      this.http.get('http://localhost:50107/api/AcceptBidder').subscribe( data => {
        this.bidder = data;
        // console.log(data);
        }
      );
    });
  }

}
