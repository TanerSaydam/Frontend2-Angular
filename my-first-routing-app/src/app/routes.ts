import { Routes } from "@angular/router";
import { layoutRoute } from "./layout/layout.route";
import { loginRoute } from "./login/login.route";
import { notFoundRoute } from "./not-found/not-found.route";

export const routes: Routes = [
    loginRoute,
    layoutRoute,
    
];

