import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable()
export class DocumentsBidderAuthGuard implements CanActivate {

    constructor(private route:Router){

    }
    
    canActivate() {
        if (localStorage.getItem("bidderemail") !== null)
        {

            return true;
        }
        else
        {
            this.route.navigate(['/home']);
        }
    }
}