import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { InterpolationComponent } from './examples/interpolation.component';
import { PropertyBindingComponent } from './examples/property-binding.component';
import { EventsComponent } from './examples/events.component';
import { ConditionsComponent } from './examples/conditions.component';
import { HeaderComponent } from './layout/header.component';
import { NgClassStyleComponent } from './examples/ng-class-style.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventsComponent,
    ConditionsComponent,
    HeaderComponent,
    NgClassStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
