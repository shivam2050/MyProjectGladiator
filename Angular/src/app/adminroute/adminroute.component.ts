import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminroute',
  templateUrl: './adminroute.component.html',
  styleUrls: ['./adminroute.component.css']
})
export class AdminrouteComponent implements OnInit {

  adminemail;
  constructor(private router:Router) {
    this.adminemail = (localStorage.getItem("loginAdminEmail"));
   }

  ngOnInit(): void {
  }

  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/adminlogin'])
  }

}
