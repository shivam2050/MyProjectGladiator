import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable()
export class BidderAuthGuard implements CanActivate {

    constructor(private route:Router){

    }
    
    canActivate() {
        if (localStorage.getItem("loginBidderEmail") !== null)
        {

            return true;
        }
        else
        {
            this.route.navigate(['/home']);
        }
    }
}