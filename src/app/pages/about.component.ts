import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    template: `
    <h2 class="title is-3">About Us</h2>
   <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae quo deserunt esse delectus ratione quae nulla voluptate sint sunt illum molestiae iste, odit enim labore nihil. Quaerat, sint ea?</div>
    `,
    styles: [``]
})
export class AboutComponent {
// dependency injection
constructor(private title:Title){
   title.setTitle("About page");
}

}

