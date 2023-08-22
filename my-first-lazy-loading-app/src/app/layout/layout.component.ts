import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [NavbarComponent, RouterModule]
})
export default class LayoutComponent {

}
