import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { CropData } from '../model/cropData';

@Component({
  selector: 'app-market-val-bid',
  templateUrl: './market-val-bid.component.html',
  styleUrls: ['./market-val-bid.component.css']
})
export class MarketValBidComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  crops;
  ngOnInit() {
    this.httpService.get('http://localhost:50107/api/Crops').subscribe( data => {
      this.crops = data;
      }
    );
  }

}
