import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { appRouting } from './app.routing';
import { HeaderComponent } from './layout/header.component';
import { NotFoundComponent } from './pages/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    //layout
    HeaderComponent,
    //pages
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
