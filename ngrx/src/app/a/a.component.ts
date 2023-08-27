import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment } from '../reducer/count.reducer';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>A Component</h1>
    <button (click)="incrementMethod()">Increment</button>
  `
})
export class AComponent {
  constructor(private store: Store<{count: number}>){}

  incrementMethod(){
    this.store.dispatch(increment())
  }
}
