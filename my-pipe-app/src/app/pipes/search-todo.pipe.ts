import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Pipe({
  name: 'searchTodo',
  standalone: true
})
export class SearchTodoPipe implements PipeTransform {

  transform(value: any, search: string, propertyName: string): any {
    if(search === ""){
      return value;
    }

    const result = value.filter((p:any) => 
      p[propertyName].toLowerCase().includes(search.toLowerCase()));

    return result;
  }

}
