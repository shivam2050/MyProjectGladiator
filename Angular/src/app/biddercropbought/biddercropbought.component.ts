import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biddercropbought',
  templateUrl: './biddercropbought.component.html',
  styleUrls: ['./biddercropbought.component.css']
})

export class BiddercropboughtComponent implements OnInit {

  email;
  crop
  CropId;
  constructor(private http:HttpClient,private router:Router) {
    this.email = (localStorage.getItem("loginEmail"));
   }

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/CropBought?email='+(this.email)).subscribe( data => {
      this.crop = data;
      console.log(this.crop);
      }
    );
  }

  onPayment(cropID)
  {
    localStorage.setItem("CropId",(cropID));
    this.router.navigate(['/transaction']);

  }

}
