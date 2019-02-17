import { Component } from "@angular/core";

@Component({
    selector: 'app-events',
    templateUrl: "./events.component.html"
})
export class EventsComponent {
    sayHelloMsg = 'Say Hello';
    highClass;
    state;

    sayHello() {
        alert('Say Hello to All :)');
    }

    highlight() {
        this.highClass = 'highlight';
    }

    clearHighlight() {
        this.highClass = '';
    }

    handleEvent(event, msg) {
        
        console.log("Current msg :: ",msg);
        console.log("handle Event :: ", event, msg);
        console.log("Class name on target :: ", event.target.className);
        console.log("Is Alt key pressed :: ", event.altKey);
    }


setCurrentState(selectedState) {
    this.state = selectedState;
}
}