import { Component, OnInit } from '@angular/core';
import { Bidder } from '../bidderlogin/bidder';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bidderlogin',
  templateUrl: './bidderlogin.component.html',
  styleUrls: ['./bidderlogin.component.css']
})
export class BidderloginComponent implements OnInit {

  login:Bidder;
  bidderLogin : FormGroup;
  result;
  alert;
  constructor(private router:Router,private http:HttpClient) {
    this.alert = false;
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

  submit(){
    console.log(this.login);
    this.http.post('http://localhost:50107/api/BidderLogin',this.login).subscribe(data=>{
      this.result = data;
      console.log(this.result);
      if(this.result.length !==0)
      {
        if(this.result[0].RegStatus != 0)
        {
          this.router.navigate(['/bidder-home'])
          localStorage.setItem("loginBidderEmail",(this.login.bemail));
        }
        else{
          this.alert = true;
          //this.router.navigate(['/home'])
        }
      }
    })
  }

  onClose()
  {
    this.alert = false;
  }

}
