import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidderroute',
  templateUrl: './bidderroute.component.html',
  styleUrls: ['./bidderroute.component.css']
})
export class BidderrouteComponent implements OnInit {

  bidderemail;
  constructor(private router:Router) {
    this.bidderemail = (localStorage.getItem("loginBidderEmail"));
   }

  ngOnInit(): void {
  }

  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/bidderlogin'])
  }
}
