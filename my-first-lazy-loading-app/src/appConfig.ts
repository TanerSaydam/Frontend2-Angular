import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
    providers: [
     
      provideRouter([
        {
          path: "login",
          loadComponent: ()=> import("./app/login/login.component")
        },
        {
          path: "",
          loadComponent: ()=> import("./app/layout/layout.component"),
          children: [
            {
              path: "",
              loadComponent: ()=> import("./app/home/home.component").then(c=> c.HomeComponent),
            },
            {
              path: "about",
              loadComponent: ()=> import("./app/about/about.component").then(c=> c.AboutComponent)
            }
          ]
        }
      ])
    ]
  }