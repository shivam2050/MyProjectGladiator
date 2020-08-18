import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidder-home',
  templateUrl: './bidder-home.component.html',
  styleUrls: ['./bidder-home.component.css']
})
export class BidderHomeComponent implements OnInit {

  email;
  constructor(private router:Router) {  }

  ngOnInit(): void {
    this.email = (localStorage.getItem("loginBidderEmail"));
  }

  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/bidderlogin'])
  }
}
