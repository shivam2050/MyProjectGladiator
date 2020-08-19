import { Component, OnInit } from '@angular/core';
import { DocumentsBidderService } from '../service/DocumentsBidderService';
import { DocumentsBidder } from '../model/DocumentsBidder';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-documentsbidder',
  templateUrl: './documentsbidder.component.html',
  styleUrls: ['./documentsbidder.component.css']
})
export class DocumentsbidderComponent implements OnInit {

  document : DocumentsBidder;
  bidemail:string;
  alter:boolean;
  result;
  check:boolean;
  
  constructor(private documentsBidSer:DocumentsBidderService,private router:Router, private http:HttpClient) {
    
    this.alter = true;
    this.check = false;
    this.bidemail = (localStorage.getItem("bidderemail"));
    this.document = new DocumentsBidder();
    if(this.bidemail != undefined)
    {
      this.http.get('http://localhost:50107/api/CheckDocuments?email=' + this.bidemail).subscribe(data => {
        this.result = data;
        if(this.result.length !== 0)
        {
          this.alter = false;
          // this.check = true;
        }
      })
    }
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
    if(this.document.Aadhar === "" || this.document.PAN === "" || this.document.TraderLi === "")
    {
      this.check = true;
    }
    else
    {
      if(this.bidemail == undefined)
      {
        this.router.navigate(['/bidderregistration'])
      }

      else
      {
        this.documentsBidSer.addBidderDocuments(this.document).subscribe((data) =>{
          localStorage.clear();
          this.router.navigate(['/bidderlogin'])
    
        });
      }
    }
  }
  onClick()
  {
    localStorage.clear();
    this.router.navigate(['/bidderlogin']);
  }

  onCross()
  {
    this.check = false;
  }
}
