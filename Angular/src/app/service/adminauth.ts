import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private route:Router){

    }
    
    canActivate() {
        if (localStorage.getItem("loginAdminEmail") !== null)
        {

            return true;
        }
        else
        {
            this.route.navigate(['/home']);
        }
    }
}