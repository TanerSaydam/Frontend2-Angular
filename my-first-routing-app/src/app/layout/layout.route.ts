import { Route } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { homeRoute } from "../home/home.route";
import { aboutRoute } from "../about/about.route";
import { blogRoute } from "../blog/blog.route";
import { contactRoute } from "../contact/contact.route";
import { notFoundRoute } from "../not-found/not-found.route";

export const layoutRoute: Route = {
    path: "",
    component: LayoutComponent,
    children: [
        homeRoute,
        aboutRoute,
        contactRoute,
        blogRoute,
        notFoundRoute,
    ]
}