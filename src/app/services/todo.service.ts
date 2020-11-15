import { Injectable } from '@angular/core';
import  { HttpClient,HttpHeaders } from '@angular/common/http'
import Todo from '../models/Todo';
import { Observable } from 'rxjs';

const headerOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string = 'https://jsonplaceholder.typicode.com/todos';
  limit:string = '?_limit=5'
  
  constructor(private http:HttpClient) { }
  //get Todos
  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(this.url+this.limit);
  }
  // update Todo
  updateTodo(todo:Todo):Observable<any>{
    let url = this.url + "/" + todo.id;
    return this.http.put(url,todo,headerOptions);
  }
  deleteTodo(todo):Observable<any>{
    let url = this.url + "/" + todo.id;
    return this.http.delete(url);
  }
  addTodo(todo):Observable<Todo>{
    return this.http.post<Todo>(this.url,todo,headerOptions);
  }
}
