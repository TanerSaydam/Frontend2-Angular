import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyrouterDirective } from './directives/myrouter.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MyrouterDirective],
  template: `
  <a appMyrouter="/" [routerCheck]="false">
    Home
  </a> |
  <a appMyrouter="/about">
      About
  </a> |
  <a appMyrouter="/contact">
    Contact
  </a>
  <router-outlet></router-outlet>
  
  
  `
})
export class AppComponent {}
