import { Component } from '@angular/core';

@Component({
    selector: 'app-ngclass-style',
    templateUrl: './ng-class-style.component.html'
})
export class NgClassStyleComponent {

    message: string;
    messageType: string;

    classArray = ['notification', 'is-link'];
    themeClass = 'is-warning';
    conditionalStyle: any = { border: 'none', backgroundColor: 'green', color: 'white' };

    success() {
        this.message = "Information saved successfully";
        this.messageType = "ok";
        this.classArray.push('msg-box');
    }

    error() {
        this.message = "Failed to save";
        this.messageType = "error";
    }

    addWidth() {
        this.conditionalStyle.width = "500px";
    }

    addHeight() {
        this.conditionalStyle.height = "500px";
    }
}
