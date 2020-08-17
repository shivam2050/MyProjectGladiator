import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-admin-market-add',
  templateUrl: './admin-market-add.component.html',
  styleUrls: ['./admin-market-add.component.css']
})
export class AdminMarketAddComponent implements OnInit {

  constructor(private httpService: HttpClient) {
   }
  cropname;
  price;
  crops: string[];
  ngOnInit() {
    this.httpService.get('http://localhost:50107/api/Crops').subscribe( data => {
      this.crops = data as string [];
      }
    );
  }
  DataPut(){
    console.log(this.price,this.cropname);
     this.httpService.put('http://localhost:50107/api/Crops',{CropTID:101,CropName:this.cropname,Price:this.price}).subscribe
     (data => data);
  }

}
