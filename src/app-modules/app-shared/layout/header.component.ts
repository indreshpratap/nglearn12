import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [``]
})
export class HeaderComponent implements OnInit {
   user;
    constructor(private userService:UserService) {
       this.user = this.userService.getUser();
     }

    ngOnInit(): void { }
}
