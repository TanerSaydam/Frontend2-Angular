import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
