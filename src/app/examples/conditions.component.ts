import { Component } from "@angular/core";

@Component({
    selector: 'app-conditions',
    templateUrl: "./conditions.component.html"
})
export class ConditionsComponent {

    isLoggedIn = true;
    role = 'admin';

    changeRole(currentRole) {
        this.role = currentRole;
        if (currentRole) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    }


}