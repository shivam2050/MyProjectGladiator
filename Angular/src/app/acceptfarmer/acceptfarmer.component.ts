import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule }from '@angular/common/http';

@Component({
  selector: 'app-acceptfarmer',
  templateUrl: './acceptfarmer.component.html',
  styleUrls: ['./acceptfarmer.component.css']
})
export class AcceptfarmerComponent implements OnInit {

  farmer;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/AcceptFarmer').subscribe( data => {
      this.farmer = data;
      }
    );
  }

  onApproved(value:any)
  {
    console.log(value);
    this.http.put('http://localhost:50107/api/AcceptFarmer/1', new String(value)).subscribe(data =>{
      console.log(data);
    });
    this.http.put('http://localhost:50107/api/Documents/1',new String(value)).subscribe(data =>{
      console.log(data);
    });
    this.http.get('http://localhost:50107/api/AcceptFarmer').subscribe( data => {
      this.farmer = data;
      // console.log(data);
      }
    );
  }

  onDelete(value:any)
  {
    console.log(value);
    this.http.delete('http://localhost:50107/api/AcceptFarmer?id='+value).subscribe(data =>{
      console.log(data);
    });
    this.http.delete('http://localhost:50107/api/Documents?id='+value).subscribe(data =>{
      console.log(data);
    });
    this.http.get('http://localhost:50107/api/AcceptFarmer').subscribe( data => {
      this.farmer = data;
      // console.log(data);
      }
    );
  }

}
