import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-not-found',
    template:`
    <b> Not found </b>`
   
})
export class NotFoundComponent{
constructor(title: Title){
    title.setTitle('404 - Not found');
}
}
