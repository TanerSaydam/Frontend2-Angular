import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, AComponent, BComponent, CComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}
