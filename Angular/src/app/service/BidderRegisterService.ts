import { BidderRegister } from '../model/bidder';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BidderRegisterService{
    bidders : BidderRegister;
    constructor(private http:HttpClient){
    }

    public postBidder(bidders : BidderRegister){
        return this.http.post("http://localhost:50107/api/BidderRegistration",bidders);
    }
}