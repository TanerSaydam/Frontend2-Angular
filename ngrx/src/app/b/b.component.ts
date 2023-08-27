import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule],
  template:`
  <h1>B Component</h1>
  <h1>{{$count | async}}</h1>
  <h1>{{count}}</h1>
  `
})
export class BComponent {

  $count: Observable<number>;
  count: number = 0;

  constructor(private store: Store<{count:number}>) {
    this.$count = this.store.select("count"); //1.yöntem

    this.store.select("count").subscribe(res=> this.count = res); //2.yöntem
  }


}
