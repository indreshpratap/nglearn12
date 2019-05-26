import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({providedIn:'root'})
@Injectable()
export class UserService {
apiUrl = 'http://localhost:3000/';
    private user:any = {};
    constructor(private http:HttpClient){
        http.get(this.apiUrl+'user')
        .subscribe((res:any)=>{
            console.log('Response', res);
            this.user.name =res.name;
            this.user.email = res.email;
            this.user.role = res.role;
        })
       
    }


    getUserName(){
        return this.user.name;
    }

    getRole(){
        return this.user.role;
    }

    getUser(){
        return this.user;
    }

    doLogin(data){
        this.http.post(this.apiUrl+"login", data)
        .subscribe(res=>{
            console.log(res);
        })
    }


}