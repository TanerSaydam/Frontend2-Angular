import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MyRoutingModule } from './app/my-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, ReactiveFormsModule, FormsModule, MyRoutingModule)]
})
  .catch(err => console.error(err));
