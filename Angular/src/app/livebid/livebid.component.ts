import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule }from '@angular/common/http';
import { LiveBid } from './livebid';

@Component({
  selector: 'app-livebid',
  templateUrl: './livebid.component.html',
  styleUrls: ['./livebid.component.css']
})
export class LivebidComponent implements OnInit {

  live:LiveBid;
  crop;
  result;
  alert:boolean;
  wrongBid:boolean;
  c:number;
  currentBid;
  bidemail:string;
  constructor(private http:HttpClient) {
    this.alert = false;
    this.wrongBid = false;
    this.c=0;
    this.live = new LiveBid(); 
    this.bidemail = (localStorage.getItem("loginEmail"));
  }

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/LiveCropBid').subscribe( data => {
      this.crop = data;
      }
    );
    this.http.get('http://localhost:50107/api/CurrentBid').subscribe( data => {
      this.currentBid = data;
      }
    );
  }

  makeBid(id,base,bid){
    this.live.CropId = id;
    this.live.BasePrice = base;
    this.live.Bemail = this.bidemail;
    this.live.BidPrice = bid;

    console.log(this.currentBid);

    this.currentBid.forEach(element => {
      if(element.CropID == this.live.CropId)
      {
        
        if(this.live.BidPrice <= element.CurrentBid && this.live.BidPrice >= this.live.BasePrice){
          this.wrongBid = true;
          this.c = 1;
        }
      }
      debugger;
      
    });
    if(this.live.BasePrice >= this.live.BidPrice)
    {
      this.alert = true;
      this.c = 1;
    }
    if(this.c == 0)
    {
      this.http.post('http://localhost:50107/api/AddLiveBid',this.live).subscribe(data=>{
      this.result = data;
      this.http.get('http://localhost:50107/api/CurrentBid').subscribe( data => {
        this.currentBid = data;
        }
      );
    });

    }
    // if(this.live.BidPrice <= this.live.BasePrice)
    // {
    //   this.alert = true;
    //   this.c = 1;

    // }
    
    // if(this.live.BidPrice <= this.currentBid[0].CurrentBid && this.live.BidPrice >= this.live.BasePrice){
    //   this.wrongBid = true;
    //   this.c = 1;
    // }
    // if(this.c == 0)
    // {
    //   console.log("sjia");
    //   console.log(this.currentBid[0].CurrentBid);
    // }
    
  }

  onClose(){
    this.alert = false;
    this.wrongBid = false;
    this.c = 0;
  }

}
