import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

    @Input() title:string;

    savePage(){
        alert('Clicked on saved page');
    }
}
