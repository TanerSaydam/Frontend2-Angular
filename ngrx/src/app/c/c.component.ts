import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [CommonModule],
  template:`
  <h1>C Component</h1>
  <h2>{{store.select("count") | async}}</h2>
  `

})
export class CComponent {
  constructor(public store: Store<{count: number}>){

  }
}
