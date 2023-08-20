import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: LayoutComponent,
        children: [
          {
            path: "",
            loadChildren: ()=> import("../home/home.module").then(m=> m.HomeModule)
          },
          {
            path: "about",
            loadChildren: ()=> import("../about/about.module")
          }
        ]
      }
    ])
  ]
})
export class LayoutModule { }
