import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  alert;
  email;
  cropId;
  result;
  trans;
  transaction:Transaction;
  constructor(private router:Router, private http:HttpClient) { 
    this.alert = false;
    this.email = (localStorage.getItem("loginEmail"));
    this.cropId = (localStorage.getItem("CropId"));
    this.transaction = new Transaction();
  }

  ngOnInit(): void {
    this.transaction.CropId = this.cropId;
    this.transaction.Bemail = this.email;
    this.http.post('http://localhost:50107/api/PendingTransaction',this.transaction).subscribe(data=>{
      this.result = data;
  });
  }

  goHome()
  {
    this.router.navigate(['/bidder-home']);
  }
  
  makePayment(bidId,bidPrice){
    this.http.put('http://localhost:50107/api/BuyCrop?id=' + bidId, bidPrice).subscribe( data => {
      this.trans = data;
    }
    );
    this.http.put('http://localhost:50107/api/Trans?id=' + bidId, new String(bidPrice)).subscribe( data => {
      this.trans = data;
    }
    );
    this.http.put('http://localhost:50107/api/SetStatusCrop?id=' + this.cropId, new String(bidPrice)).subscribe( data => {
      this.trans = data;
      this.http.post('http://localhost:50107/api/PendingTransaction',this.transaction).subscribe(data=>{
        this.result = data;
        this.alert=true;
        localStorage.removeItem('CropId');
  });
      }
    );
}

  onClose(){
    this.alert = false;
  }
}
