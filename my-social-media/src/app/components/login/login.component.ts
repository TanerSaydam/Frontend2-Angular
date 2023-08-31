import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { FormValidateDirective } from 'form-validate-angular';

import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, FormValidateDirective, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent {
  constructor(
    private http: HttpService,
    private swal: SwalService,
    private router: Router
  ){}

  login(form: NgForm){    
    if(form.valid){
      this.http.post("Auth/Login",form.value, (res)=> {
        this.swal.callSwal("Login is successful!","","success");
        localStorage.setItem("response", JSON.stringify(res));
        this.router.navigateByUrl("/");
      });
    }
  }
}
