import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = "";
  names:any = [];

  save(){
    this.names.push(this.name);
    this.name = "";
    alert("Kayıt işlemi başarılı!")
  }
}
