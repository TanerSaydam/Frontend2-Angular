import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoAddComponent } from './todo-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodosComponent, TodoAddComponent],
  template:`  
  <!-- <app-todo-add (saveEvent)="save($event)"></app-todo-add>
  <hr>
  <app-todos [todos]="todos"></app-todos> -->
  <app-todo-add></app-todo-add>
  <hr>
  <app-todos></app-todos>
  `
})
export class AppComponent {
  // todos: string[] = [];

  // save(value: any){
  //   this.todos.push(value);
  // }
}
