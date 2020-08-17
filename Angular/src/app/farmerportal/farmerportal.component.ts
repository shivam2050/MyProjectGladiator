import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerportal',
  templateUrl: './farmerportal.component.html',
  styleUrls: ['./farmerportal.component.css']
})
export class FarmerportalComponent implements OnInit {

  email:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.email = (localStorage.getItem("loginEmail"));
  }

  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/farmerlogin'])
  }

}
