import { Sold } from '../model/sold';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SoldService{
    soldCrop : Sold;
    constructor(private http:HttpClient){

    }

    public getSoldCrop(email:string){
        console.log(email);
        return this.http.get("http://localhost:50107/api/SoldHistory?email=" + email);
    }
}