import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appConfig } from "./appConfig";

bootstrapApplication(AppComponent,appConfig)

