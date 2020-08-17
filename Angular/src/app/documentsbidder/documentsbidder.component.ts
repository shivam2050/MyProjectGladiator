import { Component, OnInit } from '@angular/core';
import { DocumentsBidderService } from '../service/DocumentsBidderService';
import { DocumentsBidder } from '../model/DocumentsBidder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentsbidder',
  templateUrl: './documentsbidder.component.html',
  styleUrls: ['./documentsbidder.component.css']
})
export class DocumentsbidderComponent implements OnInit {

  document : DocumentsBidder;
  bidemail:string;
  constructor(private documentsBidSer:DocumentsBidderService,private router:Router) {
    this.bidemail = (localStorage.getItem("bidderemail"));
    this.document = new DocumentsBidder();
   }

  ngOnInit(): void {
  }

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
  getTrader(file)
  {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file.files[0]);
    reader1.onload = function() {
      //console.log(this.images);
      this.document.TraderLi = reader1.result.toString();
      }.bind(this);
  }

  insertDocuments(){
    this.document.Email = this.bidemail;
    console.log(this.document.Email);
    console.log(this.document.Aadhar);
    this.documentsBidSer.addBidderDocuments(this.document).subscribe((data) =>{

    });
    this.router.navigate(['/bidderlogin'])
  }

}
