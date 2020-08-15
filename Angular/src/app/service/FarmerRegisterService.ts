import { FarmerRegister } from '../model/farmer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FarmerRegisterService{
    farmer : FarmerRegister;
    constructor(private http:HttpClient){
    }
    // email:string;
    // demail:string;
    public postFarmer(farmers : FarmerRegister){
        return this.http.post("http://localhost:50107/api/FarmerRegistration",farmers);
    }
}