import { Component, OnInit } from '@angular/core';
import { Admin } from '../adminlogin/admin'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  login:Admin;
  adminLogin : FormGroup;
  result;
  constructor(private router:Router,private http:HttpClient) {
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

  submit()
  {
    console.log(this.login);
    this.http.post('http://localhost:50107/api/AdminLogin',this.login).subscribe(data=>{
      this.result = data;
      console.log(this.result);
      if(this.result.length !== 0)
      {
        this.router.navigate(['/adminhome'])
        localStorage.setItem("loginEmail",(this.login.Id));
        
      }
    })
  }
}
