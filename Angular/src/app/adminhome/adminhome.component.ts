import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  email:string;
  constructor(private router:Router) {
    this.email = (localStorage.getItem("loginAdminEmail"));
   }

  ngOnInit(): void {
  }

  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/adminlogin'])
  }

}
