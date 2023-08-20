import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyRoutingModule } from './my-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgformLoginComponent } from './ngform-login/ngform-login.component';
import { ValidateDirective } from './validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ReactiveLoginComponent,
    NgformLoginComponent,
    ValidateDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
