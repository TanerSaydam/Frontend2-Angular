import { Route } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";

export const notFoundRoute: Route = {
    path: "**",
    component: NotFoundComponent
}