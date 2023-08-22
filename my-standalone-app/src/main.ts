import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {provideHttpClient} from '@angular/common/http'
import { RouterModule, provideRouter } from "@angular/router";

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter([
      {
        path: "",
        component: AppComponent
      }
    ]),
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      BrowserModule,
      FormsModule
    )
  ]
});