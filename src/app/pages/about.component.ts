import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    template: `this is about tempalted`,
    styles: [``]
})
export class AboutComponent {
// dependency injection
constructor(private title:Title){
   title.setTitle("About page");
}

}

