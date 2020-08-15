import { Component, OnInit, Input } from '@angular/core';
import { FarmerRegisterService } from '../service/FarmerRegisterService';
import { DocumentsFarmerService } from '../service/DocumentsService';
import { DocumentsFarmer } from '../model/Documents';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-documentsfarmer',
  templateUrl: './documentsfarmer.component.html',
  styleUrls: ['./documentsfarmer.component.css']
})
export class DocumentsfarmerComponent implements OnInit {

  document : DocumentsFarmer;
  documentForm : FormGroup;
  demail:string;
  constructor(private documentSer:DocumentsFarmerService) { 
    // this.demail = this.farmerSer.email;
    this.demail = (localStorage.getItem("email"));
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
    console.log(this.document.Email);
    console.log(this.document.Aadhar);
    this.documentSer.addFarmerDocuments(this.document).subscribe((data) =>{

    })
  }

}
