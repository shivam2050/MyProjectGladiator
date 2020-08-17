import { CropType } from '../model/croptype';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellCropForm } from '../model/sellForm';

@Injectable()

export class CropSellService{
    constructor(private http:HttpClient)
    {

    }

    public getCropType()
    {
        return this.http.get("http://localhost:50107/api/CropType");
    }

    public getCropDetails(type){
        return this.http.get("http://localhost:50107/api/CropData?type=" + type);
    }

    public addSellCrop(sellFrom:SellCropForm)
    {
        return this.http.post("http://localhost:50107/api/SellCrop",sellFrom);
    }
}