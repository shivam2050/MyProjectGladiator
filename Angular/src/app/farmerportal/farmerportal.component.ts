import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmerportal',
  templateUrl: './farmerportal.component.html',
  styleUrls: ['./farmerportal.component.css']
})
export class FarmerportalComponent implements OnInit {

  email:string;
  constructor() { }

  ngOnInit(): void {
    this.email = (localStorage.getItem("loginEmail"));
  }

}
