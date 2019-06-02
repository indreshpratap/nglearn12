import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { appRouting } from './app.routing';
import { NotFoundComponent } from './pages/not-found.component';
import { LoginComponent } from './pages/login.component';
import { ContactUsComponent } from './pages/contactus.component';
import { AdminModule } from 'src/app-modules/admin/admin.module';
import { AppSharedModule } from 'src/app-modules/app-shared/app-shared.module';
import { UserService } from './providers/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './pages/observables.component';


@NgModule({
  declarations: [
    AppComponent,
    //pages
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    ContactUsComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppSharedModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting),
    AdminModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
