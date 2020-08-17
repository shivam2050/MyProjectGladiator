import { Component, OnInit } from '@angular/core';
import { FarmerRegister } from '../model/farmer';
import { FarmerRegisterService } from '../service/FarmerRegisterService';
import { Farmer } from '../farmerlogin/farmer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private farmerService : FarmerRegisterService, private router:Router) {
    this.alert = false;
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
    if(val !== this.farmer.password)
    {
      this.alert = true;
    }
    
    if(this.alert == false)
    {
      localStorage.setItem("email",(this.farmer.femail));
      // this.farmerService.email = this.farmer.femail;
      this.farmerService.postFarmer(this.farmer).subscribe((data) => {
        this.result = data;
      })
      this.router.navigate(['/documentsfarmer'])
    }

  }
  onClose()
  {
    this.alert = false;
  }
}
