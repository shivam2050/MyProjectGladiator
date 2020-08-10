import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageObject = [{
    image : './assets/homeImages/farmer(1).jpg',
    thumbImage : './assets/homeImages/farmer(1).jpg'
  },{
    image : './assets/homeImages/farmer(2).jpg',
    thumbImage : './assets/homeImages/farmer(2).jpg'
  },
  {
    image : './assets/homeImages/farmer(3).jpg',
    thumbImage : './assets/homeImages/farmer(3).jpg'
  },
  {
    image : './assets/homeImages/farmer(4).jpg',
    thumbImage : './assets/homeImages/farmer(4).jpg'
  },
  {
    image : './assets/homeImages/farmer(5).jpg',
    thumbImage : './assets/homeImages/farmer(5).jpg'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
