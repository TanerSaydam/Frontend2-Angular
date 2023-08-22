import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorDirective } from '../directives/change-color.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChangeColorDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
