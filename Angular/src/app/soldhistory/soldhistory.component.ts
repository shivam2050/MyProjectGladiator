import { Component, OnInit } from '@angular/core';
import { SoldService } from '../service/SoldService';
import { Sold } from '../model/sold';

@Component({
  selector: 'app-soldhistory',
  templateUrl: './soldhistory.component.html',
  styleUrls: ['./soldhistory.component.css']
})
export class SoldhistoryComponent implements OnInit {

  email:string;
  sold;
  count:number;
  constructor(private solSer:SoldService) {
    this.count = 0;
   }

  ngOnInit(): void {
    this.email = (localStorage.getItem("loginEmail"));
    this.solSer.getSoldCrop(this.email).subscribe((data) => {
      this.sold = data;
    })
  }

}
