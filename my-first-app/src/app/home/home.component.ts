import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
names:any = [];

save(form:any){
  console.log(form)
  this.names.push(form.value);
  form.reset();
}

checkInputIsValid(input:any){
  if(input.validity.valid){
    input.className = "form-control is-valid"
  }else{
    input.className = "form-control is-invalid"
  }
}
}
