import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title:string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.addTodo.emit({ title: this.title, completed: false});
    this.title=""
  }
}
