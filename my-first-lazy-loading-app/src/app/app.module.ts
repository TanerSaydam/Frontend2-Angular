import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot([
      {
        path: "login",
        loadChildren: ()=> import("./login/login.module").then(m=> m.LoginModule)
      },
      {
        path: "",
        loadChildren: ()=> import("./layout/layout.module").then(m=> m.LayoutModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
