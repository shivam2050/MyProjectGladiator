import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  idLoggedIn = false; 
  result;
  constructor() { 
    this.result=localStorage.getItem("loginEmail");

    if(localStorage.getItem("loginAdminEmail") !== null || localStorage.getItem("loginEmail") !== null || localStorage.getItem("loginBidderEmail") !== null)
  {
    console.log( this.idLoggedIn);
    this.idLoggedIn =true;
  } 
  console.log( this.idLoggedIn);
  }

  ngOnInit(): void {
    
  }
  
  login(){
  
  }

  logout(){
    localStorage.clear();
    this.idLoggedIn=false;
    this.result="";
  }
  

}
