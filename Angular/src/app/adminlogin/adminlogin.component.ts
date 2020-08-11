import { Component, OnInit } from '@angular/core';
import { Admin } from '../adminlogin/admin'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  login:Admin;
  adminLogin : FormGroup;

  constructor() {
    this.login = new Admin();
    this.adminLogin = new FormGroup({
      userName : new FormControl(null,Validators.required),
      userPassword : new FormControl(null,Validators.required)
    });
   }

   public get userName()
   {
     return this.adminLogin.get('userName');
   }

   public get userPassword()
   {
     return this.adminLogin.get('userPassword');
   }

  ngOnInit(): void {
  }

}
