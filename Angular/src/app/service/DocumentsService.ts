import { DocumentsFarmer } from '../model/Documents';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DocumentsFarmerService{
    constructor(private http:HttpClient)
    {

    }

    public addFarmerDocuments(documents:DocumentsFarmer)
    {
        return this.http.post("http://localhost:50107/api/DocumentsUpload",documents);
    }
}