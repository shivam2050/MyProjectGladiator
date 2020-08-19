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
  states:any;
  details;
  state_id:string;
  constructor(private farmerService : FarmerRegisterService, private router:Router, private http:HttpClient) {
    this.http.get('http://localhost:50107/api/CityState').subscribe(data=>{
      this.states = data;
    })
    this.state_id="";
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
      pin : new FormControl(null, [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      accno : new FormControl(null,[ Validators.required,Validators.minLength(9),Validators.maxLength(18)]),
      ifsc : new FormControl(null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      password : new FormControl(null, [Validators.required,Validators.minLength(8)]),
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

  getCity(value)
  {
    if(this.states == undefined)
    {
      return;
    }
    for(var items of this.states)
    {
      if(items.state_name == value)
      {
        this.state_id = items.state_code
        break;
      }
    }

     console.log(this.state_id,this.states,value);
    this.http.get('http://localhost:50107/api/CityState?id='+this.state_id).subscribe((data) => {
      this.details = data;
    })
  }

  insertFarmer(val)
  {
    this.http.get('http://localhost:50107/api/CheckFarmerRegistered?email=' + this.farmer.femail).subscribe(data =>{
      this.already = data;
      console.log(this.already);
      if(this.already.length !== 0)
      {
        localStorage.setItem("email",(this.farmer.femail));
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
          console.log(this.farmer);
          this.farmerService.postFarmer(this.farmer).subscribe((data) => {
            this.result = data;
            this.router.navigate(['/documentsfarmer'])
          })
        }
      }
    })
    // console.log(this.already);

  }

  redirect(){
    localStorage.setItem("email",(this.farmer.femail));
    this.router.navigate(['/documentsfarmer']);
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
