import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-for',
    templateUrl: './ng-for.component.html'
})
export class NgForComponent {
    
    listItems;
    listItems2;
    counter = 0;
    todos  = [];

    constructor() {
        this.listItems = ['one', 'two', 'three', 'four'];
        this.listItems2 = [];
    }

    addNew() {
        let id = ++this.counter;
        this.listItems.push("List item " + id);
        this.listItems2.push({ id: id, name: "Entity Name "+ id });
    }

    removeRow(item, index) {
        console.log("remove item " + item + " at index " + index);
        this.listItems.splice(index, 1);
    }

    addTodo(input) {
       this.todos.push(input.value);
       input.value = '';
    }

    doneTodo(index) {
        this.todos.splice(index,1);
    }



}
