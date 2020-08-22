import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-famrerroute',
  templateUrl: './famrerroute.component.html',
  styleUrls: ['./famrerroute.component.css']
})
export class FamrerrouteComponent implements OnInit {

  farmeremail;
  constructor(private router:Router) {
    this.farmeremail = (localStorage.getItem("loginEmail"));
   }

  ngOnInit(): void {
  }

  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/farmerlogin'])
  }

}
