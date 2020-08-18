import { Component, OnInit } from '@angular/core';
import { FarmerRegister } from '../model/farmer';
import { FarmerRegisterService } from '../service/FarmerRegisterService';
import { Farmer } from '../farmerlogin/farmer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent implements OnInit {

  farmer : FarmerRegister;
  farmerForm : FormGroup;
  result;
  alert;
  already;
  check;
  constructor(private farmerService : FarmerRegisterService, private router:Router, private http:HttpClient) {
    this.alert = false;
    this.check = false;
    this.farmer = new FarmerRegister();
    this.farmerForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      femail : new FormControl(null, [Validators.required,Validators.email]),
      contact : new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      address : new FormControl(null, Validators.required),
      city : new FormControl(null, Validators.required),
      state : new FormControl(null, Validators.required),
      pin : new FormControl(null, Validators.required),
      accno : new FormControl(null, Validators.required),
      ifsc : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required),
      confirmpassword : new FormControl(null, Validators.required)
    });
   }

  ngOnInit(): void {
  }

  public get name()
  {
    return this.farmerForm.get('name');
  }

  public get femail()
  {
    return this.farmerForm.get('femail');
  }

  public get contact()
  {
    return this.farmerForm.get('contact');
  }
  
  public get address()
  {
    return this.farmerForm.get('address');
  }

  public get city()
  {
    return this.farmerForm.get('city');
  }

  public get state()
  {
    return this.farmerForm.get('state');
  }

  public get pin()
  {
    return this.farmerForm.get('pin');
  }

  public get accno()
  {
    return this.farmerForm.get('accno');
  }

  public get ifsc()
  {
    return this.farmerForm.get('ifsc');
  }

  public get password()
  {
    return this.farmerForm.get('password');
  }

  public get confirmpassword()
  {
    return this.farmerForm.get('confirmpassword');
  }

  insertFarmer(val)
  {
    this.http.get('http://localhost:50107/api/CheckFarmerRegistered?email=' + this.farmer.femail).subscribe(data =>{
      this.already = data;
      console.log(this.already);
      if(this.already.length !== 0)
      {
        this.check = true;
      }
      
      else
      {
        if(val !== this.farmer.password)
        {
          this.alert = true;
        }
        
        if(this.check == false && this.alert == false)
        {
          localStorage.setItem("email",(this.farmer.femail));
          console.log(this.already);
          // this.farmerService.email = this.farmer.femail;
          // this.farmerService.postFarmer(this.farmer).subscribe((data) => {
          //   this.result = data;
          //   this.router.navigate(['/documentsfarmer'])
          // })
        }
      }
    })
    // console.log(this.already);

  }
  onClose()
  {
    this.alert = false;
  }

  onCross()
  {
    console.log("dfd");
    this.check = false;
  }
}
