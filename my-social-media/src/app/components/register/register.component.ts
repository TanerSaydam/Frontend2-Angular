import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { FormValidateDirective } from 'form-validate-angular';

import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FormValidateDirective],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export default class RegisterComponent {
  file: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private swal: SwalService) {
    
  }

  singUp(form: NgForm){
    if(form.valid && this.file != undefined){      
      const formData = new FormData();
      formData.append("name",form.value.name);
      formData.append("userName",form.value.userName);
      formData.append("email",form.value.email);
      formData.append("password",form.value.password);
      formData.append("image",this.file,this.file.name);

      this.http.post("Auth/Register",formData, (res)=> {
        this.swal.callSwal("Register is successful. You can sign in now!","","success");
        this.router.navigateByUrl("/login");
      });
    }
  }

  setFile(event:any){
    this.file = event.target.files[0];
  }
}
