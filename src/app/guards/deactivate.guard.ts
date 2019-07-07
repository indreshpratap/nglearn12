import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from './candeactivate.comp';

@Injectable({providedIn:'root'}) 
export class DeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
    canDeactivate(
        component: CanDeactivateComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
       return component.canDeactivate();
    }
}