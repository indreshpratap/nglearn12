import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [``]
})
export class HeaderComponent implements OnDestroy {
    user: any = {};
    sub: Subscription;
    constructor(private userService: UserService, private router: Router) {
        this.sub = this.userService
            .getUserInfo().subscribe(res => {
                console.log("Got details in header", res);
                this.user = res;
            });
    }

    ngOnDestroy() {
        console.log("Clearing subscription...");
        this.sub.unsubscribe();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/']);
    }
}
