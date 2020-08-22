import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable()
export class DocumentsFarmerAuthGuard implements CanActivate {

    constructor(private route:Router){

    }
    
    canActivate() {
        if (localStorage.getItem("email") !== null)
        {

            return true;
        }
        else
        {
            this.route.navigate(['/home']);
        }
    }
}