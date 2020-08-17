import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmerlogin/farmer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.css']
})
export class FarmerloginComponent implements OnInit {

  login:Farmer;
  farmerLogin : FormGroup;
  result;
  alert;
  constructor(private router:Router,private http:HttpClient) {
    this.alert = false;
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
    console.log(this.login);
    this.http.post('http://localhost:50107/api/FarmerLogin',this.login).subscribe(data=>{
      this.result = data;
      console.log(this.result);
      if(this.result.length !==0)
      {
        if(this.result[0].RegStatus != 0)
        {
          this.router.navigate(['/farmerportal'])
          localStorage.setItem("loginEmail",(this.login.femail));
        }
        else{
          this.alert=true;
          // this.router.navigate(['/home'])
        }
      }
    })   
    
  }

  onClose()
  {
    this.alert = false;
  }
}
