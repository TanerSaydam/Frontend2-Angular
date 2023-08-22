import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormValidateDirective } from '../directives/form-validate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FormValidateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
