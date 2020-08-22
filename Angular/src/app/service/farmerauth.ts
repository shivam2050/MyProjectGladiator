import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private route:Router){

    }
    
    canActivate() {
        if (localStorage.getItem("loginEmail") !== null)
        {

            return true;
        }
        else
        {
            this.route.navigate(['/login']);
        }
    }
}