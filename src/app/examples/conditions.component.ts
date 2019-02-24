import { Component } from "@angular/core";

@Component({
    selector: 'app-conditions',
    templateUrl: "./conditions.component.html"
})
export class ConditionsComponent {

    isLoggedIn = true;
    role = 'admin';
    state = 1;

    changeRole(currentRole) {
        this.role = currentRole;
        if (currentRole) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    }


    increment(){
        ++this.state;
    }

    decrement(){
        --this.state;
    }

    clear() {
        this.state = 0;
    }


}