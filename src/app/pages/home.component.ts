import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../providers/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [``]
})
export class HomeComponent {

    // dependency injection
    constructor(private title:Title,
        private userService:UserService){
        title.setTitle("Home page");
        
        setTimeout(() => {
            userService.fetchUserDetails();
            
        }, 3000);
    }


}
