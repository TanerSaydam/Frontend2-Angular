import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent {
loginReactiveForm: FormGroup = new FormGroup({
  email: new FormControl("",[Validators.required, Validators.minLength(3), Validators.email]),
  password: new FormControl("", [Validators.required, Validators.minLength(6)])
});

login(){
  if(this.loginReactiveForm.valid){
    console.log(this.loginReactiveForm.value)
  }else{
    if(this.loginReactiveForm.controls["email"].valid === false){
      const element: any = document.getElementById("email");
      element.className = "form-control is-invalid"
    }

    if(this.loginReactiveForm.controls["password"].valid === false){
      const element: any = document.getElementById("password");
      element.className = "form-control is-invalid"
    }
  }
}

checkValidation(controlName: string, event: any){
  const isValid = this.loginReactiveForm.controls[controlName].valid
  if(isValid){
    event.target.className = "form-control is-valid"
  }else{
    event.target.className = "form-control is-invalid"
  }
}


}
