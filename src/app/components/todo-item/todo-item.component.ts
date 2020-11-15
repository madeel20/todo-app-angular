import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import Todo from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter <Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }
  ngOnInit(): void {
  }
  setClasses(){
    return {
        todo:true,
        "is-complete":this.todo.completed
    }
  }
  onToggle(todo){
    // change ui
   todo.completed =  !this.todo.completed;
   // update through api
    this.todoService.updateTodo(todo).subscribe(res=>{console.log(res)})
  }
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
