import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.less']
})
export class LoginComponent {

    username: string = 'Test';
    password: string;

    constructor() { }

   

    doLogin(loginFrom){
        
        console.log("username is : ", this.username);
        
        console.log("password is : ", this.password);
        
        console.log(loginFrom);
        this.username = null;
        this.password = null;
    }
}
