import { Component, OnInit } from '@angular/core';
import { CropSellService } from '../service/sellCropService';
import { CropType } from '../model/croptype';
import { SellCropForm } from '../model/sellForm';
import { FormGroup } from '@angular/forms';
import {HttpClient,HttpClientModule} from '@angular/common/http';
 
@Component({
  selector: 'app-sellcrop',
  templateUrl: './sellcrop.component.html',
  styleUrls: ['./sellcrop.component.css']
})
export class SellcropComponent implements OnInit {

  email:string;
  croptype;
  details;
  selectedDeviceObj="two";
  sellForm : SellCropForm;
  cropname;
  sell : FormGroup;
  result;
  crops;
  constructor(private cropSellSer:CropSellService, private http:HttpClient) {
    this.sellForm = new SellCropForm();
    this.http.get('http://localhost:50107/api/Crops').subscribe( data => {
      this.crops = data;
      }
    );
   }

  ngOnInit(): void {
    this.email = (localStorage.getItem("loginEmail"));
    this.cropSellSer.getCropType().subscribe((data) => {
      this.croptype = data;
    })
  }

  getCrop(value)
  {
    console.log(value.TypeName);
    this.selectedDeviceObj = value;
    this.cropSellSer.getCropDetails(value.TypeName).subscribe((data) => {
      this.details = data;
    })
  }

  getPhVal(file)
  {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file.files[0]);
    reader1.onload = function() {
      //console.log(this.images);
      this.sellForm.PhVal = reader1.result.toString();
      }.bind(this);
  }

  // name(cr){
  //   this.cropname = cr;
  //   console.log(this.cropname);
  // }
  onSubmit(){
    console.log(this.sellForm.Femail);
    this.sellForm.Femail = this.email;
    this.cropSellSer.addSellCrop(this.sellForm).subscribe((data) => {
      this.result = data;
    })
  }

}



