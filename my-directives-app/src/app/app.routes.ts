import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./home/home.component").then(c=> c.HomeComponent)
    },
    {
        path: "about",
        loadComponent: ()=> import("./about/about.component").then(c=> c.AboutComponent)
    },
    {
        path: "contact",
        loadComponent: ()=> import("./contact/contact.component").then(c=> c.ContactComponent)
    }
];
