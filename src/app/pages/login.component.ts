import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.less']
})
export class LoginComponent {

    username: string = 'Test';
    password: string;

    constructor(private userService:UserService) { }

   

    doLogin(loginFrom){
        
        console.log("username is : ", this.username);
        
        console.log("password is : ", this.password);
        
        this.userService
        .doLogin({username:this.username, password:this.password});
        console.log(loginFrom);
        this.username = null;
        this.password = null;
    }
}
