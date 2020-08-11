import { Component, OnInit } from '@angular/core';
import { Bidder } from '../bidderlogin/bidder';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bidderlogin',
  templateUrl: './bidderlogin.component.html',
  styleUrls: ['./bidderlogin.component.css']
})
export class BidderloginComponent implements OnInit {

  login:Bidder;
  bidderLogin : FormGroup;

  constructor() {
    this.login = new Bidder();
    this.bidderLogin = new FormGroup({
      userName : new FormControl(null,Validators.required),
      userPassword : new FormControl(null,Validators.required)
    });
   }

   public get userName()
   {
     return this.bidderLogin.get('userName');
   }

   public get userPassword()
   {
     return this.bidderLogin.get('userPassword');
   }

  ngOnInit(): void {
  }

}
