import { Component, OnInit } from '@angular/core';
import Todo from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos:Todo[]
  constructor(private todoService:TodoService) {
  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todo=>{
      this.todos = todo;
    });
  }
  onDelete(todo){
    this.todos = this.todos.filter(t=>t.id !== todo.id );
    // delete from api
    this.todoService.deleteTodo(todo).subscribe(res=>{
      console.log('deleted from api')
    });
  }
  addTodo(todo){
    this.todoService.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo);
    })
  }
}
