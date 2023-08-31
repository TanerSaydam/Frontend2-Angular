import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

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
        canActivateChild: [()=> inject(AuthService).checkAuthorize()],
        children: [
            {
                path: "",
                loadComponent: ()=> import("./components/home/home.component")
            }
        ]
    }
];
