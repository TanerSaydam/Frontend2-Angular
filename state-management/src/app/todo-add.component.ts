import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule],
  template:`
  <input type="text" #work>
  <button (click)="save(work)">Save</button>
  `
})
export class TodoAddComponent {

  constructor(private todo: TodoService) {
    
  }

  //@Output() saveEvent = new EventEmitter<string>()
  save(event:any){
    //this.saveEvent.emit(event.value);
    this.todo.todos.push(event.value);
    event.value = "";
  }
}
