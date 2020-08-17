import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adminbidapproval',
  templateUrl: './adminbidapproval.component.html',
  styleUrls: ['./adminbidapproval.component.css']
})
export class AdminbidapprovalComponent implements OnInit {

  bidData;
  resultData;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/AdminBidApproval').subscribe( data => {
      this.bidData = data;
      }
    );
  }

  onApprove(id,value,email:any)
  {
    console.log(value,email);
    this.http.put('http://localhost:50107/api/UpdateBidStatus?id=' + id, new String(email)).subscribe( data => {
      this.resultData = data;
      }
    );  
    this.http.put('http://localhost:50107/api/UpdateCropSell?id=' + value, new String(email)).subscribe( data => {
      this.resultData = data;
      this.http.get('http://localhost:50107/api/AdminBidApproval').subscribe( data => {
        this.bidData = data;
        }
      );  
      }
    );
  }

}
