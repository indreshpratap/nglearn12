import { Component } from '@angular/core';

@Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html',
    styles: ['strong, b { color:red; font-size:1.3em; }']

})
export class InterpolationComponent {
    name = "Indresh"; //string
    count = 10; // number
    colors = ['Red', 'Green'];   //array
    info = { id: 10, qty: 20, product: 'Phone' }; // object
    constructor() {

        console.log(this.info.toString());
        setTimeout(() => {
            this.name = 'Pratap';
            this.count = 20;
        }, 3000);
    }
}
