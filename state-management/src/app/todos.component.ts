import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  template:`
  <ul>
    <li *ngFor="let t of todo.todos">
      {{t}}
    </li>
  </ul>  
  `
})
export class TodosComponent {
//@Input() todos: string[] = [];
constructor(public todo: TodoService){

}
}
