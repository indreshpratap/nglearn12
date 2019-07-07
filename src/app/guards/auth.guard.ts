import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../providers/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private userService:UserService){}
   
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('Running can activate');
        return this.userService.hasToken();
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
            console.log('Running can activate child');
            return this.userService.hasToken();
        }
}
