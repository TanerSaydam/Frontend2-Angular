import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button (click)="getTodos()">Get Todos</button>
  <ul>
    <li *ngFor="let t of todos">
      {{t.title}}
    </li>
  </ul>
  
  `
})
export class AppComponent {
  todos: TodoModel[] = [];

    constructor(private http: HttpClient){
      //this.getTodos();
    }

    getAll(){
      //1.Kullanım yöntemi
      this.http.get("").subscribe({
        next: (res:any)=> {
          //gelen cevabı burada işliyoruz
        },
        error (err: HttpErrorResponse){
          //hataları işle
        }
      })

      //2.Kullanım yöntemi
      this.http.get("").subscribe((res:any)=> {
        //gelen cevabı burada işliyoruz
      })

      //3.Kullanım yöntemi
      this.http.get<any>("").subscribe(res=> {
        //gelen cevabı burada işliyoruz
      })
    }

    getTodos(){
      this.http.get<TodoModel[]>("https://jsonplaceholder.typicode.com/todos/")
        .subscribe(res=> this.todos = res);
    }


}
