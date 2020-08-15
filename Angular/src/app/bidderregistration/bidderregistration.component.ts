import { Component, OnInit } from '@angular/core';
import { BidderRegister } from '../model/bidder';
import { BidderRegisterService } from '../service/BidderRegisterService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bidderregistration',
  templateUrl: './bidderregistration.component.html',
  styleUrls: ['./bidderregistration.component.css']
})
export class BidderregistrationComponent implements OnInit {

  bidder : BidderRegister;
  bidderForm : FormGroup;
  count : number;
  result;
  constructor(private bidderService:BidderRegisterService) {
    this.count = 0;
    this.bidder = new BidderRegister();
    this.bidderForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      bemail : new FormControl(null, [Validators.required,]),
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
    return this.bidderForm.get('name');
  }

  public get bemail()
  {
    return this.bidderForm.get('bemail');
  }

  public get contact()
  {
    return this.bidderForm.get('contact');
  }
  
  public get address()
  {
    return this.bidderForm.get('address');
  }

  public get city()
  {
    return this.bidderForm.get('city');
  }

  public get state()
  {
    return this.bidderForm.get('state');
  }

  public get pin()
  {
    return this.bidderForm.get('pin');
  }

  public get accno()
  {
    return this.bidderForm.get('accno');
  }

  public get ifsc()
  {
    return this.bidderForm.get('ifsc');
  }

  public get password()
  {
    return this.bidderForm.get('password');
  }

  public get confirmpassword()
  {
    return this.bidderForm.get('confirmpassword');
  }

  insertBidder()
  {
    localStorage.setItem("bidderemail",(this.bidder.bemail));
    if(this.count == 0)
    {
      this.bidderService.postBidder(this.bidder).subscribe((data) => {
        this.result = data;
      })
      this.count += 1;
    }
  }

}
