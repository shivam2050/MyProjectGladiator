import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FarmerRegister } from '../model/farmer';


@Component({
  selector: 'app-viewfarmer',
  templateUrl: './viewfarmer.component.html',
  styleUrls: ['./viewfarmer.component.css']
})

export class ViewfarmerComponent implements OnInit {

  farmer;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:50107/api/ViewFarmer").subscribe( data => {
      this.farmer = data;
  }
    );
  }

}
