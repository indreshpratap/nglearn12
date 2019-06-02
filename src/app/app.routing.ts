import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found.component';
import { LoginComponent } from './pages/login.component';
import { ContactUsComponent } from './pages/contactus.component';
import { ObservableComponent } from './pages/observables.component';

export let appRouting: Routes = [
    // { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "", component: LoginComponent },
    {
        path: "home", component: HomeComponent,
        children: [
            {path:"",redirectTo:"about", pathMatch:"prefix"},
            { path: "about", component: AboutComponent },
            { path: "contact-us", component: ContactUsComponent },
            { path: "observables", component: ObservableComponent },

        ]
    },
    { path: "**", component: NotFoundComponent },  // Not found **

];