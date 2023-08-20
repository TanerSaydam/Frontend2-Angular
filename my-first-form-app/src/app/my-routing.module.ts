import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NgformLoginComponent } from './ngform-login/ngform-login.component';

const routes: Routes = [
  {
    path: "reactive-login",
    component: ReactiveLoginComponent
  },
  {
    path: "ngform-login",
    component: NgformLoginComponent
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyRoutingModule { }
