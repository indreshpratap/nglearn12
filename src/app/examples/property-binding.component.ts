import { Component } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html'
})
export class PropertyBindingComponent {
    reference='property-container';

username="Ganesh";


    change() {
        this.reference = "changed-ref"+Math.random();
        this.username = "admin";
    }
}