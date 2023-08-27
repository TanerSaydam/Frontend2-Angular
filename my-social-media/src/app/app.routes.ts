import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: ()=> import("./components/login/login.component")
    },
    {
        path: "register",
        loadComponent: ()=> import("./components/register/register.component")
    },
    {
        path: "",
        loadComponent: ()=> import("./components/layout/layout.component"),
        children: [
            {
                path: "",
                loadComponent: ()=> import("./components/home/home.component")
            }
        ]
    }
];
