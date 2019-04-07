import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [``]
})
export class HomeComponent {

    // dependency injection
    constructor(private title:Title){
        title.setTitle("Home page");
    }

}
