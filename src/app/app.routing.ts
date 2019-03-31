import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found.component';

export let appRouting: Routes = [
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "**", component: NotFoundComponent },  // Not found **
];