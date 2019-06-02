import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.less']
})
export class LoginComponent {

    username: string = 'Test';
    password: string;

    constructor(private userService: UserService, private router: Router) { }



    doLogin(loginFrom) {

        console.log("username is : ", this.username);

        console.log("password is : ", this.password);

        this.userService
            .doLogin({ username: this.username, password: this.password }).subscribe(res => {
                this.router.navigate(["/home"]);
            });
        console.log(loginFrom);
        this.username = null;
        this.password = null;
    }
}
