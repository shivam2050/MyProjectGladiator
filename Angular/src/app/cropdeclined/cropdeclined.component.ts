import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cropdeclined',
  templateUrl: './cropdeclined.component.html',
  styleUrls: ['./cropdeclined.component.css']
})
export class CropdeclinedComponent implements OnInit {

  email;
  result;
  constructor(private http:HttpClient) { 
    this.email = (localStorage.getItem("loginEmail"));
    this.http.get('http://localhost:50107/api/ViewCropDeclined?email=' + (this.email)).subscribe(data => {
      this.result = data;
    })
  }

  ngOnInit(): void {
  }

}
