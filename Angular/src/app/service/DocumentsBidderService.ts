import { DocumentsBidder } from '../model/DocumentsBidder';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DocumentsBidderService{
    constructor(private http:HttpClient)
    {

    }

    public addBidderDocuments(documents:DocumentsBidder)
    {
        return this.http.post("http://localhost:50107/api/DocumentsUpload",documents);
    }
}