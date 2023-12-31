import { Component } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { ValidateDirective } from '../validate.directive';

@Component({
    selector: 'app-ngform-login',
    templateUrl: './ngform-login.component.html',
    styleUrls: ['./ngform-login.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, ValidateDirective]
})
export class NgformLoginComponent {

  constructor(
    private router: Router,
    private form: FormService
  ){

  }

login(form:NgForm){
  if(form.valid){
    console.log(form.value);
    this.router.navigateByUrl("/");
  }else{
    this.form.markValidationClassForInputs(form);
  }
}
}
