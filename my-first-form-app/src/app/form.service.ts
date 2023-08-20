import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  markValidationClassForInputs(form:NgForm){
    for(let el in form.controls){
      if(!form.controls[el].valid){
        const element:any = document.getElementById(el);
        element.className = "form-control is-invalid"
      }
    }
  }
}
