import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../providers/user.service';

@Component({
    selector: 'app-contact',
    template: `
    <app-page title="Contact Us">
   <div page-content>
   <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae quo deserunt esse delectus ratione quae nulla voluptate sint sunt illum molestiae iste, odit enim labore nihil. Quaerat, sint ea?</div>
   <button class="button btn-primary" (click)="logout()">Logout</button> 
   <button class="button" (click)="login()">Login Again</button> 
   </div>
   </app-page>
   `,
    styles: [`h2.title {color:red}`],
    // encapsulation:ViewEncapsulation.None
})
export class ContactUsComponent {

    // dependency injection
    constructor(private title: Title,
        private userSvc: UserService) {
        title.setTitle("About page " + userSvc.getUserName());
    }

logout(){
    this.userSvc.logout();
}

login(){
    this.userSvc.fetchUserDetails();
}


}

