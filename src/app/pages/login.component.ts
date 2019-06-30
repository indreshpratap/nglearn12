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
            localStorage.removeItem('token');
        this.userService
            .doLogin({ username: this.username, password: this.password })
            .subscribe(res => {
                if (res.status) {
                    let data = res.data;
                    localStorage.setItem('token', data.token);
                    this.router.navigate(["/home"]);
                } else {
                    alert("Username or password is incorrect");
                }
            }, (error) => {
                console.log(error);
            });
        console.log(loginFrom);
        this.username = null;
        this.password = null;
    }
}
