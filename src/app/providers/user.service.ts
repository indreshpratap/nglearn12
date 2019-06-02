import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable({providedIn:'root'})
@Injectable()
export class UserService {
    apiUrl = 'http://localhost:3000/';

    subject = new Subject();
    private user: any = {};
    constructor(private http: HttpClient) {


    }


    fetchUserDetails() {
        this.http.get(this.apiUrl + 'user')
            .subscribe((res: any) => {
                console.log('Response', res);
                this.user.name = res.name;
                this.user.email = res.email;
                this.user.role = res.role;
                this.subject.next(this.user);
            })
    }


    logout(){
        this.subject.next({});
    }
    getUserName() {
        return this.user.name;
    }

    getRole() {
        return this.user.role;
    }

    getUser() {
        return this.user;
    }

    doLogin(data) {
        return this.http.post(this.apiUrl + "login", data)

    }

    getUserInfo() {
        return this.subject.asObservable();
    }


}