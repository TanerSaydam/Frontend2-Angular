import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TodoModel } from './models/todo.model';
import { FormsModule } from '@angular/forms';
import { SearchTodoPipe } from './pipes/search-todo.pipe';
import { NamePipe } from './pipes/name.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ExampleService } from './services/example.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchTodoPipe, NamePipe ],
  template: `
  <button (click)="getAll()">Listeyi Getir</button>
  <button (click)="setTodos()">Todoyu Doldur</button>
  <br>
  <br>
  <!-- <ul>
    <li *ngFor="let u of users | name">{{u}}</li>
  </ul> -->
  <h1>{{money | currency : 'TRY':'symbol-narrow'
      :'1.2-2'}}</h1>
  <h1>{{date | date:'dd.MM.yyy HH:mm:ss'}}</h1>
  <input type="datetime-local" [(ngModel)]="newDate">
  <!-- <br>
  <input type="search" [(ngModel)]="search">
  <br>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Id</th>
        <th>UserId</th>
        <th>Title</th>
        <th>Completed</th>
        <th>İşlemler</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let todo of todos | searchTodo: search: 'title' let i = index">
        <td>{{i + 1}}</td>
        <td>{{todo.id}}</td>
        <td>{{todo.userId}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.completed}}</td>
        <td>
          <button>Güncelle</button>
          <button>Sil</button>
        </td>
      </tr>
    </tbody>
  </table> -->
  `
  
})
export class AppComponent {
  
  search: string = "";
  todos: TodoModel[] = [];

  date: Date = new Date();
  newDate: any;
  users: string[] = [
    "Taner","Altan","Serap","Merve","Yasmin","Fatih"
  ]
  
  money: number = 199859.25923123123;

  constructor(
  private http:HttpClient,
  private datePipe: DatePipe,
 ){
  this.newDate = datePipe.transform(new Date(),'yyyy-MM-dd HH:mm');
 }


 setTodos(){
  for (let i = 0; i < 10000; i++) {
    const element = {
      id: i,
      userId: 1,
      title: "Todo " + i,
      completed: false
    };

    this.todos.push(element);    
  }
 }
 getAll(){
  this.http.get<TodoModel[]>("https://jsonplaceholder.typicode.com/todos/")
  .subscribe({
    next: (res)=> {      
      this.todos = res;
    },
    error: (err:HttpErrorResponse)=> {
      console.log(err)
    }
  })
 }


}
