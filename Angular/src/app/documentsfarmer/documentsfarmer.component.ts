import { Component, OnInit, Input } from '@angular/core';
import { FarmerRegisterService } from '../service/FarmerRegisterService';
import { DocumentsFarmerService } from '../service/DocumentsService';
import { DocumentsFarmer } from '../model/Documents';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-documentsfarmer',
  templateUrl: './documentsfarmer.component.html',
  styleUrls: ['./documentsfarmer.component.css']
})
export class DocumentsfarmerComponent implements OnInit {

  document : DocumentsFarmer;
  documentForm : FormGroup;
  demail:string;
  check:boolean;
  alter:boolean;
  result;
  constructor(private documentSer:DocumentsFarmerService, private router:Router, private http:HttpClient) { 
    this.alter = true;
    this.check = false;
    // this.check = true;
    this.demail = (localStorage.getItem("email"));
    if(this.demail != undefined)
    {
      this.http.get('http://localhost:50107/api/CheckDocuments?email=' + this.demail).subscribe(data => {
        this.result = data;
        if(this.result.length !== 0)
        {
          this.alter = false;
          // this.check = true;
        }
      })
    }
    // this.demail = this.farmerSer.email;
    this.document = new DocumentsFarmer();
    // this.documentForm = new FormGroup({
    //   // Email:new FormControl(null,Validators.required),
    //   // AAdhar:new FormControl(null, Validators.required),
    //   // PAN:new FormControl(null,Validators.required),
    //   // CertificateFarmer:new FormControl(null,Validators.required)
    // })
  }

  ngOnInit(): void {
  }

  // public get Email()
  // {
  //   return this.documentForm.get('Email');
  // }
  // public get Aadhar()
  // {
  //   return this.documentForm.get('Aadhar');
  // }
  // public get PAN()
  // {
  //   return this.documentForm.get('PAN');
  // }
  // public get CertificateFarmer()
  // {
  //   return this.documentForm.get('CertificateFarmer');
  // }

  getAadhar(file)
  {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file.files[0]);
    reader1.onload = function() {
      //console.log(this.images);
      this.document.Aadhar = reader1.result.toString();
      }.bind(this);
  }
  getPan(file)
  {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file.files[0]);
    reader1.onload = function() {
      //console.log(this.images);
      this.document.PAN = reader1.result.toString();
      }.bind(this);
  }
  getCertificate(file)
  {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file.files[0]);
    reader1.onload = function() {
      //console.log(this.images);
      this.document.CertificateFarmer = reader1.result.toString();
      }.bind(this);
  }

  insertDocuments(){
    this.document.Email = this.demail;
    // console.log(this.document.Email);
    // console.log(this.document.Aadhar);
    if(this.document.Aadhar === "" || this.document.PAN === "" || this.document.CertificateFarmer === "")
    {
      this.check = true;
    }
    else
    {
      if(this.demail == undefined)
      {
        this.router.navigate(['/farmerregistration'])
      }
      else
      {

        this.documentSer.addFarmerDocuments(this.document).subscribe((data) =>{
          localStorage.clear();
          this.router.navigate(['/farmerlogin'])
        });
        
      }
    }
  }

  onClick()
  {
    localStorage.clear();
    this.router.navigate(['/farmerlogin']);
  }

  onCross()
  {
    this.check = false;
  }

}
