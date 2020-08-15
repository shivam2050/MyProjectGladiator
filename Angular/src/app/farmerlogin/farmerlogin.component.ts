import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmerlogin/farmer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.css']
})
export class FarmerloginComponent implements OnInit {

  login:Farmer;
  farmerLogin : FormGroup;
  constructor() {
    this.login = new Farmer();
    this.farmerLogin = new FormGroup({
      userName : new FormControl(null,Validators.required),
      userPassword : new FormControl(null,Validators.required)
    });
   }

   public get userName()
   {
     return this.farmerLogin.get('userName');
   }

   public get userPassword()
   {
     return this.farmerLogin.get('userPassword');
   }

  ngOnInit(): void {
  }

  submit(){
    localStorage.setItem("loginEmail",(this.login.femail));
  }
}
